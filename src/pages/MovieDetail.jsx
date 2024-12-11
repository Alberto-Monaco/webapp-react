import { useParams, Link } from 'react-router-dom'
import reviews from '../db/reviews'
import movies from '../db/movies'
import ReviewCard from '../components/ReviewCard'

export default function MovieDetail() {
	const { id } = useParams()

	const movie = movies.find((movie) => movie.id === parseInt(id))

	const movieReviews = reviews.filter((review) => review.movie_id === parseInt(id))

	return (
		<section className='container mt-5'>
			<div className='card shadow-sm mb-4'>
				<div className='card-body'>
					<h2 className='card-title'>{movie.title}</h2>
					<p className='card-text'>
						<span className='fw-bold'>Description: </span>
						{movie.description}
					</p>
					<p className='card-text'>
						<span className='fw-bold'>Author: </span>
						{movie.author}
					</p>
				</div>
			</div>

			<h3 className='mb-2'>Reviews</h3>
			<div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4'>
				{movieReviews.map((review) => (
					<div className='col' key={review.id}>
						<ReviewCard review={review} />
					</div>
				))}
			</div>
			<Link className='btn btn-primary mt-3' to='/'>
				Back to Home
			</Link>
		</section>
	)
}
