import React from 'react';
import TableItem from './TableItem';

class Table extends React.Component {
    render() {
        const items = this.props.items
        const tableItems = items.map(item => (
            <TableItem
                key={item.id}
                item={item}
                onClick={this.props.onDelete}
            />
        ))

        return (
            <tbody>
                {tableItems}
            </tbody>
        )
    }
}

export default Table;