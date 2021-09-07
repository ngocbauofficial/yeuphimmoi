<template>
  <div class="mt-10">
    <h1
      class="
        order-1
        text-xl
        sm:text-xl
        sm:leading-none
        font-extrabold
        tracking-tight
        text-gray-200
        mb-4
      "
    >
      <span class="m-1">Phim Mới</span>
    </h1>
    <VueSlickCarousel v-if="data.length" v-bind="settings">
      <div v-for="item in data" :key="item.Id" class="">
        <NuxtLink
          :to="'/phim/'+item.Link"
          class="
            block
            cursor-pointer
            relative
            container
            mx-auto
            max-w-sm
            bg-gray-700
            rounded-md
            shadow-lg
            hover:scale-105
            hover:shadow-2xl
            transform
            transition-all
            duration-500
          "
        >
          <img
            class="rounded-tl-md rounded-tr-md w-full block h-48 object-cover"
            :src="item.Avatar"
            alt=""
          />
          <div class="flex items-center justify-center h-14 px-1 py-4">
            <h2 class="text-sm text-center text-gray-200 font-semibold">
              {{ item.Name }}
            </h2>
          </div>
          <span
            class="
              inline-flex
              items-center
              justify-center
              px-1.5
              py-1.5
              top-1.5
              left-1.5
              mr-2
              text-xs
              font-bold
              leading-none
              text-red-100
              bg-red-800
              rounded-full
              absolute
            "
            >Tập {{ item.MovieProductEpisodeCurrent}}/{{ item.EpisodesTotal }}</span
          >
        </NuxtLink>
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  props: ["data"],
  data() {
    return {
      settings: {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        slidesPerRow: 1,
        focusOnSelect: true,
        touchThreshold: 1,
        waitForAnimate: false,
        swipeToSlide : true,
        pauseOnFocus:true,
        pauseOnHover:true,
        touchMove:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    };
  },
};
</script> 
<style>
.slick-slide {
  padding: 5px;
}
</style>