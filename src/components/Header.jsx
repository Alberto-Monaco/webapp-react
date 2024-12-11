import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<header className='bg-dark p-3 text-white  '>
			<nav>
				<NavLink to='/' className='text-white text-decoration-none'>
					<strong>Home</strong>
				</NavLink>
			</nav>
		</header>
	)
}
