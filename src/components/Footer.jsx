export default function Footer() {
	return (
		<footer className='bg-dark py-5 text-white'>
			<div className='container'>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 '>
					<div className='col'>
						<h1>Movie Footer</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
					</div>
					<div className='col'>
						<h1> Links </h1>
						<ul className='list-unstyled'>
							<li>
								<a href='#'>Link 1</a>
							</li>
							<li>
								<a href='#'>Link 2</a>
							</li>
							<li>
								<a href='#'>Link 3</a>
							</li>
							<li>
								<a href='#'>Link 4</a>
							</li>
						</ul>
					</div>
					<div className='col'>
						<h1>Legal</h1>
						<ul className='list-unstyled'>
							<li>
								<a href='#'>Link 1</a>
							</li>
							<li>
								<a href='#'>Link 2</a>
							</li>
							<li>
								<a href='#'>Link 3</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
