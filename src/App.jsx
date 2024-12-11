import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HomeMovie from './pages/HomeMovie'
import MovieDetail from './pages/MovieDetail'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<HomeMovie />} />
					<Route path='/movies/:id' element={<MovieDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
