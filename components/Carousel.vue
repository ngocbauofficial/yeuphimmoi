<template>
  <div class="mt-10">
  <h1 class="order-1 text-xl sm:text-xl sm:leading-none font-extrabold tracking-tight text-gray-200 mb-4"><span class=" m-1">Phim Mới</span></h1>
    <VueSlickCarousel  v-bind="settings">
     <!-- <div v-for="index in 5" :key="index" class="bg-black rounded overflow-hidden shadow-lg">
      <img class="block w-full" src="https://animehay.tv/uploads/images/2021/06/quyen-tu-luong-thumbnail-1623646553.png" alt="Mountain">
      <div class="px-6 py-4">
        <div class="text-gray-300 font-bold text-xl mb-2">Mountain</div>
       
      </div>
      <div class="px-6 pt-4 pb-2">
       
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">#winter</span>
      </div>
    </div> -->
<!-- component -->
<!-- Create By Joker Banny -->
<div  v-for="index in 10" :key="index"  class="">
  <NuxtLink to="/phim/123" class="block cursor-pointer relative container mx-auto max-w-sm bg-gray-700 rounded-md shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
  <img  class="rounded-tl-md rounded-tr-md w-full block h-48 object-cover" src="https://animehay.tv/uploads/images/2021/06/quyen-tu-luong-thumbnail-1623646553.png" alt="">
  <div class="px-1 py-4">

    <h2 class="text-md text-center text-gray-200 font-semibold">by Stuar Manson {{index}}</h2>
    
  </div>
  <span class="inline-flex items-center justify-center px-1.5 py-1.5 top-1.5 left-1.5 mr-2 text-xs font-bold leading-none text-red-100 bg-red-800 rounded-full absolute">Tập 19/200</span>
  </NuxtLink>
</div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    props:['listMovie'],
    data(){
        return {
            settings:{
            "dots": false,
            "arrows":true,
            "infinite": true,
            "speed": 500,
            "autoplay":true,
            "slidesToShow": 5,
            "slidesToScroll": 1,
           "slidesPerRow": 1,
            "focusOnSelect": true,
           "touchThreshold": 1,
           "waitForAnimate":false,
           "swipeToSlide ":true,
            "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2
      }
    }
  ]
            }          
        }
    }
  }
</script> 
<style>
.slick-slide{
  padding: 5px;
}

</style>