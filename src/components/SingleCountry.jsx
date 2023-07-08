import { useNavigate } from 'react-router-dom'

/* eslint-disable react/prop-types */
const SingleCountry = (props) => {
	const navigate = useNavigate()

	const { cca2, img, name, population, region, capital } = props
	const handleClick = () => {
		navigate(`/${name.toLowerCase()}`)
	}
	return (
		<div
			className='mt-10 card-container'
			key={cca2}
			onClick={handleClick}
		>
			<section className='card my-6'>
				<img src={img} alt={name + ' flag'} loading='lazy' width='300' height='180'/>
				<div className='container card-info py-10 mb-10'>
					<h3 className='my-5'>{name}</h3>
					<b>Population: </b>
					{new Intl.NumberFormat('en-US').format(population)}
					<br />
					<b>Region: </b> {region}
					<br />
					<b>Capital: </b>{' '}
					{!capital
						? 'N/A'
						: new Intl.ListFormat('en-US', {
								style: 'narrow',
								separator: ',',  }).format(capital)}
				</div>
			</section>
		</div>
	)
}
export default SingleCountry
