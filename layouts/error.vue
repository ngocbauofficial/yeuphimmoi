<template>
  <div>
    <h1 v-if="error.statusCode === 404">Không tồn tại trang này</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Trang Chủ</NuxtLink>
  </div>
</template>
<script>
  export default {
    props: ['error'],
   
  }
</script>