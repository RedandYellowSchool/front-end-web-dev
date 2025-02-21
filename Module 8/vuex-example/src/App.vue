<template>
  <div id="app">
    <CounterComponent />
  </div>
</template>

<script>
import CounterComponent from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    CounterComponent
  }
}
</script>