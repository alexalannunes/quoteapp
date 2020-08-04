import codes from "../constants/codes";

/**
 * @link documentation https://docs.awesomeapi.com.br/api-de-moedas
 */

const ALL_COINS = codes.join(",");

/**
 * returns the url with all coins avaliables
 */
export const allCoins = `/all/${ALL_COINS}`;

/**
 * returns specific coin url
 *
 * @param {String} coin one of valids coins eg.: USD, BRC, ...
 */
export const oneCoin = (coin) => `/${coin}-BRL`;

/**
 * all
 * /json/all/:moedas
 *
 *
 * last days
 * /json/daily/:moeadas/:numero_dias
 *
 *
 * specific period [YYYYMMDD]
 * /json/daily/moeda?start_date=20180901&end_date=20180930
 *
 */
