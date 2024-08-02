import React from "react";

function CartDisplay({ id, title, price, thumbnail, quantity, description, handleDelete, handleQua }) {

    return (

        <div className="card mb-3 backgroundContainer" style={{ color: "#0c4151", maxWidth: "700px", margin: "auto", height: '300px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={thumbnail} className="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">{price}</small></p>
                        <div className="dropdown">
                        <button type="button" className="btn " onClick={() => handleDelete(id)}>Delete</button> &emsp;
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Add more ({quantity})
                            </button>
                            <ul className="dropdown-menu">
                                <li><a value={id} className="dropdown-item" onClick={(e)=>{handleQua(e, 1, id)}}>1</a></li>
                                <li><a value={id} className="dropdown-item" onClick={(e)=>{handleQua(e, 2, id)}}>2</a></li>
                                <li><a value={id} className="dropdown-item" onClick={(e)=>{handleQua(e, 3, id)}}>3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDisplay