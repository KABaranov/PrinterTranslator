<template>
  <div class="w-100 h-100 d-flex justify-center align-center" :style="{backgroundColor: bgColor}">
    <div class="bg-white d-flex flex-column" style="width: 90%; height: 90%;">
      <div class="w-50 h-25" style="background-size: 100%; background-image: url('../assets/xw-name.png');"></div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        bgColor: '#1e1e1e',
      }
    }
  }
</script>
