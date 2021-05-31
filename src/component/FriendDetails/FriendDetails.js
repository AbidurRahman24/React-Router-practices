import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FriendDetails = () => {
   let {id} = useParams()
   const [friend, setFriend] = useState({})
   const {title, userId} = friend
   useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => setFriend(data))
},[])
    return (
        <div>
            <p>Friend </p>
            <h2>{title}</h2>
            <p>email: {userId}</p>
        </div>
    );
};

export default FriendDetails;