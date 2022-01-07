import React from 'react';

import {product} from '../../types';

const Product: React.FC<product> = ({name, price}) => {
    return(
        <div className="grid grid-cols-2">
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export default Product;