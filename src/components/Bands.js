import React, {Component} from 'react';
import Band from './Band'

class Bands extends Component {
  renderBands = () => this.props.bands.map((band) => {
    return <Band key={band.id} band={band} delete={this.props.delete}/>;
  });

  render() {
    return <div>{this.renderBands()}</div>;
  }
}

export default Bands;