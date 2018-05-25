export default (mock, num) => {
  const mocks = []

  for (var i = 0; i < num; i++) {
    mocks.push(mock())
  }

  return mocks
}
