<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Chat',
  setup() {
    const message = ref('Chat')

    return {
      message
    }
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: 2em;
  text-align: center;
}
</style>
