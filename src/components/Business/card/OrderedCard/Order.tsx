import React from 'react';

import {order} from '../../types';

const Order: React.FC<order> = ({name, price, amount}) => {
    return(
        <div className="grid grid-cols-3">
            <div>{name}</div>
            <div>{price}</div>
            <div>{amount}</div>
        </div>
    )
}

export default Order;