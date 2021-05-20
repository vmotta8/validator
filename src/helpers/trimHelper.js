exports.trimHelper = (item) => {
  if (!item || item === '') {
    return item
  }

  return (item.replace(/ +(?= )/g, '')).trim()
}
