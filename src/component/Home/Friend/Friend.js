import React from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Friend = (props) => {
    const history = useHistory()
    const {name, title, id} = props.friend
    const friendStyle = {
        border : '1px solid green',
        margin : '20px',
        padding : '20px',
    }

    function handleClick() {
        history.push(`/product/${id}`);
      }

    return (
        <div style={friendStyle}>
            <p>Id :  <Link to={`/product/${id}`}>hello{id}</Link></p>

            <button onClick={handleClick}>add me</button>

            <h5>Name :  {name}</h5>
            <h1>Email: {title}</h1>
        </div>
    );
};

export default Friend;