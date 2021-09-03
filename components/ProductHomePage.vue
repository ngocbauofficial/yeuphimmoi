<template>
   <div class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-3">
        <Product  v-for="item in products" :product="item" :key="item.id"/>
    </div>
</template>
<script>
import  Product  from './Product.vue'

export default {
   components:{
       Product
   },
   data() {
      return {
        products: []
      }
    },
   fetch() {
    for (let i = 0; i < 20; i++) {
  this.products.push({
            id:i,
            name:"Thiên Hành Cửu Ca",
            image:"https://animehay.tv/uploads/images/2021/01/dau-la-dai-luc-thumbnail.png",
            episode:16,
            episodeTotal:16,
            link:"/phim/123"
    });
    }
    }
}
</script>
