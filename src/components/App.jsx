import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

// firebase auth
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // const { storeId } = this.props.match.params;
    // this.ref = base.syncState(`${storeId}/fishes`, {
    //   context: this,
    //   state: 'fishes'
    // });
  }

  // Close sockets / prevent memory leak
  componentWillUnmount() {
    // base.removeBinding(this.ref);
  }

  componentDidUpdate() {

  }

  addOrder = key => {
    // Get copy of state
    const order = { ...this.state.order }
    // check if it is already in CART
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  addFish = fish => {
    // IF FISHES is OBJ
    // 1. get and spread old fishes
    const fishes = { ...this.state.fishes }
    // 2. add new fish to existing fishesOBJ
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });

    // ELSE IF FISHES is array
    // this.setState((prevState) => {
    //     fishes: prevState.fishes.push(fish);
    // });
    console.log(this.state.fishes);
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Food Market" />
          <ul className="fishes">
            {
              Object.keys(this.state.fishes).map(key =>
                <Fish
                  addOrder={this.addOrder}
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                />
              )
            }
          </ul>
        </div>

        <Order
          fishes={this.state.fishes}
          order={this.state.order}
        />

        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;