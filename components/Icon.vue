<style lang="scss">
</style>

<template>
  <i
    :class="`ic-${name}`"
    class="v-icon iconfont"
  />
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
