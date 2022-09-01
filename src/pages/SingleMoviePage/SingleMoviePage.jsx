// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import { singleMovie } from "api/searchMovie";

// const SingleMoviePage = () => {
//     const [movie, setMovie] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//     const {id} = useParams()

//     useEffect(() => {
//         const fetchMovie = async() => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 const movie = await singleMovie(id)
//                 setMovie(movie)
//                 console.log(movie)
//             } catch (error) {
//                 setError(error);
//             }
//             finally{
//                 setLoading(false);
//             }
//         }
//         fetchMovie()

//     }, [id])

//     return (
//         <div>
//         <div>
//             <img src="" alt={movie.title} />
//         </div>
//         <div>
//             <h2>{movie.title}</h2>
//             <p>User score: {movie.vote_average} %</p>
//             <h3>Overview</h3>
//             <p>{movie.overview}</p>
//             <h4>Genres</h4>
//             <p>{movie.genres.name}</p>
//         </div>

//         </div>
//     );
// }

// export default SingleMoviePage;