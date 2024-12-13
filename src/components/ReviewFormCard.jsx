import { useState } from 'react'

export default function ReviewFormCard({ movie_id }) {
	const [name, setName] = useState('')
	const [text, setText] = useState('')
	const [vote, setVote] = useState(0)

	function handleSubmit(e) {
		e.preventDefault()
		console.log(name, text, vote)

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
			})
			.catch((err) => console.log(err))
	}
	return (
		<div className='container'>
			<div className='card shadow-sm mb-4'>
				<div className='card-body'>
					<h2 className='card-title'>Leave a Review</h2>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<div className='form-group'>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									id='name'
									className='form-control'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='text'>Review</label>
								<textarea id='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
							</div>
							<div className='form-group'>
								<label htmlFor='vote'>Rating</label>
								<input
									type='number'
									id='vote'
									className='form-control'
									value={vote}
									onChange={(e) => setVote(e.target.value)}
								/>
							</div>
							<div className='card-footer'>
								<button className='btn btn-primary' type='submit'>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
