<template>
    <div class="space">
        <div class="spots">
          <slot name="spot"></slot>
        </div>
        <div class="stats">
            <slot name="stat">Empty</slot>
        </div>
        <div class="numbers">
          <slot name="number"></slot>
        </div>
    </div>
</template>

<style scoped>
.space{
  font-size: 0.74em;
  position: absolute;
  align-items: center;
}
.spots{
  display: flex;
  align-items: center; 
  justify-content: center;
  border-radius: 5em;
  width: 3em;
  height: 3em;
}
.stats{
  display: flex;
  align-items: center;
  justify-content: center;
  position: inherit;
  background-color: whitesmoke;
  border-radius: 0.3em;
  padding: 0.2em;
  top: 4em;
  box-shadow: inset 0vh 0.1vh 0.5vh rgb(29, 29, 29);
}
.numbers{
  position: inherit;
  border: 2px solid rgb(29,29,29);
  border-radius: 10em;
  top: -1.2em;
  left: -0.5em;
  width: 1em;
  height: 1em;
  text-align: center;
  color: rgb(29,29,29);
  background-color: white;
  z-index: 1;
}
</style>