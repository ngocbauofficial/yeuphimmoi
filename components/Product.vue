<template>
    <div class="relative rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
   <NuxtLink :to="product.link" >
  <img class="w-full block h-56 object-cover" :src="product.image" alt="" />
    <div class="p-4 text-center bg-gray-700">
        <span class="absolute top-1 left-1 inline-flex items-center justify-center px-1.5 py-1.5 text-xs font-bold leading-none text-red-100 bg-red-800 rounded-md ">
           Tập {{product.episode}}/{{product.episodeTotal}}
            </span>
      <h2 class="font-medium text-center text-gray-200 text-md">{{product.name}}</h2>
      <span class="absolute items-center flex right-0 bottom-16 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-gray-900 uppercase last:mr-0 mr-1">
 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg> 9.5
  </span>
      </div>
   </NuxtLink>
  
  </div>
</template>
<script>

export default {
  props:['product'],
   metaInfo () {
      return {
        product: this.product,
      }
    }
}
</script>
