<script setup>
import topNav from '@/components/topNav.vue'
import topBtn from '@/components/topBtn.vue'
import stats from '@/components/stats.vue'
import universe from '@/components/universe.vue'
import Spaces from '@/components/Spaces.vue'
import creationMeni from '@/components/creationMeni.vue'
</script>

<template>
  <main>
    <topNav>
      <template #nav><topBtn class="tB" /></template>
    </topNav>
    <stats>
      <template #izM> {{ dDm }}&#x26CB;</template>
      <template #izH> {{ dH }}H</template>
    </stats>
    <universe>
      <template #izE>{{ dDe }}&#x27C1;</template>
    </universe>
    <Spaces v-for="space in spaces" :key="'ffe' + space.id" :id="'space' + space.id">
      <template #spot>
        <div :id="'spot' + space.id">
          <img
            :id="'simg' + space.id"
            class="space_img"
            :src="`/nihches/space.png`"
            @click="spaceClick(space.id)"
          />
        </div>
      </template>
      <template #stat
        ><div :id="'stat' + space.id" v-if="space.state !== 'empty'">
          {{ space.value.toFixed(1) }}
        </div></template
      >
      <template #number>{{ space.id }}</template>
    </Spaces>
    <creationMeni @showItems="showItems" v-show="tmp_inv === 'nic'">
      <template #selectNav>
        <div class="selection_meni" v-if="sCelestial || sCreate || sInventory === true">
          <div class="selection_close" @click="closeItems()"><b>X</b></div>
          <div class="selection_content" v-if="sCreate">
            <div class="title_meni">Create hydrogen</div>
            <div v-for="i in whm" :id="'wh' + i" :key="'iiii' + i">
              <div class="s_item" @click="whiteHole(i)">
                <div class="s_option">
                  <img class="icon_option cr_meni" :src="`/nihches/wh` + (i - 1) + `.jpg`" />
                  <div class="itemname">
                    <b>WhiteHole {{ i - 1 }}</b>
                  </div>
                  <div class="dis_option2" id="dBdsi"></div>
                  <div class="dis_option" id="dBds">
                    {{ (0.1 * Math.PI ** i).toFixed(2) }}&#x26CB;
                  </div>
                </div>
              </div>
            </div>
            <div class="s_item" @click="whUP()">
              <div class="s_option">
                <img class="icon_option cr_meni" :src="`/nihches/Plus.png`" />
                <div class="itemname">
                  <b>WhiteHole {{ whm }} </b>
                </div>
                <div class="dis_option2" id="dBdsi"></div>
                <div class="dis_option" id="dBds">
                  {{ (0.1 * Math.PI ** (whm + 2)).toFixed(2) }}&#x26CB;
                </div>
              </div>
            </div>
          </div>
          <div class="selection_content" v-if="sCelestial">
            <div class="title_meni">Create celestial</div>
            <div v-for="item in invSun" :key="'iii' + item.name">
              <div v-if="item.name !== 'cc'" class="s_item" @click="itemClick(item.name)">
                <div>
                  <img class="icon_option" :src="`/nihches/` + item.name + `.jpg`" />
                  <div class="starNum">{{ invSun[item.id].qnt }}</div>
                  <div class="itemname">
                    <b>{{ item.title }}</b>
                  </div>
                  <div class="dis_option">{{ item.text }}</div>
                </div>
              </div>
              <div
                v-else-if="item.name === 'cc' && dm_p >= 1 && dm >= 1"
                class="s_item"
                @click="itemClick(item.name)"
              >
                <div>
                  <img class="icon_option" :src="`/nihches/` + item.name + `.jpg`" />
                  <div class="starNum">{{ invSun[item.id].qnt }}</div>
                  <div class="itemname">
                    <b>{{ item.title }}</b>
                  </div>
                  <div class="dis_option">{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="selection_content" v-if="sInventory">
            <div class="title_meni">Inventory</div>
            <div v-for="item in invSun" :key="'ii' + item.name">
              <div
                class="s_item"
                id="s_bds"
                @click="itemClick(`inv` + item.name)"
                v-if="item.qnt > 0"
              >
                <div>
                  <img class="icon_option cr_meni" :src="`/nihches/` + item.name + `.jpg`" />
                  <div class="starNum">{{ invSun[item.id].qnt }}</div>
                  <div class="itemname">
                    <b>{{ item.title }}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </creationMeni>
    <div class="selected_item" v-show="tmp_inv !== 'nic'">
      <img class="icon_selected" id="icn" src="" @click="slc_back()" />
      <div class="close_select" @click="slc_close()">x</div>
    </div>
  </main>
</template>

<script>
const FORCE = 0.000666
const PASSIVE = 0.000479
let gSet = new Date()
let gTim = Math.round(gSet.getTime() / 1000)
export default {
  name: 'DarkStone',
  components: {
    creationMeni
  },
  data() {
    return {
      mInterval: true,
      mSave: 0,
      user: 'Nihche',

      sCreate: false,
      sCelestial: false,
      sInventory: false,
      sKnwland: false,

      tmp_inv: 'nic',
      sunS: 1, // selected sun
      whs: 1, // selected wh size
      wh_size: 0.1 * Math.PI ** 1, //compute wh_size

      tim: localStorage.getItem('tim') || gTim,
      dm: Number(localStorage.getItem('dm')) || 0,
      dm_p: Number(localStorage.getItem('dm_p')) || 0,
      de: Number(localStorage.getItem('de')) || 0,
      h: Number(localStorage.getItem('h')) || 0,
      sc: Number(localStorage.getItem('sc')) || 0,
      whm: Number(localStorage.getItem('whm')) || 1,
      spaces: JSON.parse(localStorage.getItem('spaces')) || [
        { id: 0, state: 'empty', value: 0, end: 0, item: 'nic' }
      ],
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
        { id: 4, name: 'cc', title: 'Celestial Coin', qnt: 0, cost: 10, value: 4796, text: '' }
      ]
    }
  },
  computed: {
    dDe() {
      return this.de.toFixed(3)
    },
    dDm() {
      return this.dm.toFixed(3)
    },
    dH() {
      return Math.floor(this.h)
    }
  },
  methods: {
    timeLoop: function () {
      this.spaceTime()
      this.spacesSpacetime()
    },
    spaceTime: function () {
      if (this.de !== 0 || this.mInterval === true) {
        if (this.de - PASSIVE > 0) {
          this.dm += FORCE + PASSIVE
          this.de -= FORCE
          this.dm_p += PASSIVE
          this.countSpaces()
        } else if (this.de > 0 && this.de <= PASSIVE) {
          this.dm += this.de
          this.de = 0
        } else {
          this.de = 0
        }
      }
    },
    spacesSpacetime: function () {
      let st_check = 0
      for (let i = 0; i <= this.spaces.length - 1; i++) {
        if (this.spaces[i].state !== 'empty') {
          switch (this.spaces[i].state) {
            case 'bds':
              if (this.spaces[i].value > 0) {
                this.spaces[i].value -= 1
                break
              } else if (this.spaces[i].value <= 0) {
                this.invSun[0].qnt++
                this.spaces[i] = { id: i, state: 'empty', value: 0, end: 0, item: 'nic' }
                if (document.getElementById('simg' + i) !== null) {
                  document.getElementById('simg' + i).setAttribute('src', `/nihches/space.png`)
                }
                break
              }
              break
            case 'ys':
              if (this.spaces[i].value > 0) {
                this.spaces[i].value -= 1
                break
              } else if (this.spaces[i].value <= 0) {
                this.invSun[1].qnt++
                this.spaces[i] = { id: i, state: 'empty', value: 0, end: 0, item: 'nic' }
                if (document.getElementById('simg' + i) !== null) {
                  document.getElementById('simg' + i).setAttribute('src', `/nihches/space.png`)
                }
                break
              }
              break
            case 'bg':
              if (this.spaces[i].value > 0) {
                this.spaces[i].value -= 1
                break
              } else if (this.spaces[i].value <= 0) {
                this.invSun[2].qnt++
                this.spaces[i] = { id: i, state: 'empty', value: 0, end: 0, item: 'nic' }
                if (document.getElementById('simg' + i) !== null) {
                  document.getElementById('simg' + i).setAttribute('src', `/nihches/space.png`)
                }
                break
              }
              break
            case 'bh':
              if (this.spaces[i].value > 0) {
                this.spaces[i].value -= 1
                break
              } else if (this.spaces[i].value <= 0) {
                this.invSun[3].qnt++
                this.spaces[i] = { id: i, state: 'empty', value: 0, end: 0, item: 'nic' }
                if (document.getElementById('simg' + i) !== null) {
                  document.getElementById('simg' + i).setAttribute('src', `/nihches/space.png`)
                }
                break
              }
              break
            case 'cc':
              if (this.spaces[i].value > 0) {
                this.spaces[i].value -= 1
                break
              } else if (this.spaces[i].value <= 0) {
                this.invSun[4].qnt++
                this.spaces[i] = { id: i, state: 'empty', value: 0, end: 0, item: 'nic' }
                if (document.getElementById('simg' + i) !== null) {
                  document.getElementById('simg' + i).setAttribute('src', `/nihches/space.png`)
                }
                break
              }
              break
            case 'wh':
              if (this.spaces[i].value - 0.2 >= 0) {
                this.spaces[i].value -= 0.2
                this.h += 0.2
                break
              } else if (this.spaces[i].value - 0.2 < 0) {
                if (this.spaces[i].value >= 0) {
                  this.h += this.spaces[i].value
                  this.h = Math.round(this.h * 1000) / 1000
                  this.spaces[i] = { id: i, state: 'empty', value: 0, end: 0, item: 'nic' }
                  if (document.getElementById('simg' + i) !== null) {
                    document.getElementById('simg' + i).setAttribute('src', `/nihches/space.png`)
                  }
                  break
                }
                break
              }
              break
            case 'sun':
              if (this.spaces[i].value - 0.5 > 0) {
                this.spaces[i].value -= 0.5
                this.de += 0.005
                break
              } else if (this.spaces[i].value - 0.5 <= 0) {
                if (this.spaces[i].value > 0) {
                  this.de += this.spaces[i].value / 100
                  this.spaces[i] = { id: i, state: 'empty', value: 0, end: 0, item: 'nic' }
                  if (document.getElementById('simg' + i) !== null) {
                    document.getElementById('simg' + i).setAttribute('src', `/nihches/space.png`)
                  }
                  break
                }
              }
              break
          }
        } else {
          st_check++
          if (st_check === this.spaces.length && this.de === 0) {
            clearInterval(this.time)
            this.mInterval = false
            console.log('cleared interval de=0')
          }
        }
      }
    },
    countSpaces: function () {
      if (this.de >= 1 * 10 ** this.sc) {
        this.sc += 1
        this.spaces.push({ id: this.sc, state: 'empty', value: 0, end: 0, item: 0 })
      } else if (this.de < 1 * 10 ** (this.sc - 1) && this.de > 1) {
        if (this.sc > 1) {
          this.sc--
          this.spaces.pop()
        }
      } else if (this.de < 1 && this.de >= 0) {
        if (this.sc > 0) {
          this.sc = 0
          this.spaces.pop()
        }
      }
    },
    spaceClick: function (id) {
      if (this.mInterval === false) {
        this.time = setInterval(() => {
          this.timeLoop()
        }, 1000)
        this.mInterval = true
      }
      if (this.spaces[id].state === 'empty' && this.tmp_inv != 'nic') {
        switch (this.tmp_inv) {
          case 'bds':
            if (this.h >= 10) {
              this.h -= 10
              this.spaces[id] = { id: id, state: 'bds', value: 50, end: 10, item: 'bds' }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/bds.jpg`)
              this.saveTime()
            }
            break
          case 'ys':
            if (this.h >= 100 && this.invSun[0].qnt >= 1) {
              this.h -= 100
              this.invSun[0].qnt--
              this.spaces[id] = { id: id, state: 'ys', value: 300, end: 100, item: 'ys' }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/ys.jpg`)
              this.saveTime()
            }
            break
          case 'bg':
            if (this.h >= 1000 && this.invSun[1].qnt >= 1) {
              this.h -= 1000
              this.invSun[1].qnt--
              this.spaces[id] = { id: id, state: 'bg', value: 1000, end: 1000, item: 'bg' }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/bg.jpg`)
              this.saveTime()
            }
            break
          case 'bh':
            if (this.invSun[2].qnt >= 10) {
              this.invSun[2].qnt -= 10
              this.spaces[id] = { id: id, state: 'bh', value: 10, end: 10000, item: 'bh' }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/bh.jpg`)
              this.saveTime()
            }
            break
          case 'cc':
            if (this.dm_p >= 1 && this.dm >= 1) {
              this.dm_p -= 1
              this.dm -= 1
              this.spaces[id] = { id: id, state: 'cc', value: 4796, end: 1, item: 'cc' }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/cc.jpg`)
              this.saveTime()
            }
            break
          case 'wh':
            if (this.dm >= this.wh_size) {
              this.dm -= this.wh_size
              this.spaces[id] = {
                id: id,
                state: 'wh',
                value: this.wh_size * 100,
                end: this.wh_size,
                item: this.whs
              }
              document
                .getElementById('simg' + id)
                .setAttribute('src', `/nihches/wh` + this.whs + `.jpg`)
              this.saveTime()
            }
            break
          case 'invbds':
            if (this.invSun[0].qnt >= 1) {
              this.invSun[0].qnt--
              this.spaces[id] = {
                id: id,
                state: 'sun',
                value: this.invSun[0].value,
                end: this.invSun[0].value,
                item: 'bds'
              }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/bds.jpg`)
              this.saveTime()
            }
            break
          case 'invys':
            if (this.invSun[1].qnt >= 1) {
              this.invSun[1].qnt--
              this.spaces[id] = {
                id: id,
                state: 'sun',
                value: this.invSun[1].value,
                end: this.invSun[1].value,
                item: 'ys'
              }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/ys.jpg`)
              this.saveTime()
            }
            break
          case 'invbg':
            if (this.invSun[2].qnt >= 1) {
              this.invSun[2].qnt--
              this.spaces[id] = {
                id: id,
                state: 'sun',
                value: this.invSun[2].value,
                end: this.invSun[2].value,
                item: 'bg'
              }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/bg.jpg`)
              this.saveTime()
            }
            break
          case 'invbh':
            if (this.invSun[3].qnt >= 1) {
              this.invSun[3].qnt--
              this.spaces[id] = {
                id: id,
                state: 'sun',
                value: this.invSun[3].value,
                end: this.invSun[3].value,
                item: 'bh'
              }
              document.getElementById('simg' + id).setAttribute('src', `/nihches/bh.jpg`)
              this.saveTime()
            }
            break
        }
      }
    },
    saveTime: function () {
      let set = new Date()
      let tim = Math.round(set.getTime() / 1000)
      localStorage.setItem('tim', tim)
      localStorage.setItem('dm', this.dm)
      localStorage.setItem('dm_p', this.dm_p)
      localStorage.setItem('de', this.de)
      localStorage.setItem('h', this.h)
      localStorage.setItem('sc', this.sc)
      localStorage.setItem('whm', this.whm)
      localStorage.setItem('spaces', JSON.stringify(this.spaces))
      localStorage.setItem('invSun', JSON.stringify(this.invSun))
    },
    rebuildTime: function () {
      let timeWarp = gTim - this.tim
      for (let i = 0; i <= timeWarp; i++) {
        this.spaceTime()
        this.spacesSpacetime()
      }
    },
    resetImg: function () {
      for (let i = 0; i <= this.spaces.length - 1; i++) {
        switch (this.spaces[i].item) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            document
              .getElementById('simg' + i)
              .setAttribute('src', `/nihches/wh` + (this.spaces[i].item - 1) + `.jpg`)
            break
          case 'bds':
          case 'invbds':
            document.getElementById('simg' + i).setAttribute('src', `/nihches/bds.jpg`)
            break
          case 'ys':
          case 'invys':
            document.getElementById('simg' + i).setAttribute('src', `/nihches/ys.jpg`)
            break
          case 'bg':
          case 'invbg':
            document.getElementById('simg' + i).setAttribute('src', `/nihches/bg.jpg`)
            break
          case 'bh':
          case 'invbh':
            document.getElementById('simg' + i).setAttribute('src', `/nihches/bh.jpg`)
            break
          case 'cc':
            document.getElementById('simg' + i).setAttribute('src', `/nihches/cc.jpg`)
            break
        }
      }
    },
    showItems: function (item) {
      switch (item) {
        case 'celestial':
          this.sCelestial = !this.sCelestial
          break
        case 'create':
          this.sCreate = !this.sCreate
          break
        case 'inventory':
          this.sInventory = !this.sInventory
          break
      }
    },
    closeItems: function () {
      this.sCreate = false
      this.sCelestial = false
      this.sInventory = false
      this.whs = 1
    },
    itemClick: function (item) {
      switch (item) {
        case 'bds':
          if (this.h >= 10) {
            this.tmp_inv = 'bds'
            document.getElementById('icn').setAttribute('src', `/nihches/bds.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'ys':
          if (this.h >= 100 && this.invSun[0].qnt >= 1) {
            this.tmp_inv = 'ys'
            document.getElementById('icn').setAttribute('src', `/nihches/ys.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'bg':
          if (this.h >= 1000 && this.invSun[1].qnt >= 1) {
            this.tmp_inv = 'bg'
            document.getElementById('icn').setAttribute('src', `/nihches/bg.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'bh':
          if (this.invSun[2].qnt >= 10) {
            this.tmp_inv = 'bh'
            document.getElementById('icn').setAttribute('src', `/nihches/bh.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'cc':
          if (this.dm_p >= 1 && this.dm >= 1) {
            this.tmp_inv = 'cc'
            document.getElementById('icn').setAttribute('src', `/nihches/cc.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'invbds':
          if (this.invSun[0].qnt >= 1) {
            this.tmp_inv = 'invbds'
            document.getElementById('icn').setAttribute('src', `/nihches/bds.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'invys':
          if (this.invSun[1].qnt >= 1) {
            this.tmp_inv = 'invys'
            document.getElementById('icn').setAttribute('src', `/nihches/ys.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'invbg':
          if (this.invSun[2].qnt >= 1) {
            this.tmp_inv = 'invbg'
            document.getElementById('icn').setAttribute('src', `/nihches/bg.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
        case 'invbh':
          if (this.invSun[3].qnt >= 1) {
            this.tmp_inv = 'invbh'
            document.getElementById('icn').setAttribute('src', `/nihches/bh.jpg`)
            document.body.style.cursor = 'pointer'
          }
          break
      }
    },
    whiteHole: function (i) {
      this.whs = i
      this.wh_size = 0.1 * Math.PI ** this.whs
      if (this.dm >= this.wh_size) {
        this.tmp_inv = 'wh'
        document.getElementById('icn').setAttribute('src', `/nihches/wh` + (this.whs - 1) + `.jpg`)
      } else {
        this.whs = 1
      }
    },
    whUP: function () {
      if (
        this.dm >= 0.1 * Math.PI ** (this.whm + 2) &&
        this.dm_p >= 0.1 * Math.PI ** (this.whm + 2)
      ) {
        if (confirm('Upgrade WhiteHole?') === true) {
          this.dm -= 0.1 * Math.PI ** (this.whm + 2)
          this.dm_p -= 0.1 * Math.PI ** (this.whm + 2)
          this.whm++
        }
      }
    },
    slc_close: function () {
      this.tmp_inv = 'nic'
      this.sCelestial = false
      this.sCreate = false
      this.sInventory = false
      this.whs = 1
      document.body.style.cursor = 'default'
    },
    slc_back: function () {
      this.tmp_inv = 'nic'
      this.whs = 1
      document.body.style.cursor = 'default'
    },
    openP: function (page) {
      switch (page) {
        case 'mark':
          break
        case 'book':
          console.log('this is book')
          this.sKnwland = true
          break
        case 'dice':
          break
      }
    },
    cls_knw: function () {
      this.sKnwland = false
    }
  },
  created() {
    if (localStorage.getItem('dm') === null) {
      console.log('saved')
      this.saveTime()
    }
    if (localStorage.getItem('dm') === '0') {
      this.dm = 0
    }
    if (localStorage.getItem('de') === '0') {
      this.de = 0
    }
    if (localStorage.getItem('h') === '0') {
      this.h = 0
    }
    if (localStorage.getItem('nav') === '0') {
      this.h = 0
    }
  },
  mounted() {
    this.time = setInterval(() => {
      this.timeLoop()
    }, 1000)
    this.rebuildTime()
    this.resetImg()
  },
  unmounted() {
    console.log('delete')
    this.saveTime()
  },
  updated() {
    this.resetImg()
  }
}
</script>

<style scoped>
.addS {
  z-index: 14;
  background-color: whitesmoke;
  width: 10em;
  margin: 2em;
}
.tU {
  z-index: 15;
}
.tB {
  z-index: 15;
}
.space_img {
  border-radius: 5em;
  width: 5em;
  height: 5em;
}
#space0 {
  top: 30vh;
  left: 20vw;
  animation: orbit0 239s linear infinite;
}
#space1 {
  top: 39vh;
  left: 77vw;
  animation: orbit1 300s linear infinite;
}
#space2 {
  top: 65vh;
  left: 25vw;
  animation: orbit2 369s linear infinite;
}
#space3 {
  top: 55vh;
  left: 69vw;
  animation: orbit3 512s linear infinite;
}
#space4 {
  top: 30vh;
  left: 60vw;
  animation: orbit4 444s linear infinite;
}
#space5 {
  top: 70vh;
  left: 80vw;
  animation: orbit5 439s linear infinite;
}
#space6 {
  top: 60vh;
  left: 50vw;
  animation: orbit6 916s linear infinite;
}
#space7 {
  top: 19vh;
  left: 50vw;
  animation: orbit7 962s linear infinite;
}
.selection_meni {
  position: inherit;
  width: 100vw;
  height: 10em;
  bottom: 0vh;
  padding-right: 8vw;
  background-image: linear-gradient(to bottom, rgb(206, 206, 206), rgb(146, 143, 143));
}
.selection_close {
  position: fixed;
  display: flex;
  color: red;
  border: 2px solid red;
  background-color: lightcoral;
  bottom: 7em;
  right: 1vw;
  width: 1.5em;
  height: 1.5em;
  margin-left: 1vw;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  border-radius: 0.5em;
}
.selection_close:hover {
  background-color: black;
}
.selection_content {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.title_meni {
  position: absolute;
  top: -1.5em;
  left: 1em;
  background-color: white;
  border: 2px solid yellow;
  border-radius: 2em;
  padding: 0.1em;
}
.icon_option {
  width: 5.5em;
  height: 5.5em;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
.s_item {
  display: flex;
  border: 2px solid white;
  border-radius: 0.5em;
  width: 5.5em;
  height: 8.5em;
  margin: 0.2em;
  margin-left: 0.5em;
  justify-content: center;
  background-color: whitesmoke;
}
.s_item:hover {
  border: 2px solid yellow;
  background-color: darkgrey;
  box-shadow: 0vh 0.5vh 2.5vh rgb(29, 29, 29);
}
.itemname {
  position: relative;
  font-size: 80%;
  top: -0.5em;
}
.dis_option {
  display: flex;
  justify-content: center;
  height: 1.2em;
  font-size: 70%;
}
.starNum {
  position: relative;
  background-color: white;
  border: 1px solid gray;
  border-radius: 0.5em;
  top: -1em;
  width: 3em;
  font-size: 0.8em;
  padding: 0.1em;
}
.selected_item {
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  bottom: 3%;
  justify-content: center;
}
.icon_selected {
  width: 4em;
  height: 4em;
  border-radius: 3em;
  border: 2px solid greenyellow;
}
.close_select {
  display: flex;
  color: red;
  border: 1px solid red;
  width: 3em;
  height: 3em;
  margin-left: 1vw;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  border-radius: 50%;
}
#izDMP {
  display: none;
}
</style>
