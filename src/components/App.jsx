import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

// firebase auth
import base from '../base';

class App extends React.Component {

	static propTypes = {
		match: PropTypes.object
	}

	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { storeId } = this.props.match.params;
		// Set local storage values again from last page.
		this.setState({ fishes: sampleFishes });

		const localStorageRef = localStorage.getItem(storeId);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
		localStorage.setItem(storeId, localStorageRef);

		// this.ref = base.syncState(`${storeId}/fishes`, {
		//   context: this,
		//   state: 'fishes'
		// });
	}

	componentDidUpdate() {
		const { storeId } = this.props.match.params;
		localStorage.setItem(storeId, JSON.stringify(this.state.order));
	}

	// Close sockets / prevent memory leak
	componentWillUnmount() {
		// base.removeBinding(this.ref);
	}


	addOrder = key => {
		console.log(`${this.state.fishes[key]} added to order`);
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	}

	deleteOrder = key => {
		console.log(`${key} removed from Order`);
		const order = { ...this.state.order };
		delete order[key];
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

	updateFish = (key, updatedFish) => {
		const fishes = { ...this.state.fishes };
		fishes[key] = updatedFish
		this.setState({ fishes });
	}

	deleteFish = key => {
		const fishes = { ...this.state.fishes };
		console.log(JSON.stringify(fishes[key]));
		delete fishes[key];
		// fishes[key] = null;
		this.setState({ fishes });
	}

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
					deleteOrder={this.deleteOrder}
				/>

				<Inventory
					fishes={this.state.fishes}
					addFish={this.addFish}
					deleteFish={this.deleteFish}
					updateFish={this.updateFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		);
	}
}

export default App;