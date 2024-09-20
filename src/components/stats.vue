<template>
    <div class="stats">
        <div class="izDm">
            <slot name="izM"></slot>
        </div>
        <div class="izDmP">
            <slot name="izMP"></slot>
        </div>
        <div class="izHy">
            <slot name="izH"></slot>
        </div>
    </div>
</template>

<style scoped>
.stats{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    top: 0.5em;
    left: 0.5em;
    border-radius: 0.3em;
    padding: 0.3em;
    max-width: 10em;
    margin: 0.2em;
    box-shadow: inset 0vh -0.5vh 1.5vh rgb(29, 29, 29);
    background-image: linear-gradient(to top left, rgb(179, 179, 179), rgb(231, 227, 231));
}
</style>