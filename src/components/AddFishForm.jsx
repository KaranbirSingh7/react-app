import React from 'react';

class AddFishForm extends React.Component {
    createFish = e => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const price = parseFloat(e.target.elements.price.value);
        const status = e.target.elements.status.value;
        const desc = e.target.elements.desc.value;
        const image = e.target.elements.image.value;

        const fish = { name, price, status, desc, image }

        console.table(fish);
    }

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
                <input type="submit" value="+Add Fish" />
            </form >
        )
    }
}

export default AddFishForm;