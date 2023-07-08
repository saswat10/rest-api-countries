import { Outlet } from 'react-router-dom'
import Theme from '../components/Theme'

const SharedLayout = () => {
	return (
		<>
			<div className='header'>
				
					<h3 className='h3'>Where in the world?</h3>
					<Theme/>
				</div>
			<Outlet />
		</>
	)
}
export default SharedLayout
