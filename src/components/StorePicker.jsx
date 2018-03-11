import React, { Fragment } from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
	// Handle form submission
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
					<input type="submit" value="Visit Store" />
				</form>
			</Fragment>
		)
	}
}

export default StorePicker;