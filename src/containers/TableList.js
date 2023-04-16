import React from 'react';
import Table from '../components/Table/Table';
import InputSelect from '../components/InputSelect';
import GenreData from '../data/GenreData';
import RatingData from '../data/RatingData';

const TableList = (props) => {
    return (
        <table>
            <thead>
                <tr className="song-header">
                    <th className="song-row_item">Song</th>
                    <th className="song-row_item">Artist</th>
                    <th className="song-row_item">Genre
                    <InputSelect
                            id="filter-genre"
                            options={GenreData}
                            onSelectChange={props.onFilterGenre}
                        />
                    </th>
                    <th className="song-row_item">Rating
                    <InputSelect
                            id="filter-rating"
                            options={RatingData}
                            onSelectChange={props.onFilterRating}
                        />
                    </th>
                    <th></th>
                </tr>
            </thead>
            <Table
                items={props.list}
                onDelete={props.onSongDelete}
            />
        </table>
    )
}

export default TableList;