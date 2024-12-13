import { useState } from 'react'

export default function ReviewFormCard({ movie_id }) {
	const [name, setName] = useState('')
	const [text, setText] = useState('')
	const [vote, setVote] = useState(0)

	function handleSubmit(e) {
		e.preventDefault()
		if (vote === 0) {
			alert('Per favore, seleziona un voto prima di inviare la recensione')
			return
		}

		const formData = {
			name,
			text,
			vote
		}

		const base_movie_review_url = `http://localhost:3000/movies/${movie_id}/review`

		fetch(base_movie_review_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				alert('Recensione inviata con successo')
			})
			.catch((err) => console.log(err))
		setName('')
		setText('')
		setVote(0)
	}
	return (
		<div className='container'>
			<div className='card shadow-sm mb-4'>
				<div className='card-body'>
					<h2 className='card-title'>Leave a Review</h2>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								className='form-control'
								value={name}
								required
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='text'>Review</label>
							<textarea
								id='text'
								className='form-control'
								required
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='vote'>Vote</label>
							<div className='star-rating stars-gold'>
								{[1, 2, 3, 4, 5].map((star) => (
									<span key={star} onClick={() => setVote(star)} style={{ cursor: 'pointer', fontSize: '24px' }}>
										{star <= vote ? '★' : '☆'}
									</span>
								))}
								<button className='btn btn-secondary ms-2 btn-sm' onClick={() => setVote(0)}>
									Reset
								</button>
							</div>
						</div>
						<div className='card-footer'>
							<button className='btn btn-primary' type='submit'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
