import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
	return (
		<div className='card shadow-sm'>
			<div className='card-body'>
				<h3 className='card-title'>{movie.title}</h3>
				<p className='card-subtitle mb-2 text-muted'>
					<span className='fw-bold'>Abstract: </span> {movie.abstract}
				</p>
				<p className='card-text'>
					<span className='fw-bold'>Director: </span> {movie.director}
				</p>
				<Link to={`/movies/${movie.id}`} className='btn btn-dark'>
					View Details
				</Link>
			</div>
		</div>
	)
}
