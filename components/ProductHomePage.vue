<template>
   <div v-if="products.length" class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-3">
        <Product v-for="item in products" :product="item" :key="item.id"/>
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
  
    },
      async mounted() {
    const productHomePageCenter = await this.$getProductHomePageCenter({
      Start: 0,
      Length: 16,
    }).then((res) => {
      return res.data.data.data;
    });
    
    this.products = productHomePageCenter;
  },
}
</script>
