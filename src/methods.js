const fs = require("fs")

const response = JSON.parse(fs.readFileSync("./response.json"))

const getName = () => {
  return response?.displayedName?.displayedName?.value[0] || ""
}

const getShops = () => {
  const shops = []
  const stocks = response?.stock?.stocks || {}
  Object.keys(stocks).forEach((region) =>
    Object.keys(stocks[region] || {}).forEach((shop) =>
      +stocks[region][shop] ? shops.push(shop) : null
    )
  )
  return shops
}

const getExtremum = (region) => {
  let extremum = {}
  const reg = response?.stock?.stocks[region] || {}

  Object.keys(reg).forEach((shop) => {
    const currentKey = Object.keys(extremum)[0]
    !currentKey
      ? (extremum = { [shop]: reg[shop] })
      : +reg[shop] > +extremum[currentKey]
      ? (extremum = { [shop]: reg[shop] })
      : null
  })
  return extremum
}

console.log(getName())

console.log(getShops())

console.log(getExtremum(34))
