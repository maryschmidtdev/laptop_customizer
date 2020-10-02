import React, { Component } from "react";
import FeatureItems from "../FeatureItems/FeatureItems";

class Features extends Component {
  render() {
    // const features = Object.keys(this.props.features).map((feature, idx) => {
    //     const featureHash = feature + '-' + idx;
    //     const options = this.props.features[feature].map(item => {
    //       const itemHash = slugify(JSON.stringify(item));
    //     }
    return (
      <main>
        <div>feature text</div>
        <FeatureItems />
      </main>
    );
  }
}
export default Features;
