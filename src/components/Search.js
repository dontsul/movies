import { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filterValue: 'all',
        };
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.filterValue);
        }
    };

    handleRadioChecked = (e) => {
        this.setState(
            () => ({ filterValue: e.target.name }),
            () => {
                this.props.searchMovies(
                    this.state.search,
                    this.state.filterValue
                );
            }
        );
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="input-field wrap-search">
                        <input
                            id="first_name"
                            type="text"
                            className="validate"
                            placeholder="Search movies and series"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />

                        <button
                            className="btn"
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.filterValue
                                )
                            }
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div action="" className="form-elem">
                    <label>
                        <input
                            className="with-gap"
                            name="all"
                            type="radio"
                            onChange={this.handleRadioChecked}
                            checked={this.state.filterValue === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="movie"
                            type="radio"
                            onChange={this.handleRadioChecked}
                            checked={this.state.filterValue === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="series"
                            type="radio"
                            onChange={this.handleRadioChecked}
                            checked={this.state.filterValue === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </>
        );
    }
}

export { Search };
