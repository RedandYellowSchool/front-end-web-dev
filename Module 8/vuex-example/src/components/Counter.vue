<template>
    <div class="CounterComponent">
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="asyncIncrement">Async Increment</button>
    </div>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default defineComponent({
    name: 'CounterComponent',
    setup() {
      const store = useStore()
      // Access state and getters using computed properties
      const count = computed(() => store.state.count)
      const doubleCount = computed(() => store.getters.doubleCount)
      // Dispatch actions on button clicks
      const increment = () => store.dispatch('increment')
      const decrement = () => store.dispatch('decrement')
      const asyncIncrement = () => store.dispatch('asyncIncrement')
  
      return {
        count,
        doubleCount,
        increment,
        decrement,
        asyncIncrement
      }
    }
  })
  </script>
  