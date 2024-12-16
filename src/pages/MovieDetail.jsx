import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import ReviewFormCard from '../components/ReviewFormCard'

export default function MovieDetail() {
	const { id } = useParams()
	const movieUrl = `http://localhost:3000/movies/${id}`
	const [movie, setMovie] = useState(null)
	const [success, setSuccess] = useState(false)
	useEffect(() => {
		fetch(movieUrl)
			.then((res) => res.json())
			.then((data) => {
				setMovie(data)
			})
			.catch((err) => console.log(err))
	}, [success])

	//const movie = movies.find((movie) => movie.id === parseInt(id))

	//const movieReviews = reviews.filter((review) => review.movie_id === parseInt(id))

	return (
		<>
			<ReviewFormCard movie_id={id} handleSuccess={setSuccess} />
			<section className='container my-5'>
				<h3 className='text-white '>Movie</h3>
				<div className='card shadow-sm mb-4'>
					<div className='card-body'>
						<h2 className='card-title'>{movie?.title}</h2>
						<p className='card-text'>
							<span className='fw-bold'>Abstract: </span>
							{movie?.abstract}
						</p>
						<p className='card-text'>
							<span className='fw-bold'>Director: </span>
							{movie?.director}
						</p>
						<p className='card-text'>
							<span className='fw-bold'>Release Year: </span>
							{movie?.release_year}
						</p>
						<p className='card-text'>
							<span className='fw-bold'>Genre: </span>
							{movie?.genre}
						</p>
					</div>
				</div>

				<h3 className='mb-2 text-white'>Reviews</h3>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4'>
					{movie?.reviews.map((review) => (
						<div className='col' key={review.id}>
							<ReviewCard review={review} />
						</div>
					))}
				</div>
				<Link className='btn btn-dark mt-3' to='/'>
					Back to Home
				</Link>
			</section>
		</>
	)
}
