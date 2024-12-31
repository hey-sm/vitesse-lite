<template>
  <div>
    <button> dd</button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const name = ref('')
const obj = {}
const router = useRouter()
function go() {
  console.log(name.value)
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>
