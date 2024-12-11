import { useParams } from 'react-router-dom'
import reviews from '../db/reviews'
import ReviewCard from '../components/ReviewCard'
export default function MovieDetail() {
	const { id } = useParams()
	return (
		<section className='container'>
			<div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4'>
				<div className='col'>
					{reviews.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
			</div>
		</section>
	)
}
