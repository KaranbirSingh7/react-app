import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {

    static propTypes = {
        addFish: PropTypes.func
    }

    createFish = e => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const price = parseFloat(e.target.elements.price.value);
        const status = e.target.elements.status.value;
        const desc = e.target.elements.desc.value;
        const image = e.target.elements.image.value;
        const fish = { name, price, status, desc, image };

        this.props.addFish(fish);
        e.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="price" placeholder="Price" />
                <select name="status" >
                    <option value="available">Fresh !</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" placeholder="Desc" />
                <input type="text" name="image" placeholder="Image" />
                <button type="submit">+Add Fish</button>
            </form >
        );
    }
}

export default AddFishForm;