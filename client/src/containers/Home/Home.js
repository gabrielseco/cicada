import React, { Component } from 'react';
import { Header } from 'components';
import { PropertyTransformer } from './../../services/PropertyTransformer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    new PropertyTransformer().getProperties('barcelona').then(response => {
      console.log('ids', response);
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default Home;
