<template>
  <div>
    Vueuse
    <UseMouse v-slot="{ x, y }">
      x: {{ x }}
      y: {{ y }}
    </UseMouse>
  </div>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>
