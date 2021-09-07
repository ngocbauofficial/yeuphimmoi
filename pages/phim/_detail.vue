<template>
    <div>
        <!-- panner -->
    <div class="relative mx-auto pt-6">
<img class="opacity-60 block h-72 w-full object-cover object-center" :src="movie.Panner">
         <!-- <h2 class="absolute text-gray-200 font-bold left-1/2 transform -translate-x-2/4 bottom-24 text-2xl text-center uppercase">Quyến Tư Lượng</h2> -->
    </div>
    <div class="relative grid grid-cols-8">
            <div class=" col-span-3 p-8">
              <span class="text-gray-300 font-normal block pb-1">Đạo Diễn : {{movie.Director?movie.Director:'N/A'}}</span>
              <span class="text-gray-300 font-normal block pb-1">Năm Sản Xuất : 2021</span>
                 <span class="text-gray-300 font-normal block pb-1">Thể Loại : <NuxtLink :to="movie.Category.Link" class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
{{movie.Category.Name}}
</NuxtLink></span>
               <span class="text-gray-300 font-normal block pb-1">Quốc Gia : <NuxtLink :to="movie.Country.Link" class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
{{movie.Country.Name}}
</NuxtLink></span>
                 <span class="text-gray-300 font-normal block pb-1">Số Tập : <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
  16/20
</span> </span>
                  <span class="text-gray-300 font-normal block pb-1">Diễn Viên : N/A </span>
            </div>
            <div class="transform -translate-y-52 col-span-2">
                    <img class=" rounded-md shadow-2xl   block" :src="movie.Avatar">
      <div class="inline-block w-full mt-2">
                  <div class="grid grid-cols-2 gap-1">
                      <button @click="downLoad()" type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-700 hover:bg-green-800 hover:shadow-lg flex items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
                      Tải Phim
                    </button>

                     <NuxtLink :to="'/xem-phim/'+movie.Link" class="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Xem Phim
                    </NuxtLink>
                  </div>
                   
                    
                </div>
            </div>
            <div class="col-span-3 p-4">
                   <h2 class="p-3 text-yellow-600 font-bold text-2xl text-center uppercase">{{movie.Name}}</h2>
             <!-- rate -->
                 <ul class="flex justify-center">
                   <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    </li>
    
                </ul>
                <span class="text-center block text-gray-400">(9.83 điểm / 12 lượt)</span>
            </div>
    </div>
    <!-- tap phim -->
    <div class="transform -translate-y-32 max-w-7xl mx-auto sm:px-6 lg:px-8">
      
       <span class="text-gray-300 font-medium">Tập Phim : </span>
       <span>
          <NuxtLink v-for="(item,index) in movie.MovieProductEpisode" :to="'/xem-phim/'+movie.Link+'?tap='+item.EpisodeNumber" :key="index" class="mr-1 mb-1 inline-block px-4 py-1 text-xs font-medium leading-6 text-center text-white transition bg-indigo-500 rounded shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none waves-effect">
            Tập {{item.EpisodeNumber}}
          </NuxtLink>
       </span>
     
        <!-- /End replace -->
          <div>
        <span class="block text-gray-300 text-md pt-10" v-html="movie.Description">
        
        </span>
       
    </div>
      </div>
    <!-- mo ta -->
  
    </div>
</template>
<script>

export default {
  async asyncData({$axios, params,error}) {
    var link = params.detail;
   const movie = await $axios.get(`api/movieproduct/GetByLink/${link}`)
   .then((item)=> {return item.data.data})
   .catch(e=>{
         error({ statusCode: 404, message: 'Post not found' })
   });
    return { movie }
  },
      methods:{
        downLoad(){
            this.$toast.info('Tính năng sắp ra mắt')
        }
      }
}
</script>
