<script setup>
  import iScale from '../assets/scale.png'
  import iBook from '../assets/book.jpg'
  import iDice from '../assets/dice.jpg'

  import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="topBtns">
        <div class="topButton" ><RouterLink to="/know" ><img class="icn_topNav" :src="iScale"/></RouterLink></div>
        <div class="topButton"><RouterLink to="/know" ><img class="icn_topNav" :src="iBook"/></RouterLink></div>
        <div class="topButton"><RouterLink to="/dime" ><img class="icn_topNav" :src="iDice"/></RouterLink></div>
    </div>
</template>

<script>
</script>

<style scoped>
.topBtns{
  position: absolute;
  right: 1em;
  display: flex;
  flex-direction: row;
  padding-top: 0.5em;
}
.topButton{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  background-image: linear-gradient(to top right, rgb(209, 209, 209), rgb(119, 108, 119));
  box-shadow: 0vh -0.5vh 2.5vh rgb(29, 29, 29);
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.3em;
  border-radius: 10em;
  font-size: 1.5em;
}
.topButton:hover{
  background-image: linear-gradient(to top right, rgb(209, 209, 209), rgb(186, 238, 184));
  box-shadow: 0vh -0.3vh 0.5vh rgb(29, 29, 29);
}
.icn_topNav{
  width: 2.3em;
  border-radius: 3em;
}
</style>