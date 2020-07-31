/**
 *
 * @param {Object} obj array of objects
 * @param {Object} obj.USD object property as key
 * @param {string} obj.USD.code object property
 * @param {String} obj.USD.codein converted to BRL (default)
 * @param {String} obj.USD.name coin name
 * @param {String} obj.USD.high high price
 * @param {String} obj.USD.low low price
 * @param {String} obj.USD.varBid variation
 * @param {String} obj.USD.pctChange variation percentage
 * @param {String} obj.USD.bid purchase
 * @param {String} obj.USD.ask sale
 * @param {String} obj.USD.timestamp date created in timestamp
 * @param {String} obj.USD.create_date date created in plain text
 */

/**
 * convert this array of object to a array.
 *
 * **Note** The key of each object is the own code, so I can remove it. The object itself already has a code
 *
 * @param {Array.<{USD: {code: String, codein: String, name: String, high: String, low: String, varBid: String, pctChange: String, bid: String, ask: String, timestamp: String, create_date: String }}>} coins
 */
export default function coinsToArray(coins) {
  return Object.values(coins);
}
