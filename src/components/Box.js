import React from 'react'
import PropTypes from 'prop-types'
const  Box = ({color})=>{
    return(
        <div className="box" style={{
            border: '1px solid #000',
            width: 200,
            height: 200,
            background: color

        }

        }
        >

        </div>
    )
}
Box.PropTypes={

}
export default Product
