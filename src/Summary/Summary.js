import React, { Component } from "react";
import SummaryItems from "../SummaryItems/SummaryItems";
import Features from "../Features/Features";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Summary extends Component {
  render() {
    const featureHash = this.props.featureHash;
    const feature = this.props.feature;
    const selectedOption = this.props.selectedOption;
    return (
      <main>
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      </main>
    );
  }
}

export default Summary;
