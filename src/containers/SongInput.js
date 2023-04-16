import React from 'react';
import InputField from '../components/InputField';
import InputSelect from '../components/InputSelect';
import GenreData from '../data/GenreData';
import RatingData from '../data/RatingData';

class SongInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            rating: 0
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleArtistChange = this.handleArtistChange.bind(this)
        this.handleGenreChange = this.handleGenreChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(title) {
        this.setState(() => {
            return {
                title: title
            }
        })
    }

    handleArtistChange(artist) {
        this.setState(() => {
            return {
                artist: artist
            }
        })
    }

    handleGenreChange(name) {
        this.setState(() => {
            return {
                genre: name
            }
        })
    }

    handleRatingChange(value) {
        this.setState(() => {
            return {
                rating: value
            }
        })
    }

    handleSubmit() {
        if (this.state.title !== null &&
            this.state.title !== undefined &&
            this.state.title.length > 0 &&
            this.state.artist !== null &&
            this.state.artist !== undefined &&
            this.state.artist.length > 0 &&
            this.state.genre !== null &&
            this.state.genre !== undefined &&
            this.state.genre.length > 0 &&
            this.state.rating !== null &&
            this.state.rating !== undefined &&
            this.state.rating !== 0
        ) {
            this.props.onSubmit({
                title: this.state.title,
                artist: this.state.artist,
                genre: this.state.genre,
                rating: this.state.rating
            })
            this.setState(() => {
                return {
                    title: '',
                    artist: '',
                }
            })
        }

    }

    render() {
        return (
            <div className="SongInput">
                <form>
                    <InputField
                        id="input-title"
                        value={this.state.title}
                        placeholder="titel liedje"
                        onChange={this.handleTitleChange}
                    />
                    <InputField
                        id="input-artist"
                        value={this.state.artist}
                        placeholder="naam artiest"
                        onChange={this.handleArtistChange}
                    />
                    <InputSelect
                        id="input-genre"
                        options={GenreData}
                        onSelectChange={this.handleGenreChange}
                    />
                    <InputSelect
                        id="input-rating"
                        options={RatingData}
                        onSelectChange={this.handleRatingChange}
                    />
                </form>
                <button
                    className="submit-button"
                    type="submit" onClick={this.handleSubmit}
                >
                    Toevoegen
                </button>
            </div>
        )
    }
}

export default SongInput;