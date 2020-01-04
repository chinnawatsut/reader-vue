const year = (value) => {
  if (!value) return ''
  let d = new Date(value)
  return d.getFullYear()
}

export default {
  year,
}