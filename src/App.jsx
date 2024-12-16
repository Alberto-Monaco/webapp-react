import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HomeMovie from './pages/HomeMovie'
import MovieDetail from './pages/MovieDetail'
import GlobalContext from './contexts/GlobalContext'
import { useState } from 'react'
function App() {
	const [loading, setLoading] = useState(false)
	const values = { loading, setLoading }
	return (
		<GlobalContext.Provider value={values}>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<HomeMovie />} />
						<Route path='/movies/:id' element={<MovieDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</GlobalContext.Provider>
	)
}

export default App
