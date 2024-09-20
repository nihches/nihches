<script setup>
  import iCelestial from '../assets/Celestial.png'
  import iMatter from '../assets/Matter.png'
  import iCoin from '../assets/coin.png'
</script>

<template>
    <div class="creation_meni">
        <slot class="selectNav" name="selectNav"></slot>
        <div class="creation_items">
            <div class="creation_item" @click="showItems('create')">
            <img class="icon_matter cr_meni" :src="iMatter" height="40vh">
            <div> Hydrogen </div>
            </div>
            <div class="creation_item" @click="showItems('celestial')">
            <img class="icon_celestial cr_meni" :src="iCelestial" height="30vh">
            <div>Celestial</div>
            </div>
            <div class="creation_item" @click="showItems('inventory')">
            <img class="icon_coin cr_meni" :src="iCoin" height="40vh">
            <div>Inventory</div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'creationMeni',
    methods: {
        showItems(item){
            this.$emit('showItems', item)
        }
    }
}
</script>

<style scoped>
.creation_meni{
  position: fixed;
  display: flex;
  bottom: 0%;
  z-index:2;
}
.creation_items{
  display: flex;
  width: 100vw;
  height: 8.2vh;
  background-color: whitesmoke;
  justify-content: space-evenly;
  font-size: 80%;
}
.creation_item{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 0.1em;
  box-shadow: inset 0vh 0.1vh 1.5vh rgb(59, 59, 59);
}
.creation_item:hover{
  background-color: rgb(97, 52, 110);
  border-radius: 0.2em;
}
</style>