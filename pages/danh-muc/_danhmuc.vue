<template>
    <div>
        <h2 class="font-bold py-5 text-gray-300 text-2xl text-medium text-center upercase">Phim Anime</h2>
    <div class="flex gap-3">
        <div class="relative inline-flex">
  <svg class="w-2 h-2 absolute text-gray-300 -top-1 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select class="text-sm  bg-gray-800  rounded-md text-gray-300 h-8 pl-5 pr-10 hover:border-gray-400 focus:outline-none appearance-none">
    <option>-- Sắp Xếp --</option>
    <option>Xem Nhiều</option>
    <option>Mới Sản Xuất</option>
       <option>Ngày Đăng Phim</option>
  </select>
</div>
<div class="relative inline-flex">
  <svg class="w-2 h-2 absolute text-gray-300 -top-1 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select class="text-sm  bg-gray-800  rounded-md text-gray-300 h-8 pl-5 pr-10 hover:border-gray-400 focus:outline-none appearance-none">
    <option>-- Quốc Gia --</option>
    <option>Trung Quốc</option>
    <option>Hàn Quốc</option>
  
  </select>
</div>
<div class="relative inline-flex">
  <svg class="w-2 h-2 absolute text-gray-300 -top-1 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select class="text-sm  bg-gray-800  rounded-md text-gray-300 h-8 pl-5 pr-10 hover:border-gray-400 focus:outline-none appearance-none">
    <option>-- Năm Sản Xuất --</option>
    <option>2021</option>
    <option>2020</option>
  </select>
</div>
<div class="relative inline-flex">
  <svg class="w-2 h-2 absolute text-gray-300 -top-1 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select class="text-sm  bg-gray-800  rounded-md text-gray-300 h-8 pl-5 pr-10 hover:border-gray-400 focus:outline-none appearance-none">
    <option>-- Thể Loại --</option>
    <option>Anime</option>
    <option>Trinh Thám</option>
  </select>
</div>

    </div>
    <div class="grid grid-cols-5 gap-3 py-10">
      <div  v-for="item in products" :key="item.id">
         <Product :product="item"  />
      </div>
    </div>
    </div>
</template>
<script>
import  Product  from '../../components/Product'

export default {
   components:{Product},
    data() {
      return {
        products: []
      }
    },
   fetch() {
    for (let i = 0; i < 20; i++) {
  this.products.push({
            id:1,
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
