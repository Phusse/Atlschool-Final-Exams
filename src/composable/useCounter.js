import { computed} from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
    const store = useStore()

    const count = computed(() => store.state.count)

  function increment() {
    store.commit('increment')
  }

  function decrement() {
    store.commit('decrement')
  }

  function setValue(value) {
    store.commit('setValue', value)
  }

  function reset() {
    store.commit('reset')
  }

  return {
    count,
    increment,
    decrement,
    setValue,
    reset
  }
}
