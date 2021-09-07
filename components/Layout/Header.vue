<template>
  <div>
    <div>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <NuxtLink to="/" class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                  alt="Workflow logo"
                />
              </NuxtLink>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <div
                    v-for="(item, index) in navigation"
                    class="relative"
                    :key="'destop_' + index"
                  >
                    <div v-if="item.subMenu">
                      <span
                        @mouseover="onOver(index)"
                        @mouseleave="onLeave()"
                        :class="[
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-md font-medium cursor-pointer',
                        ]"
                        :aria-current="item.current ? 'page' : undefined"
                      >
                        {{ item.text }}</span
                      >
                      <div
                        @mouseover="onOver(index)"
                        @mouseleave="onLeave()"
                        v-show="show && selectedId == index"
                        class="
                          bg-gray-800
                          border-t
                          top-7
                          border-gray-400
                          grid-cols-3
                          py-2
                          px-4
                          absolute
                          grid
                          submenu
                          gap-3
                          z-10
                        "
                      >
                        <div
                          v-for="colIndex in 3"
                          :key="colIndex"
                          class="grid grid-rows-6 py-5 gap-3"
                        >
                          <NuxtLink
                            class="
                              text-gray-400
                              row-span-1
                              hover:bg-gray-700
                              hover:text-gray-200
                              px-3
                              py-2
                              rounded-md
                              text-sm
                              font-medium
                            "
                            v-for="submenu in item.subMenu.filter(
                              (x) => x.DisplayColumn == colIndex
                            )"
                            :to="submenu.Link"
                            :key="submenu.Id"
                          >
                            {{ submenu.Name }}
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <NuxtLink
                        :class="[
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-md font-medium',
                        ]"
                        :aria-current="item.current ? 'page' : undefined"
                        :to="item.link"
                      >
                        {{ item.text }}</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <!-- search  -->
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button
                @click="toggle"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  text-gray-400
                  hover:text-white
                  hover:bg-gray-700
                  focus:outline-none
                  focus:bg-gray-700
                  focus:text-white
                "
              >
                <svg
                  :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <svg
                  :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
          <div class="px-2 pt-2 pb-3 sm:px-3">
            <a
              v-for="(item, index) in navigation"
              :key="'mobile_' + index"
              :href="item.href"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-400
                hover:text-white
                hover:bg-gray-700
              "
              >{{ item.text }}</a
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      show: false,
      selectedId: 1,
      categorys: [],
      country: [],
      navigation: [
        {
          code: "homepage",
          text: "Trang Chủ",
          link: "/",
          current: true,
        },
        {
          code: "categories",
          text: "Thể Loại",
          link: "/",
          current: false,
          subMenu: [],
        },
        {
          code: "countries",
          text: "Quốc Gia",
          link: "/",
          current: false,
          subMenu: [],
        },
        {
          code: "phimle",
          text: "Phim Lẻ",
          link: "/phim-le",
          current: false,
        },
        {
          code: "phimbo",
          text: "Phim Bộ",
          link: "/phim-bo",
          current: false,
        },
      ],
    };
  },
  async fetch() {},
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    onOver(index) {
      this.show = true;
      console.log(index);
      this.selectedId = index;
    },
    onLeave() {
      this.show = false;
      this.selectedId = null;
    },
  },
  computed: {
  
  },
  async mounted() {
     // country

    const countries = await this.$getCountryNavigation({
      Start: 0,
      Length: 100,
    }).then((res) => {
      return res.data.data.data;
    });
    for (var i = 0; i < countries.length; i++) {
      countries[i].Link = "/quoc-gia/" + countries[i].Link;
    }
    this.navigation.filter((item) => item.code == "countries")[0].subMenu = countries;
    // category
    const categories = await this.$getCategoryNavigation({
      Start: 0,
      Length: 100,
    }).then((res) => {
      return res.data.data.data;
    });
    for (var i = 0; i < categories.length; i++) {
      categories[i].Link = "/danh-muc/" + categories[i].Link;
    }
    this.navigation.filter((item) => item.code == "categories")[0].subMenu =
      categories;

   
  },
};
</script>
<style scoped>
.submenu {
  width: 550px;
}
</style>