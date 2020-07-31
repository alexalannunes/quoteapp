import "intl";
import "intl/locale-data/jsonp/pt-BR";
export default (num) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(num);
