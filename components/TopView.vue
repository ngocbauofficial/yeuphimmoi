
<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex list-none flex-wrap flex-row">
        <li class="-mb-px mr-2 cursor-pointer last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold  px-1 py-2 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': openTab !== 1, 'text-white bg-gray-600': openTab === 1}">
           Top Xem
          </a>
        </li>
        <li class="-mb-px mr-2 cursor-pointer last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold  px-1 py-2 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': openTab !== 2, 'text-white bg-gray-600': openTab === 2}">
            Top Thích
          </a>
        </li>
   
      </ul>
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div v-for="(item,index) in 10" :key="index" class="grid items-center grid-cols-12 pb-2 gapx-3">
                <div class="col-span-2">
                    <button
                    type="button"
                    :class="[index<3?'bg-yellow-500 hover:bg-yellow-600 ':'bg-blue-500 hover:bg-blue-600 ','focus:outline-none text-gray-200 text-normal font-semibold text-sm w-6 h-6 rounded-full hover:shadow-lg']"
                    >
                    {{item}}
                    </button>
                </div>
                <div class="col-span-10">
                    <span class="block text-gray-200">Trường An Như Cố</span>
                    <span class="block text-sm text-gray-400">51.000 lượt xem</span>
                </div>
                </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
                Completely synergize resource taxing relationships via
                premier niche markets. Professionally cultivate one-to-one
                customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>