<template>
  <transition>
    <slot></slot>
  </transition>
</template>
<!------------------------JS------------------------>

<script>
export default{
  name: 'FadeAnimation'
}

</script>
<!------------------------Style------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity 1s

</style>
