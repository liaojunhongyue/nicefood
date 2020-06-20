const vueFilter = {
  dateFormatToSecond(timer) {
    const date = new Date(timer)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds();
    [year, month, day, hour, min, sec] = [year, month, day, hour, min, sec].map(
      item => (item < 10 ? '0' + item : item)
    )
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  },
  dateFormatToDay(timer) {
    const date = new Date(timer)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate();
    [year, month, day] = [year, month, day].map(
      item => (item < 10 ? '0' + item : item)
    )
    return `${year}-${month}-${day}`
  }
}

export default vueFilter
