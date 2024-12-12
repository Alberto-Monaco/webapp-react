import Stars from './Stars'
export default function ReviewCard({ review }) {
	return (
		<div className='card shadow my-4'>
			<div className='card-body'>
				<h3 className='card-title'> {review.name}</h3>
				<p className='card-text'>
					<span className='fw-bold'>Review: </span> {review.text}
				</p>
				<p className='card-text'>
					<span className='fw-bold'>Vote: </span>
					<span className='stars-gold '>
						<Stars vote={review.vote} />
					</span>
				</p>
			</div>
		</div>
	)
}
