import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	static propTypes = {
		history: PropTypes.object
	}

	handleSubmit = e => {
		e.preventDefault();
		const storeName = e.target.elements.storeName.value;
		this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return (
			<Fragment>
				<form className="store-selector" onSubmit={this.handleSubmit}>
					<h1>Please enter a store name</h1>
					<input
						name="storeName"
						type="text"
						required
						placeholder="Store Name"
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store</button>
				</form>
			</Fragment>
		);
	}
}

export default StorePicker;