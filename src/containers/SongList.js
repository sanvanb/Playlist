import React from 'react';
import List from '../components/List/List';

const SongList = (props) => {
    return (
        <div>
            <span>Song</span>
            <span>Artist</span>
            <span>Genre</span>
            <span>Rating</span>
            <List items={props.list} />
        </div>
    )
}

export default SongList;