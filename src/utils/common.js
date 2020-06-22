export function debounce(func, wait) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
