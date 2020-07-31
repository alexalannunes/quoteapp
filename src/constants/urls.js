/**
 * @link documentation https://docs.awesomeapi.com.br/api-de-moedas
 */

/**
 * returns the url with all coins avaliables
 */
export const allCoins = "/all";

/**
 * returns specific coin url
 *
 * @param {String} coin one of valids coins eg.: USD, BRC, ...
 */
export const oneCoin = (coin) => `/${coin}-BRL`;
