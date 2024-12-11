import MovieCard from '../components/MovieCard'
import movies from '../db/movies'

export default function HomeMovie() {
	return (
		<div className='container'>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
				{movies.map((movie) => (
					<div className='col' key={movie.id}>
						<MovieCard movie={movie} />
					</div>
				))}
			</div>
		</div>
	)
}
