import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<header className='bg-dark p-3 text-white  '>
			<nav>
				<NavLink to='/' className='text-white text-decoration-none'>
					<h1>
						<strong>Home</strong>
					</h1>
				</NavLink>
			</nav>
		</header>
	)
}
