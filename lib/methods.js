"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = require("fs");

var response = JSON.parse(fs.readFileSync("./response.json"));

var getName = function getName() {
  var _response$displayedNa, _response$displayedNa2;

  return (response === null || response === void 0 ? void 0 : (_response$displayedNa = response.displayedName) === null || _response$displayedNa === void 0 ? void 0 : (_response$displayedNa2 = _response$displayedNa.displayedName) === null || _response$displayedNa2 === void 0 ? void 0 : _response$displayedNa2.value[0]) || "";
};

var getShops = function getShops(reg) {
  var _response$stock;

  var shops = [];
  var stocks = (response === null || response === void 0 ? void 0 : (_response$stock = response.stock) === null || _response$stock === void 0 ? void 0 : _response$stock.stocks) || {};
  Object.keys(stocks).forEach(function (region) {
    return Object.keys(stocks[region] || {}).forEach(function (shop) {
      return +stocks[region][shop] ? shops.push(shop) : null;
    });
  });
  return shops;
};

var getExtremum = function getExtremum(region) {
  var _response$stock2;

  var extremum = {};
  var reg = (response === null || response === void 0 ? void 0 : (_response$stock2 = response.stock) === null || _response$stock2 === void 0 ? void 0 : _response$stock2.stocks[region]) || {};
  Object.keys(reg).forEach(function (shop) {
    var currentKey = Object.keys(extremum)[0];
    !currentKey ? extremum = _defineProperty({}, shop, reg[shop]) : +reg[shop] > +extremum[currentKey] ? extremum = _defineProperty({}, shop, reg[shop]) : null;
  });
  return extremum;
};

console.log(getName());
console.log(getShops());
console.log(getExtremum(34));