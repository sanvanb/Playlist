import React from 'react';
import SongInput from './containers/SongInput';
import SongData from './data/SongData';
import TableList from './containers/TableList';

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: SongData
        }
        this.handleSongInput = this.handleSongInput.bind(this)
        this.handleSongDelete = this.handleSongDelete.bind(this)
        this.handleFilterGenre = this.handleFilterGenre.bind(this)
        this.handleFilterRating = this.handleFilterRating.bind(this)
    }

    handleSongInput(song) {
        console.log(song)
        this.setState(state => {
            const songList = [...state.songList]
            songList.push({
                id: songList.length + 1,
                title: song.title,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            })
            return {
                songList: songList
            }

        })

    }

    handleSongDelete(id) {
        console.log(id)
        this.setState(state => {
            const songId = parseInt(id)
            const songlist = state.songList.filter(item => {
                return item.id !== songId
            })
            return {
                songList: songlist
            }
        })
    }

    handleFilterGenre(genre) {
        console.log(`handleFilterGenre(): genre=${genre}`)

        this.setState(state => {
            const songlist = state.songList.filter(item => {
                return item.genre === genre
            })
            return {
                songList: songlist
            }
        })
    }

    handleFilterRating(rating) {
        console.log(`handleFilterRating(): rating=${rating}`)

        this.setState(state => {
            const songRating = parseInt(rating)
            const songlist = state.songList.filter(item => {
                return item.rating === songRating
            })
            return {
                songList: songlist
            }
        })
    }

    render() {
        return (
            <div>
                <SongInput onSubmit={this.handleSongInput} />
                {/* <SongList list={this.state.songList} /> */}
                <TableList
                    list={this.state.songList}
                    onSongDelete={this.handleSongDelete}
                    onFilterGenre={this.handleFilterGenre}
                    onFilterRating={this.handleFilterRating}
                />
            </div>
        )
    }

}

export default Container;