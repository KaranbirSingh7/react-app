import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../helpers';

class Fish extends React.Component {

    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
            desc: PropTypes.string,
        }),
        addToOrder: PropTypes.func 
    }

    handleClick = () => {
        this.props.addOrder(this.props.index);
    };

    render() {
        const { name, image, desc, price, status } = this.props.details;
        const isAvailable = status === 'available';

        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>

                <button
                    onClick={this.handleClick}
                    disabled={!isAvailable}
                >
                    {isAvailable ? 'Add to Cart' : 'Sold Out!!'}
                </button>
            </li>
        );
    }
}

export default Fish;