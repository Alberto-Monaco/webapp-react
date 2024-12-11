export default function MovieCard({ movie }) {
	return (
		<div className='card shadow-sm'>
			<div className='card-body'>
				<h3 className='card-title'>{movie.title}</h3>
				<p className='card-subtitle mb-2 text-muted'>
					<span className='fw-bold'>Description: </span> {movie.description}
				</p>
				<p className='card-text'>
					<span className='fw-bold'>Author: </span> {movie.author}
				</p>
			</div>
		</div>
	)
}
