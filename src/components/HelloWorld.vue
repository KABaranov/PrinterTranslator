<template>
  <div class="d-flex flex-row" :style="{backgroundColor: color3}">
    <!-- SideBar -->
    <div 
    class="h-screen d-flex flex-column justify-space-around" :style="{backgroundColor: color1}" style="width: 13%;">
      <div>
        <button class="w-100 my-3" style="padding-top: 10%; padding-bottom: 10%;" :style="{backgroundColor: color2, color: color4}">Kuka</button>
        <button class="w-100 my-3" style="padding-top: 10%; padding-bottom: 10%;" :style="{backgroundColor: color4, color: color2}">Fanuc</button>
        <button class="w-100 my-3" style="padding-top: 10%; padding-bottom: 10%;" :style="{backgroundColor: color4, color: color2}">AT300</button>
      </div>
      <div class="w-100 d-flex justify-center">
        <img class="w-50" src="/xweld.png" alt="XWeld">
      </div>
    </div>
    <!-- Main Part -->
    <div class="w-100 my-6" :style="{backgroundColor: color2}">
      <v-col justify="start">
        <!-- Input Files -->
        <div class="rounded-lg w-25 pa-5" style="height: 10%;" :style="{backgroundColor: color3}">
          <v-file-input clearable label="Input File"></v-file-input>
          <v-file-input clearable label="Output File" disabled></v-file-input>
        </div>
      </v-col>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        color1: '#EEC170',
        color2: '#F2A65A',
        color3: '#F58549',
        color4: '#772F1A',
        color5: '#585123',
      }
    },
  }
</script>