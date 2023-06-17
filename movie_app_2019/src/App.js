import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies.data.data.movies);
        // console.log(movies);
        const {
            data: {
              data: {movies}
            }
          } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
          );
          this.setState({movies, isLoading: false});
      };
    componentDidMount() {
    //   setTimeout(() => {
    //     this.setState({isLoading: false});
    //   }, 6000);
      this.getMovies();
    }
    render() {
      // const {isLoading} = this.state;
      // return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
      const {isLoading, movies} = this.state;
      return (
        // <div>
        //   {isLoading
        //     ? "Loading..."
        //     : movies.map(movie => (
        //       <Movie
        //         key={movie.id}
        //         id={movie.id}
        //         year={movie.year}
        //         title={movie.title}
        //         summary={movie.summary}
        //         poster={movie.medium_cover_image}
        //       />
        //   ))}
        // </div>
        //<section class="container">
        <section className="container">
          {isLoading ? (
            // <div class="loader">
            //   <span class="loader__text">Loading...</span>
            // </div>
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            //<div class="movies">
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
            ))}
            </div>
          )}
        </section>
      );
    }
}

export default App;