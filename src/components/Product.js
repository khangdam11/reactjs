import React from 'react'
import PropTypes from 'prop-types'

const Product = props => {
    console.log(props);
    return (
        <div>
            {/* <h4 className="aaa">khang đàm </h4>
            <h5 className="bbb">{props.name}</h5> */}
            <h1 className="aaa">{props.product.name}</h1>
            <h1 className="aaa">{props.product.price}</h1>
            <h1 className="aaa">{props.product.status ?'còn hàng' : 'hết hàng'}</h1>
            
        </div>
    )
}

Product.propTypes = {

}

export default Product
