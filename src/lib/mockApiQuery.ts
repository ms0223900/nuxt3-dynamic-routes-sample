const mockApiQuery = (sec = 1, optVal = 'a') => new Promise((res) => {
  setTimeout(() => {
    const val = ~~(Math.random() * 10000)
    res(val.toString() + optVal)
  }, sec * 1000)
})

export default mockApiQuery