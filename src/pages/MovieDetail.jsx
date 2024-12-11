import { useParams } from 'react-router-dom'
import reviews from '../db/reviews'

export default function MovieDetail() {
	const { id } = useParams()
	return (
		<section className='container'>
			{reviews.map((review) => (
				<ReviewCard key={review.id} review={review} />
			))}
		</section>
	)
}
