<template>
  <HelloWorld></HelloWorld>
  <h2>{{ home }}</h2>
  <h2>{{ store.state.sidebarOpen }}</h2>
  <button @click="store.dispatch('set')">Store</button>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { getHome } from '@/api/home'
import HelloWorld from '@/components/HelloWorld.vue'

const home = ref(null)
const store = useStore()

getHome().then(res => {
  home.value = res.data.data[0]
})

</script>