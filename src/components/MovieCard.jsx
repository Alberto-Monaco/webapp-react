export default function MovieCard({ movie }) {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>{movie.title}</h5>
				<h6 className='card-subtitle mb-2 text-muted'>{movie.description}</h6>
				<p className='card-text'>{movie.author}</p>
			</div>
		</div>
	)
}
