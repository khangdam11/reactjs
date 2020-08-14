import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddProduct = props => {
    const [valueInput, setValueInput]=useState({}); 
    const onHandleChange =(e)=>{
        setValueInput({
            ...valueinput,
            [name]: value
        });
    }
    const onHandleChange = (e)=>{
        e.prevenrDefault();
        props.onAdd(valueInput)
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <div className="card shadow mb-4">
                <div className="card-body">


                    <form action="" onSubmit={onHandleSumbit}>
                        <div className="form-group">
                            <label htmlFor="">Ten san pham</label>
                            <input type="text" className="form-coltrol" onChange={onHandChage} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="">Anh san pham</label>
                            <input type="text" className="form-coltrol" name="image" onChange={onHandChage} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="">Gia san pham</label>
                            <input type="text" className="form-coltrol" name="price" onChange={onHandChage} />

                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

index.propTypes = {

}

export default index
