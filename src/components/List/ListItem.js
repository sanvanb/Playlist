import React from 'react';

const ListItem = (props) => {
    return (
        <li>
            <span> {props.item.title} </span>
            <span> {props.item.artist} </span>
            <span> {props.item.genre} </span>
            <span> {props.item.rating} </span>
        </li>
    )
}

export default ListItem;