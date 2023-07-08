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
        <div class="rounded-lg pa-2" :style="{backgroundColor: color3}" style="width: 33%">
          <v-file-input clearable label="Input File"></v-file-input>
          <v-file-input clearable label="Output File" disabled></v-file-input>
        </div>
      </v-col>
      <v-row class="mx-2 mt-1">
        <v-col align="center" class="rounded-lg mx-1 w-25" :style="{backgroundColor: color3}">
          <div class="text-h5 my-4" :style="{color: color4}">Welding Parameters</div>
          <v-text-field class="px-4" clearable label="Weld Feed Rate (mm/sec)"></v-text-field>
          <v-text-field class="px-4" clearable label="Idle Feed Rate (mm/sec)"></v-text-field>
          <v-text-field class="px-4" clearable label="Min Move Length (mm)"></v-text-field>
          <v-text-field class="px-4" clearable label="Layer Height (mm)"></v-text-field>
          <v-text-field class="px-4" clearable label="Forging Feed Rate (mm/sec)"></v-text-field>
          <v-text-field class="px-4" clearable label="Forging Layer Height (mm)"></v-text-field>
        </v-col>
        <v-col align="center" class="rounded-lg mx-1 w-25" :style="{backgroundColor: color3}">
          <div class="text-h5 my-4" :style="{color: color4}">Oscillation Parameters</div>
          <v-select
            clearable
            class="px-4"
            label="Select"
            :items="['Вариант 1', 'Вариант 2', 'Вариант 3']"
          ></v-select>
          <v-text-field class="px-4" clearable label="X Amplitude (mm)"></v-text-field>
          <v-text-field class="px-4" clearable label="Y Amplitude (mm)"></v-text-field>
          <v-text-field class="px-4" clearable label="Discretization (pcs)"></v-text-field>
        </v-col>
        <v-col align="center" class="rounded-lg mx-1 w-25" :style="{backgroundColor: color3}">
          <div class="text-h5 my-4" :style="{color: color4}">Initialization Parameters</div>
          <v-text-field class="px-4" clearable label="Safe Z Position (mm)"></v-text-field>
          <v-text-field class="px-4" clearable label="Time Between Layers (mm/sec)"></v-text-field>
          <v-text-field class="px-4" clearable label="Min Move Length (mm)"></v-text-field>
          <v-text-field class="px-4" clearable label="Layer Height (mm)"></v-text-field>
          <v-text-field class="px-4" clearable label="Forging Feed Rate (mm/sec)"></v-text-field>
          <v-text-field class="px-4" clearable label="Forging Layer Height (mm)"></v-text-field>
        </v-col>
      </v-row>
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
