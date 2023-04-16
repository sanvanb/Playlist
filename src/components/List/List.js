import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        const items = this.props.items
        const listItems = items.map(item => (
            <ListItem
                key={item.id}
                item={item}
            />
        ))

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default List;