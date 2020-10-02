import React, { Component } from "react";
import SummaryItems from "../SummaryItems/SummaryItems";

class Summary extends Component {
  render() {
    return (
      <main>
        <div>Summary Items</div>
        <div>Summary Items List</div>
      </main>
      // <div className="summary__option" key={featureHash}>
      //   <div className="summary__option__label">{feature} </div>
      //   <div className="summary__option__value">{selectedOption.name}</div>
      //   <div className="summary__option__cost">
      //     {USCurrencyFormat.format(selectedOption.cost)}
      //   </div>
      // </div>
    );
  }
}

export default Summary;
