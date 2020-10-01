import React from 'react'
import FeatureItems from './FeatureItems'


class Features extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
            }}
        return (

        )
    }
}
