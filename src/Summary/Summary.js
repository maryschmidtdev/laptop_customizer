import React, { Component } from "react";
import SummaryItems from "../SummaryItems/SummaryItems";
import Features from "../Features/Features";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Summary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <SummaryItems
          featureHash={featureHash}
          feature={feature}
          name={selectedOption.name}
          cost={USCurrencyFormat.format(selectedOption.cost)}
        />
      );
    });

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Summary;
