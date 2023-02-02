import React, { Component } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=5feaca9&s=matrix`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ movies: data.Search, loading: false });
            })
            .catch((err) => console.log(err));
    }

    searchMovies = (str, type = '') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=5feaca9&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                this.setState({ movies: data.Search, loading: false });
            })
            .catch((err) => console.log(err));
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className="content container">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
