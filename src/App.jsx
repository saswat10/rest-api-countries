import Design from './components/design'
import { Routes, Route } from 'react-router-dom'
import { SharedLayout, Country, CountryList } from './pages'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<CountryList />} />
					<Route path='/design' element={<Design />} />
					<Route path='/:country' element={<Country />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
