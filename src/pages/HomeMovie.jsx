import MovieCard from '../components/MovieCard'
import { useState, useEffect, useContext } from 'react'
import GlobalContext from '../contexts/GlobalContext'
import Loader from '../components/Loader'

export default function HomeMovie() {
	const baseUrl = 'http://localhost:3000'
	const [movies, setMovies] = useState([])
	const { loading, setLoading } = useContext(GlobalContext)

	useEffect(() => {
		setLoading(true)
		fetch(`${baseUrl}/movies`)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.movies)
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='container my-5 '>
					<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
						{movies.map((movie) => (
							<div className='col' key={movie.id}>
								<MovieCard movie={movie} />
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}
