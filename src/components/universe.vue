<script setup>
    import iDs from '../assets/ds.png'
</script>

<template>
    <div class="universe">
        <img class="ds_icon" :src="iDs">
        <div class="izDe">
            <slot name="izE"></slot>
        </div>
        
    </div>
</template>

<style scoped>
.universe{
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    top:0em;
    z-index: -1;
}
.izDe{
    display: flex;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 0.3em;
  padding: 0.1em;
  box-shadow: inset 0vh 0.1vh 0.5vh rgb(29, 29, 29);    
}
.ds_icon{
  height: 5em;
  width: 5em;
}
</style>