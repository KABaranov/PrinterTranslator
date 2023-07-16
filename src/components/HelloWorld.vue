<template>
  <div class="w-100 h-100 d-flex justify-center align-center" :style="{backgroundColor: bgColor}">
    <!-- Главная страница -->
    <div class="flex-column" style="width: 90%; height: 90%;" :style="{display: mainPage}">
      <div class="w-50 h-25 d-flex" :style="{backgroundImage: xweldImg}"></div>
      <div class="h-50 w-100 d-flex justify-space-around">
        <div class="kuka w-25 h-100 rounded-xl d-flex flex-column align-center justify-space-evenly" @click="openKuka">
          <div :style="{backgroundImage: kukaImg, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}" style="width: 60%; height: 60%;"></div>
          <div class="text-h3 text-white font-weight-normal">KUKA</div>
        </div>
        <div class="fanuc w-25 h-100 rounded-xl d-flex flex-column align-center justify-space-evenly" @click="openFanuc">
          <div :style="{backgroundImage: fanucImg, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}" style="width: 60%; height: 60%;"></div>
          <div class="text-h3 text-white font-weight-normal">FANUC</div>
        </div>
        <div class="at300 w-25 h-100 rounded-xl d-flex flex-column align-center justify-space-evenly" @click="openAT">
          <div :style="{backgroundImage: at300Img, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}" style="width: 60%; height: 60%;"></div>
          <div class="text-h3 text-white font-weight-normal">AT300</div>
        </div>
      </div>
    </div>
    <!-- Kuka -->
    <div class="flex-column" style="width: 97%; height: 95%;" :style="{display: kukaPage}">
      <div class="d-flex flex-row">
        <div class="d-flex align-center justify-center rounded" :style="{backgroundColor: kukaColor1}" 
        style="width: 50px; height: 50px; cursor: pointer;" @click="openMainPage">
          <v-icon icon="mdi-arrow-left" size="x-large"></v-icon>
        </div>
      </div>
      <div class="d-flex flex-column w-100 h-100 align-end" style="padding: 10px 0 0 80px;">
        <!-- Files -->
        <div class="kuka-menu w-100 d-flex flex-column rounded" :style="{backgroundColor: kukaColor2}">
          <div class="pt-4 px-4 d-flex align-center justify-space-between">
            <div style="width: 45%;"><v-file-input clearable variant="outlined" density=compact label="Input File"></v-file-input></div>
            <div style="width: 45%;"><v-file-input clearable variant="outlined" density=compact label="Output Folder"></v-file-input></div>
          </div>
        </div>
        <!-- First -->
        <div class="w-100 mt-4 d-flex justify-space-between">
            <div class="kuka-menu d-flex flex-column w-100 pt-2 rounded align-center justify-space-between" :style="{backgroundColor: kukaColor2}">
              <div class="text-subtitle-1 font-weight-bold" style="cursor: default;">Welding Parameters</div>
              <v-text-field v-model="kukaWFR" class="w-75 mt-3" clearable density="mini" label="Weld Feed Rate (mm/sec)"></v-text-field>
              <v-text-field v-model="kukaIFR" class="w-75" clearable density="mini" label="Idle Feed Rate (mm/sec)"></v-text-field>
              <div class="d-flex justify-space-between w-75">
                <v-text-field v-model="kukaUF" class="mr-5" density="mini" label="UF:"></v-text-field>
                <v-text-field v-model="kukaUT" density="mini" label="UT:"></v-text-field>
              </div>
              <v-select
                class="w-75" density="mini"
                label="Base" v-model="kukaBase"
                :items="['Var', 'Var']"
              ></v-select>
            </div>
            <div class="kuka-menu d-flex flex-column w-100 mx-4 pt-2 rounded align-center justify-space-between" :style="{backgroundColor: kukaColor2}">
              <div class="text-subtitle-1 font-weight-bold" style="cursor: default;">Oscillation Parameters</div>
                <v-select
                  class="w-75 mt-3" density="mini"
                  label="Oscillation Function" v-model="kukaOFunc"
                  :items="['Var', 'Var']"
                ></v-select>
                <v-text-field v-model="kukaXAmp" class="w-75" clearable density="mini" label="X Amplitude (mm)"></v-text-field>
                <v-text-field v-model="kukaYAmp" class="w-75" clearable density="mini" label="Y Amplitude (mm)"></v-text-field>
                <v-text-field v-model="kukaDisc" class="w-75" clearable density="mini" label="Discretization (pcs)"></v-text-field>
            </div>
            <div class="kuka-menu d-flex flex-column w-100 mr-4 pt-2 rounded align-center justify-space-between" :style="{backgroundColor: kukaColor2}">
              <div class="text-subtitle-1 font-weight-bold" style="cursor: default;">Initialization Parameters</div>
              <v-text-field v-model="kukaLayerHeight" class="w-75 mt-3" clearable density="mini" label="Layer Height (mm)"></v-text-field>
              <v-text-field v-model="kukaMinMoveLen" class="w-75" clearable density="mini" label="Minimum Move Length (mm)"></v-text-field>
              <v-text-field v-model="kukaMaxSplineLen" class="w-75" clearable density="mini" label="Maximum Spline Length (mm)"></v-text-field>
              <v-text-field v-model="kukaComLim" class="w-75" clearable density="mini" label="Commands Limit (mm)"></v-text-field>
            </div>
            <div class="kuka-menu d-flex flex-column w-100 pt-2 rounded align-center" :style="{backgroundColor: kukaColor2}">
              <div class="text-subtitle-1 font-weight-bold w-100" style="cursor: default; text-align: center">Kuka Zero Position</div>
              <div class="d-flex flex-column justify-space-between align-center mt-3">
                <div class="d-flex align-center" style="width: 145%;">
                  <v-text-field v-model="kukaXZeroPos" class="w-100 mx-1" density="mini" label="X (mm)"></v-text-field>
                  <v-text-field v-model="kukaYZeroPos" class="w-100" density="mini" label="Y (mm)"></v-text-field>
                  <v-text-field v-model="kukaZZeroPos" class="w-100 mx-1" density="mini" label="Z (mm)"></v-text-field>
                </div>
                <div class="d-flex align-center" style="width: 145%;">
                  <v-text-field v-model="kukaADeg" class="w-100 mx-1" density="mini" label="A (deg)"></v-text-field>
                  <v-text-field v-model="kukaBDeg" class="w-100" density="mini" label="B (deg)"></v-text-field>
                  <v-text-field v-model="kukaCDeg" class="w-100 mx-1" density="mini" label="C (deg)"></v-text-field>
                </div>
                <div class="d-flex align-center" style="width: 145%;">
                  <v-text-field v-model="kukaE1" class="mx-1" density="mini" label="E1 (deg)"></v-text-field>
                  <v-text-field v-model="kukaE2" density="mini" label="E2 (deg)"></v-text-field>
                </div>
              </div>
            </div>
        </div>
        <!-- Last -->
        <div class="d-flex align-center justify-space-between h-100 w-100 mt-4">
          <div class="kuka-menu mr-4 d-flex flex-column h-100 w-50 rounded" :style="{backgroundColor: kukaColor2}">
            <div class="text-subtitle-1 font-weight-bold w-100 text-center" style="cursor: default;">Oscillation Plot</div>

          </div>
          <div class="d-flex justify-start h-100 w-50">
            <div class="kuka-menu h-100 w-50 justify-start pa-4 mr-4 d-flex flex-column rounded" :style="{backgroundColor: kukaColor2}">
              <div class="text-subtitle-1 font-weight-bold w-100 text-center" style="cursor: default;">Additional Parameters</div>
              <div class="h-50 d-flex flex-column justify-start">
                <v-switch v-model="kukaWithoutARC" class="ma-0 pa-0" label="Without ARC" inset></v-switch>
                <v-switch v-model="kukaSplitLay" class="ma-0 pa-0" label="Split Layers" inset></v-switch>
                <v-switch v-model="kukaUseWeldSpeed" class="ma-0 pa-0" label="Use Weld Speed" inset></v-switch>
              </div>
            </div>
            <div class="h-100 w-50 d-flex flex-column">
              <div class="kuka-menu h-100 w-100 d-flex flex-column rounded" :style="{backgroundColor: kukaColor2}">
                <div class="text-subtitle-1 font-weight-bold w-100 text-center" style="cursor: default;">Additional Parameters</div>
                <v-textarea class="ma-2" disabled label="Result Files"></v-textarea>
              </div>
              <v-btn class="kuka-menu h-25 mt-4 d-flex align-center justify-center rounded text-h5 font-weight-bold" 
              :style="{backgroundColor: kukaColor1}" style="cursor: pointer;" @click="kukaParams">Start</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fanuc -->
    <div class="flex-column" style="width: 97%; height: 95%;" :style="{display: fanucPage}">
      <div class="d-flex flex-row">
        <div class="d-flex align-center justify-center rounded" :style="{backgroundColor: fanucColor1}" 
        style="width: 50px; height: 50px; cursor: pointer;" @click="openMainPage">
          <v-icon icon="mdi-arrow-left" size="x-large"></v-icon>
        </div>
      </div>
      <div class="d-flex flex-column w-100 h-100 align-end" style="padding: 10px 0 0 80px;">
        <!-- Files -->
        <div class="fanuc-menu w-100 d-flex flex-column rounded" :style="{backgroundColor: fanucColor2}">
          <div class="pt-4 px-4 d-flex align-center justify-space-between">
            <div style="width: 45%;"><v-file-input clearable variant="outlined" density=compact label="Input File"></v-file-input></div>
            <div style="width: 45%;"><v-file-input clearable variant="outlined" density=compact label="Output Folder"></v-file-input></div>
          </div>
        </div>
        <!-- First -->
        <div class="w-100 mt-4 d-flex justify-space-between">
            <div class="fanuc-menu d-flex flex-column w-100 pt-2 rounded align-center justify-start" :style="{backgroundColor: fanucColor2}">
              <div class="text-subtitle-1 font-weight-bold" style="cursor: default;">Welding Parameters</div>
              <div class="w-75 h-75 d-flex flex-column">
                <v-text-field v-model="fanucWFR" class="mt-3" clearable density="mini" label="Weld Feed Rate (mm/sec)"></v-text-field>
                <v-text-field v-model="fanucIFR" clearable density="mini" label="Idle Feed Rate (mm/sec)"></v-text-field>
                <div class="d-flex justify-space-between">
                  <v-text-field v-model="fanucUF" class="mr-5" density="mini" label="UF:"></v-text-field>
                  <v-text-field v-model="fanucUT" density="mini" label="UT:"></v-text-field>
              </div>
              </div>
            </div>
            <div class="fanuc-menu d-flex flex-column w-100 mx-4 pt-2 rounded align-center justify-space-between" :style="{backgroundColor: fanucColor2}">
              <div class="text-subtitle-1 font-weight-bold" style="cursor: default;">Oscillation Parameters</div>
                <v-select
                  class="w-75 mt-3" density="mini"
                  label="Oscillation Function" v-model="fanucOFunc"
                  :items="['Var', 'Var']"
                ></v-select>
                <v-text-field v-model="fanucXAmp" class="w-75" clearable density="mini" label="X Amplitude (mm)"></v-text-field>
                <v-text-field v-model="fanucYAmp" class="w-75" clearable density="mini" label="Y Amplitude (mm)"></v-text-field>
                <v-text-field v-model="fanucDisc" class="w-75" clearable density="mini" label="Discretization (pcs)"></v-text-field>
            </div>
            <div class="fanuc-menu d-flex flex-column w-100 mr-4 pt-2 rounded align-center justify-start" :style="{backgroundColor: fanucColor2}">
              <div class="text-subtitle-1 font-weight-bold" style="cursor: default;">Initialization Parameters</div>
              <div class="h-50 w-75 d-flex flex-column">
                <v-text-field v-model="fanucLayerHeight" class="mt-3" clearable density="mini" label="Layer Height (mm)"></v-text-field>
                <v-text-field v-model="fanucMinMoveLen" clearable density="mini" label="Minimum Move Length (mm)"></v-text-field>
              </div>
            </div>
            <div class="fanuc-menu d-flex flex-column w-100 pt-2 rounded align-center" :style="{backgroundColor: fanucColor2}">
              <div class="text-subtitle-1 font-weight-bold w-100" style="cursor: default; text-align: center">Fanuc Zero Position</div>
              <div class="d-flex flex-column justify-space-between align-center mt-3">
                <div class="d-flex align-center" style="width: 145%;">
                  <v-text-field v-model="fanucXZeroPos" class="w-100 mx-1" density="mini" label="X (mm)"></v-text-field>
                  <v-text-field v-model="fanucYZeroPos" class="w-100" density="mini" label="Y (mm)"></v-text-field>
                  <v-text-field v-model="fanucZZeroPos" class="w-100 mx-1" density="mini" label="Z (mm)"></v-text-field>
                </div>
                <div class="d-flex align-center" style="width: 145%;">
                  <v-text-field v-model="fanucADeg" class="w-100 mx-1" density="mini" label="A (deg)"></v-text-field>
                  <v-text-field v-model="fanucBDeg" class="w-100" density="mini" label="B (deg)"></v-text-field>
                  <v-text-field v-model="fanucCDeg" class="w-100 mx-1" density="mini" label="C (deg)"></v-text-field>
                </div>
                <div class="d-flex align-center" style="width: 145%;">
                  <v-text-field v-model="fanucE1" class="mx-1" density="mini" label="E1 (deg)"></v-text-field>
                  <v-text-field v-model="fanucE2" density="mini" label="E2 (deg)"></v-text-field>
                </div>
              </div>
            </div>
        </div>
        <!-- Last -->
        <div class="d-flex align-center justify-space-between h-100 w-100 mt-4">
          <div class="fanuc-menu mr-4 d-flex flex-column h-100 w-50 rounded" :style="{backgroundColor: fanucColor2}">
            <div class="text-subtitle-1 font-weight-bold w-100 text-center" style="cursor: default;">Oscillation Plot</div>

          </div>
          <div class="d-flex justify-start h-100 w-50">
            <div class="fanuc-menu h-100 w-50 justify-start pa-4 mr-4 d-flex flex-column rounded" :style="{backgroundColor: fanucColor2}">
              <div class="text-subtitle-1 font-weight-bold w-100 text-center" style="cursor: default;">Additional Parameters</div>
              <div class="h-50 d-flex flex-column justify-start">
                <v-switch v-model="fanucWithoutARC" class="ma-0 pa-0" label="Without ARC" inset></v-switch>
                <v-switch v-model="fanucSplitLay" class="ma-0 pa-0" label="Split Layers" inset></v-switch>
                <v-switch v-model="fanucUseWeldSpeed" class="ma-0 pa-0" label="Use Weld Speed" inset></v-switch>
              </div>
            </div>
            <div class="h-100 w-50 d-flex flex-column">
              <div class="fanuc-menu h-100 w-100 d-flex flex-column rounded" :style="{backgroundColor: fanucColor2}">
                <div class="text-subtitle-1 font-weight-bold w-100 text-center" style="cursor: default;">Additional Parameters</div>
                <v-textarea class="ma-2" disabled label="Result Files"></v-textarea>
              </div>
              <v-btn class="fanuc-menu h-25 mt-4 d-flex align-center justify-center rounded text-h5 font-weight-bold" @click="fanucParams"
              :style="{backgroundColor: fanucColor1}" style="cursor: pointer;">Start</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- AT300 -->
    <div class="flex-column" style="width: 95%; height: 90%;" :style="{display: at300Page}">
      <div class="d-flex flex-row">
        <div class="d-flex align-center justify-center rounded" :style="{backgroundColor: at300Color1}" 
        style="width: 50px; height: 50px; cursor: pointer;" @click="openMainPage">
          <v-icon icon="mdi-arrow-left" size="x-large"></v-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        // Преключение между вкладками
        mainPage: 'flex',
        kukaPage: 'none',
        fanucPage: 'none',
        at300Page: 'none',
        // Настройка цветов
        bgColor: '#1e1e1e',
        kukaColor1: '#F58548',
        kukaColor2: '#FF9F63',
        fanucColor1: '#FFF75E',
        fanucColor2: '#FFF992',
        at300Color1: '#FFFFFF',
        at300Color2: '#FFFFFF',
        // Подключение изображений
        kukaImg: "url('/kuka.svg')",
        fanucImg: "url('/fanuc.svg')",
        at300Img: "url('/at300.svg')",
        xweldImg: "url('/xw-name.png')",
        // Значение инпутов
        // Kuka
        kukaWFR: '',
        kukaIFR: '',
        kukaUF: '',
        kukaUT: '',
        kukaBase: '',
        kukaOFunc: '',
        kukaXAmp: '',
        kukaYAmp: '',
        kukaDisc: '',
        kukaLayerHeight: '',
        kukaMinMoveLen: '',
        kukaMaxSplineLen: '',
        kukaComLim: '',
        kukaXZeroPos: '',
        kukaYZeroPos: '',
        kukaZZeroPos: '',
        kukaADeg: '',
        kukaBDeg: '',
        kukaCDeg: '',
        kukaE1: '',
        kukaE2: '',
        kukaWithoutARC: '',
        kukaSplitLay: '',
        kukaUseWeldSpeed: '',
        // Fanuc
        fanucWFR: '',
        fanucIFR: '',
        fanucUF: '',
        fanucUT: '',
        fanucOFunc: '',
        fanucXAmp: '',
        fanucYAmp: '',
        fanucDisc: '',
        fanucLayerHeight: '',
        fanucMinMoveLen: '',
        fanucXZeroPos: '',
        fanucYZeroPos: '',
        fanucZZeroPos: '',
        fanucADeg: '',
        fanucBDeg: '',
        fanucCDeg: '',
        fanucE1: '',
        fanucE2: '',
        fanucWithoutARC: '',
        fanucSplitLay: '',
        fanucUseWeldSpeed: '',
      }
    },
    methods: {
      openMainPage(){
        this.kukaPage = 'none';
        this.fanucPage = 'none';
        this.at300Page = 'none';
        this.mainPage = 'flex';
      },
      openKuka(){
        this.mainPage = 'none';
        this.kukaPage = 'flex';
      },
      openFanuc(){
        this.mainPage = 'none';
        this.fanucPage = 'flex';
      },
      openAT(){
        this.mainPage = 'none';
        this.at300Page = 'flex';
      },
      // Вывод JSON
      kukaParams(){
        console.log(
`{
  "Weld Feed Rate": ${this.kukaWFR},
  "Idle Feed Rate": ${this.kukaIFR},
  "UF": ${this.kukaUF},
  "UT": ${this.kukaUT},
  "Base": ${this.kukaBase},
  "Oscillation Function": ${this.kukaOFunc},
  "X Amplitude": ${this.kukaXAmp},
  "Y Amplitude": ${this.kukaYAmp},
  "Discretization": ${this.kukaDisc},
  "Layer Height": ${this.kukaLayerHeight},
  "Minimum Move Length": ${this.kukaMinMoveLen},
  "Maximum Spline Length": ${this.kukaMaxSplineLen},
  "Commands Limit": ${this.kukaComLim},
  "X": ${this.kukaXZeroPos},
  "Y": ${this.kukaYZeroPos},
  "Z": ${this.kukaZZeroPos},
  "A": ${this.kukaADeg},
  "B": ${this.kukaBDeg},
  "C": ${this.kukaCDeg},
  "E1": ${this.kukaE1},
  "E2": ${this.kukaE2},
  "Without ARC": ${this.kukaWithoutARC},
  "Split Layers": ${this.kukaSplitLay},
  "Use Weld Speed": ${this.kukaUseWeldSpeed},
}`);
      },
      fanucParams(){
        console.log(
`{
  "Weld Feed Rate": ${this.fanucWFR},
  "Idle Feed Rate": ${this.fanucIFR},
  "UF": ${this.fanucUF},
  "UT": ${this.fanucUT},
  "Oscillation Function": ${this.fanucOFunc},
  "X Amplitude": ${this.fanucXAmp},
  "Y Amplitude": ${this.fanucYAmp},
  "Discretization": ${this.fanucDisc},
  "Layer Height": ${this.fanucLayerHeight},
  "Minimum Move Length": ${this.fanucMinMoveLen},
  "X": ${this.fanucXZeroPos},
  "Y": ${this.fanucYZeroPos},
  "Z": ${this.fanucZZeroPos},
  "A": ${this.fanucADeg},
  "B": ${this.fanucBDeg},
  "C": ${this.fanucCDeg},
  "E1": ${this.fanucE1},
  "E2": ${this.fanucE2},
  "Without ARC": ${this.fanucWithoutARC},
  "Split Layers": ${this.fanucSplitLay},
  "Use Weld Speed": ${this.fanucUseWeldSpeed},
}`);
      }
    },
  }
</script>
<style>
  .kuka{
    background: #1e1e1e;
    cursor: pointer;
  }
  .fanuc{
    background: #1e1e1e;
    cursor: pointer;
  }
  .at300{
    background: #1e1e1e;
    cursor: pointer;
    
  }
  @keyframes kukaHover{
    0%{
      filter: none
    }
    100%{
      filter: drop-shadow(0px 0px 50px rgba(245, 124, 0, 0.75));
    }
  }
  @keyframes fanucHover{
    0%{
      filter: none
    }
    100%{
      filter: drop-shadow(0px 0px 50px rgba(245, 220, 0, 0.75));
    }
  }
  @keyframes atHover{
    0%{
      filter: none
    }
    100%{
      filter: drop-shadow(0px 0px 50px rgba(0, 54, 245, 0.75));
    }
  }
  @keyframes kukaMenuHover{
    0%{
      filter: none
    }
    100%{
      filter: drop-shadow(0px 0px 25px rgba(245, 124, 0, 0.75));
    }
  }
  @keyframes fanucMenuHover{
    0%{
      filter: none
    }
    100%{
      filter: drop-shadow(0px 0px 25px rgba(245, 220, 0, 0.75));
    }
  }
  @keyframes atMenuHover{
    0%{
      filter: none
    }
    100%{
      filter: drop-shadow(0px 0px 25px rgba(0, 54, 245, 0.75));
    }
  }
  .kuka:hover{
    animation: kukaHover .2s forwards;
  }
  .fanuc:hover{
    animation: fanucHover .2s forwards;
  }
  .at300:hover{
    animation: atHover .2s forwards;
  }
  .kuka-menu:hover{
    animation: kukaMenuHover .2s forwards;
  }
  .fanuc-menu:hover{
    animation: fanucMenuHover .2s forwards;
  }
  .v-text-field input {
    font-size: .8rem;
  }
 .v-input .v-label {
    font-size: .8rem;
  }
  .v-select__selection-text{
    font-size: .8rem;
  }
  .v-label.v-field-label.v-field-label--floating {
    font-size: .65rem;
  }
  .v-text-field{
    padding: 0;
  }
  .v-input__details .v-messages{
    height: 0 !important;
    min-height: 0 !important;
  }
</style>