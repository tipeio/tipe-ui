const getPrecision = number => {
  const n = number.toString().split('.')

  return n[1] ? n[1].length : 0
}

export { getPrecision }
