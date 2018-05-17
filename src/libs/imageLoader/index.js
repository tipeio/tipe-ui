export default url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve()
    image.onerror = error => reject(error)
    image.src = url
  })
