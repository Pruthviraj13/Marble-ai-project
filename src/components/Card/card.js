import React from 'react'
import './card.css';
const card = ({myData}) => {
    const {title,body,id} = myData;
    return (
        <li className="nav-item">
            <a className="nav-link" href="/">
                <div className="card1">
                    <div className="card-header1" style={{fontSize:"20px" , textTransform:"uppercase"}} >
                        {id}<strong>{title}</strong> 
                    </div>
                    <div className="card-body1">
                        <h5 className="card-title">{body.substr(0,150)}</h5>
                        <p className="card-text">{body.substr(0,50)}</p>
                        <a href="/" className="btngo btn-primary">Go somewhere</a>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default card
