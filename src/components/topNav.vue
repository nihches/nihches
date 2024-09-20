<template>
    <div class="topNav">
      <slot name="nav"></slot>
    </div>
</template>

<style scoped>
.topNav{
  display: flex;
  flex-direction: row;
  height: 3em;
  min-height: 2em;
  width: 100vw;
}
</style>