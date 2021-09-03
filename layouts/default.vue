<template>
<div class="bg-gray-900 min-h-screen">
        <Header/>
    <div class="container mx-auto">
       <transition name="fade" mode="out-in">
      <Nuxt />
       </transition>
    </div>
   
</div>

</template>
<script>
import Header from '../components/Layout/Header.vue'

export default {
   components:{
       Header
   },
    mounted() {
    setTimeout(() => {
      document.body.classList.add("default-transition");
    }, 100);
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* width */
body::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  body::-webkit-scrollbar-track {
    background: #f1f1f1; 
      border-radius: 5px;
  }
   
  /* Handle */
  body::-webkit-scrollbar-thumb {
    background: #566170; 
      border-radius: 5px;
  }
  
  /* Handle on hover */
  body::-webkit-scrollbar-thumb:hover {
    background: #566170; 
  }
  html{
    background-color: #111827;
  }
</style>