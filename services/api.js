import axios from "axios";

export default axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json",
});

// _get = () => {
//   axios.get(`https://economia.awesomeapi.com.br/${this.state.current}-BRL`).then((response) => {
//     this.setState({ coin: response.data[0], loading: false });
//   });
// };

// _to_money = (num) => {
//   return new Number(num).toFixed(2).replace(".", ",");
// };

//01ff70
