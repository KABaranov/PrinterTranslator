<template>
  <div class="d-flex flex-row" :style="{backgroundColor: color5}">
    <!-- SideBar -->
    <div 
    class="h-screen d-flex flex-column justify-space-around" :style="{backgroundColor: color1}" style="width: 13%;">
      <div>
        <v-btn 
          block rounded="0" 
          class="w-100 my-8 text-h4" 
          height="90px"
          style="padding-top: 10%; padding-bottom: 10%;" 
          :style="{backgroundColor: color2, color: color4, boxShadow: shadowActive}"
          @click="changeColor1"
        >
          Kuka
        </v-btn>
        <v-btn 
          block rounded="0" 
          class="w-100 my-8 text-h4" 
          height="90px"
          style="padding-top: 10%; padding-bottom: 10%" 
          :style="{backgroundColor: color4, color: color2, boxShadow: shadowDisabled}"
          @click="changeColor2"
        >
          Fanuc
        </v-btn>
        <v-btn 
          block rounded="0" 
          class="w-100 my-8 text-h4" 
          height="90px"
          style="padding-top: 10%; padding-bottom: 10%" 
          :style="{backgroundColor: color4, color: color2, boxShadow: shadowDisabled}"
          @click="changeColor3"
        >
          AT300
        </v-btn>
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
            label="Oscillation Function"
            :items="oscillationFunction"
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
      <v-row align="center" justify="space-evenly" class="ma=4 pa-4">
        <!-- Progress + Start -->
        <div class="w-50">
          <v-progress-linear
          v-model="value"
          :buffer-value="bufferValue"
          :color="color5"
        ></v-progress-linear>
        </div>
        <v-btn 
        :style="{backgroundColor: color4, color: color2}"
        width="100px" height="100px" rounded="circle" size="x-large"
        @click="checkProgressLine"
        >
        Start
      </v-btn>
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
        shadowActive: "-4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        shadowDisabled: 'none',
        oscillationFunction: ['None', 'Sin', 'Cos', 'Circle'],
        value: 0,
      }
    },
    methods: {
      changeColor1(){
        this.color1 = '#EEC170',
        this.color2 = '#F2A65A',
        this.color3 = '#F58549',
        this.color4 = '#772F1A',
        this.color5 = '#585123'
      },
      changeColor2(){
        this.color1 = '#335C67',
        this.color2 = '#FFF3B0',
        this.color3 = '#E09F3E',
        this.color4 = '#9E2A2B',
        this.color5 = '#540B0E'
      },
      changeColor3(){
        this.color1 = '#38A3A5',
        this.color2 = '#22577A',
        this.color3 = '#57CC99',
        this.color4 = '#C7F9CC',
        this.color5 = '#80ED99'
      },
      checkProgressLine(){
        if (this.value < 100) {
          this.value = this.value + 10
        }
        else {
          this.value = 0
        }
      }
    }
  }
</script>
