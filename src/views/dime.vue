<script setup>
  import { RouterLink } from 'vue-router'
  import iCC from '../assets/cc.jpg'
</script>

<template>
  <div class="back"><RouterLink to="/">X</RouterLink></div>
</template>

<script>
export default {
  data(){
    return{
      
      character: "<",
      user: "Nihche",
      nav: Number(localStorage.getItem("nav")) || 0,
      invSun: JSON.parse(localStorage.getItem("invSun")) || [
        {id: 0, name: "bds", title: "Brown Dwarf", qnt: 0, cost: 10, value: 10, text: "10H"},
        {id: 1, name: "ys", title: "Yellow Star", qnt: 0, cost: 100, value: 110, text: "100H+1BD"},
        {id: 2, name: "bg", title: "Blue Giant", qnt: 1, cost: 1000, value: 1100, text: "1kH+1YS"},
        {id: 3, name: "bh", title: "Black hole", qnt: 0, cost: 10, value: 10000, text: "10BG"},
        {id: 4, name: "cc", title: "Celestial Coin", qnt: 0, cost: 1, value: 4796, text: ""}
      ],
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.ccNum{
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
  height: 1.0em;
  font-size: 1.2em;
  border-radius: 3em;
}
.icon_option{
  position: relative;
  width: 1.1em;
  top: 0em;
  border-radius: 2em;
}
.knowland{
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
}
.sideNav{
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100vh;
  background-color: white;
}
.sideOption{
  display: flex;
  justify-content: center;
  border-bottom: 2px solid rgb(29,29,29);
  padding: 0.5em;
}
.sideOption:hover{
  background-color: lightgray;
}
.Container{
  position: absolute;
  left: 25vw;
}
.topStat{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 1.5vh;
  width: 73.5vw;
  padding: 0.5em;
  background-color: lightgray;
}
</style>
