import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {

    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
            desc: PropTypes.string,
        }),
        updateFish: PropTypes.func,
        index: PropTypes.string
    }

    handleChange = (event) => {
        console.log(event.currentTarget.value);
        // Get old fish object and update according to new 
        const updatedFish = {
            ...this.props.details,
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updateFish(this.props.index, updatedFish);
    }
    render() {
        const { name, price, status, desc, image } = this.props.details;
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={name} />
                <input type="text" name="price" onChange={this.handleChange} value={price} />
                <select name="status" onChange={this.handleChange} value={status}>
                    <option value="available">Fresh !</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={desc} />
                <input type="text" name="image" onChange={this.handleChange} value={image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>
                    -Delete Fish
                </button>
            </div >
        )
    }
};

export default EditFishForm;