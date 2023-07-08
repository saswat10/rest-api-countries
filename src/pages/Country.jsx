import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../utils/hooks/useFetch'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Loading from '../components/Loading'

const Country = () => {
	const { country } = useParams()
	const [data, loading, error] = useFetch('name/' + country + '?fullText=true')
	const navigate = useNavigate()

	const countryCodes = JSON.parse(localStorage.getItem('countryCodes'))

	let content
	if (loading) {
		content = <Loading/>
	} else if (data) {
		let country = data.data[0]
		let nativeName = []
		console.log(nativeName)
		for (const keys in country.name.nativeName) {
			nativeName.push(country.name.nativeName[keys].official)
			console.log(nativeName)
			console.log(country.name.nativeName[keys].official)
		}
		let currency = !country.currencies
			? 'N/A'
			: Object.values(country.currencies).map((cu) => {
					return cu.name
			  })

		console.log(currency)
		content = (
			<section className='grid country-page'>
				<img src={country?.flags?.svg} alt={'Flag of '+ country?.name?.common} />
				<article className='info'>
					<h2>{country?.name?.common}</h2>
					<div className='grid-system grid'>
						<div className='grid-1'>
							<p className='py-2'>
								<b>Native Name(s): </b>
								{new Intl.ListFormat('en-US', {
									style: 'short',
									separator: ',',
								}).format(nativeName)}
							</p>
							<p className='py-2'>
								<b>Population: </b>
								{new Intl.NumberFormat('en-US').format(country?.population)}
							</p>
							<p className='py-2'>
								<b>Region: </b>
								{country?.region}
							</p>
							<p className='py-2'>
								<b>Subregion: </b>
								{country?.subregion}
							</p>
							<p className='py-2 mb-10'>
								<b>Capital: </b>
								{country?.capital}
							</p>
						</div>
						<div className='grid-2'>
							<p className='py-2'>
								<b>Top Level Domain: </b>
								{country?.tld}
							</p>
							<p className='py-2'>
								<b>Currencies: </b>{' '}
								{new Intl.ListFormat('en-US', {
									style: 'short',
									separator: ',',
								}).format(currency)}
							</p>
							<p className='py-2 mb-10'>
								<b>Languages: </b>
								{!country?.languages
									? 'N/A'
									: new Intl.ListFormat('en-US', {
											style: 'narrow',
											separator: ',',
									  }).format(Object.values(country?.languages))}
							</p>
						</div>
						<div className='grid-3'>
							<div className=' flex mt-3 py-2 ' style={{ flexWrap: 'wrap' }}>
								<b>Border Countries: </b>
								{!country.borders
									? 'N/A'
									: country?.borders?.map((border) => {
											for (let i = 0; i < countryCodes.length; i++) {
												if (Object.keys(countryCodes[i])[0] === border)
													return (
														<Link
															className='country py-1 px-10'
															key={border}
															to={`/${Object.values(countryCodes[i])}`}
														>
															{Object.values(countryCodes[i])}
														</Link>
													)
											}
									  })}
							</div>
						</div>
					</div>
				</article>
			</section>
		)
	} else if (error) {
		content = <p>{error}</p>
	}

	return (
		<div className='single-page'>
			<button
				type='button'
				value='back'
				className='px-8 py-4 '
				onClick={() => navigate(-1)}
				>
				<FiArrowLeft className='d-inline mr-10 mt-1' />
				Back
			</button>
				{content}
		</div>
	)
}
export default Country
