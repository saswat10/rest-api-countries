import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/*' element={<App />} />
		</Routes>
	</BrowserRouter>
)
