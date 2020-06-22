import Vue from 'vue'
import { debounce } from '../utils/common'

Vue.directive('debounce', {
  bind(el, binding) {
    let executeFunction
    if (binding.value instanceof Array) {
      const [func, time = 1000] = binding.value
      executeFunction = debounce(func, time)
    } else {
      executeFunction = debounce(binding.value, 1000)
    }
    el.addEventListener('input', executeFunction)
  }
})
