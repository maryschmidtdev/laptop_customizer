import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class FeatureItems extends React.Component {
  render() {
    const feature = this.props.feature;
    const item = this.props.item;
    return (
      <div>
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.name}
          onChange={(e) => this.updateFeature(feature, item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureItems;
