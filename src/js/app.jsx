import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      p: "",
      r: "",
      n: "15",
      m: 0
    };

    this.handleBalance = this.handleBalance.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
    this.handleYears = this.handleYears.bind(this);
    this.renderMortgage = this.renderMortgage.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleBalance(event) {
    this.setState({
      p: event.target.value
    });
  }

  handleInterest(event) {
    this.setState({
      r: event.target.value
    });
  }

  handleYears(event) {
    this.setState({
      n: event.target.value
    });
  }

  calculate(balance, rate, term, period) {
    let p = parseFloat(balance);
    let r = parseFloat(rate) / 12 / 100;
    let n = parseFloat(term) * 12;
    let m = 0;
    let top = r * Math.pow(1 + r, n);
    let bottom = Math.pow(1 + r, n) - 1;

    console.log("This is top div bottom: ", top / bottom);

    m = p * (top / bottom);

    console.log("top: ", top);
    console.log("bottom: ", bottom);
    console.log("Calculation: ", m);

    console.log(m);
    this.setState({ m });
  }

  renderMortgage() {
    return (
      <div className="mortgage">
        <form className="form-horizontal">
          <label>Loan Balance</label>
          <input
            placeholder="Balance"
            name="balance"
            type="number"
            value={this.state.p}
            onChange={event => this.handleBalance(event)}
          />
        </form>
        <form className="form-horizontal">
          <label>Interest Rate (%)</label>
          <input
            placeholder="Interest"
            name="rate"
            type="number"
            value={this.state.r}
            onChange={event => this.handleInterest(event)}
          />
        </form>
        <form className="form-horizontal">
          <label>Loan Term (years)</label>
          <select
            name="term"
            value={this.state.n}
            onChange={event => this.handleYears(event)}
          >
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </form>
        <button
          name="submit"
          onClick={() =>
            this.calculate(this.state.p, this.state.r, this.state.n, 1)}
        >
          Calculate
        </button>
        <div name="output">{`Your monthly payment is ${this.state.m.toFixed(2)}$`}</div>
      </div>
    );
  }

  // your Javascript goes here
  render() {
    return (
      <div className="container">
        {this.renderMortgage()}
      </div>
    );
  }
}
