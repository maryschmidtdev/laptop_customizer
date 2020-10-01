import React from "react";
import SummaryItem from "./SummaryItems";

class SummaryTotal extends React.Component {
  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    );
  }
}
export default SummaryTotal;
