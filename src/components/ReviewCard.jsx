export default function ReviewCard({ review }) {
	return (
		<div className='card shadow-sm'>
			<div className='card-body'>
				<h3 className='card-title'> {review.name}</h3>
				<p className='card-text'>
					<span className='fw-bold'>Review: </span> {review.text}
				</p>
				<p className='card-text'>
					<span className='fw-bold'>Vote: </span> {review.vote}/5
				</p>
			</div>
		</div>
	)
}
