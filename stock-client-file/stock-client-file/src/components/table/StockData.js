import React from "react";
import axios from "axios";

class StockData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockValue: [],
      nasdaq: this.props.nasdaq,
      avg_buy: this.props.avg_buy,
      country: this.props.country,
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  async fetchStock() {
    const pointerToThis = this;
    let StockSymbol = this.state.nasdaq;
    let stockValueFunction = [];
    if (this.state.country == "US") {
      const options = {
        method: "GET",
        url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary",
        params: { symbol: this.state.nasdaq, region: "US" },
        headers: {
          "x-rapidapi-key":
            "ebd44e3252msh75a5574d4979c53p1e88fejsn8873b796713d",
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      };
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data.price.regularMarketPrice.raw);
          stockValueFunction.push(response.data.price.regularMarketPrice.raw);
          pointerToThis.setState({
            stockValue: stockValueFunction,
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      const options = {
        method: "GET",
        url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary",
        params: { symbol: `${this.state.nasdaq}.NS`, region: "IN" },
        headers: {
          "x-rapidapi-key":
            "ebd44e3252msh75a5574d4979c53p1e88fejsn8873b796713d",
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      };
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data.price.regularMarketPrice.raw);
          stockValueFunction.push(response.data.price.regularMarketPrice.raw);
          pointerToThis.setState({
            stockValue: stockValueFunction,
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  trak() {
    var num =
      ((this.state.stockValue - this.state.avg_buy) / this.state.avg_buy) * 100;
    if (num >= 0) {
      return <td style={{ color: "#4caf50" }}>{num.toFixed(2)}%</td>;
    } else {
      return <td style={{ color: "red" }}>{num.toFixed(2)}%</td>;
    }
  }

  render() {
    return (
      <>
        <td>{this.state.stockValue}</td>
        {this.trak()}
      </>
    );
  }
}

export default StockData;
