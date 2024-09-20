<script setup>
import { RouterLink } from 'vue-router'
import iCC from '../assets/cc.jpg'
</script>

<template>
  <div class="knowland">
    <div class="sideNav" id="isMeni" v-show="sMeni">
      <div
        class="sideOption"
        v-for="story in fragments"
        :key="story.id"
        @click="switchFragment(story.name)"
      >
        <div>
          {{ story.name }}
        </div>
      </div>
    </div>
    <div class="Container">
      <div class="topStat">
        <div class="showBtn" id="showBtn" @click="showMeni()">{{ character }}</div>
        <div class="knwUser" @click="switchFragment('User')">{{ user }}</div>
        <div class="ccNum">{{ invSun[4].qnt }}<img class="icon_option" :src="iCC" /></div>
        <RouterLink to="/"><div class="back">X</div></RouterLink>
      </div>
      <div class="info" id="info">
        <div class="ssitt" v-if="sUser">
          <div v-for="s in invStory" :key="s.id">
            <div class="sitemo">
              <div class="sname">{{ s.name }}</div>
              <div class="sopenbtn" @click="openPDF(s.name, s.file)">Open</div>
            </div>
          </div>
        </div>
        <div v-else-if="sDS" class="ssitt">
          <div v-for="h in dStory" :key="h.id">
            <div class="sitemo">
              <div class="sname">{{ h.name }}</div>
              <div v-if="h.own">
                <div class="sopenbtn"><a @click="openPDF(h.name, h.file)">Open</a></div>
              </div>
              <div v-else>
                <div class="sopenbtn"><a @click="buyPDF(h.id, h.name, h.file)">Buy 1DC</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sUser: true,
      sDS: false,
      sMeni: false,
      character: 'Meni',
      user: 'Nihche',
      invSun: JSON.parse(localStorage.getItem('invSun')) || [
        { id: 0, name: 'bds', title: 'Brown Dwarf', qnt: 0, cost: 10, value: 10, text: '10H' },
        {
          id: 1,
          name: 'ys',
          title: 'Yellow Star',
          qnt: 0,
          cost: 100,
          value: 110,
          text: '100H+1BD'
        },
        {
          id: 2,
          name: 'bg',
          title: 'Blue Giant',
          qnt: 1,
          cost: 1000,
          value: 1100,
          text: '1kH+1YS'
        },
        { id: 3, name: 'bh', title: 'Black hole', qnt: 0, cost: 10, value: 10000, text: '10BG' },
        { id: 4, name: 'cc', title: 'Celestial Coin', qnt: 0, cost: 1, value: 4796, text: '' }
      ],
      fragments: [
        { id: 0, name: 'User' },
        { id: 1, name: 'Dstone' }
      ],
      dStory: JSON.parse(localStorage.getItem('dStory')) || [
        { id: 0, name: 'DStone00', file: '.pdf', own: false },
        { id: 1, name: 'DStone01', file: '.pdf', own: false },
        { id: 2, name: 'DStone02', file: '.pdf', own: false },
        { id: 3, name: 'DStone03', file: '.pdf', own: false },
        { id: 4, name: 'DStone04', file: '.pdf', own: false },
        { id: 5, name: 'DStone05', file: '.pdf', own: false },
        { id: 6, name: 'DStone06', file: '.pdf', own: false }
      ],
      invStory: JSON.parse(localStorage.getItem('invStory')) || []
    }
  },
  methods: {
    showMeni: function () {
      if (this.sMeni === true) {
        this.sMeni = false
        this.character = 'Meni'
        document.getElementById('info').style.left = 0
      } else if (this.sMeni === false) {
        this.sMeni = true
        this.character = 'Close'
        document.getElementById('info').style.left = '30vw'
      }
    },
    switchFragment: function (name) {
      switch (name) {
        case 'User':
          this.sDS = false
          this.sUser = true
          break
        case 'Dstone':
          this.sDS = true
          this.sUser = false
          break
      }
    },
    saveTime: function () {
      localStorage.setItem('invSun', JSON.stringify(this.invSun))
      localStorage.setItem('dStory', JSON.stringify(this.dStory))
      localStorage.setItem('invStory', JSON.stringify(this.invStory))
    },
    openPDF: function (name, file) {
      window.open(`/nihches/` + name + file, '_blank')
    },
    buyPDF: function (id, name, file) {
      if (this.dStory[id].own !== true) {
        if (this.invSun[4].qnt >= 1) {
          this.invSun[4].qnt--
          this.invStory.push({ name: name, file: file })
          this.dStory[id].own = true
          this.saveTime()
        }
      }
    }
  },
  created() {
    if (localStorage.getItem('nav') === '0') {
      this.nav = 0
    }
  }
}
</script>

<style scoped>
.ssitt {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.sopenbtn {
  background-color: green;
  border-radius: 1em;
  display: flex;
  justify-content: center;
}
.sopenbtn:hover {
  background-color: lightgreen;
}
.sitemo {
  background-color: whitesmoke;
  border-radius: 1em;
  padding: 1em;
  margin: 1em;
}
.back {
  display: flex;
  color: red;
  border: 2px solid red;
  background-color: lightcoral;
  bottom: 7em;
  right: 1vw;
  width: 1.5em;
  height: 1.5em;
  justify-content: center;
  align-items: center;
  border-radius: 0.5em;
}
.back:hover {
  background-color: darkred;
}
.showBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.1em;
  top: 4vh;
  height: 2.9vh;
  width: 15vw;
  background-color: lightgray;
}
.showBtn:hover {
  background-color: gray;
}
.info {
  position: absolute;
}
.ccNum {
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 0.1em;
  padding: 0.1em;
  padding-right: 0.3em;
  top: -0.3em;
  background-color: whitesmoke;
  width: 4em;
  height: 1em;
  font-size: 1.2em;
  border-radius: 3em;
}
.icon_option {
  position: relative;
  width: 1.1em;
  top: 0em;
  border-radius: 2em;
}
.knowland {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
}
.sideNav {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 96vh;
  top: 3vh;
  padding-top: 1vh;
  background-color: white;
}
.sideOption {
  display: flex;
  justify-content: center;
  padding: 0.5em;
}
.sideOption:hover {
  background-color: lightgray;
}
.Container {
  position: absolute;
}
.topStat {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3vh;
  width: 100vw;
  background-color: lightgray;
}
</style>
