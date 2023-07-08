import { useState, useRef, useMemo } from 'react'
import useFetch from '../utils/hooks/useFetch'
import SingleCountry from '../components/SingleCountry'
import Loading from '../components/Loading'

const CountryList = () => {
	const [url, setUrl] = useState('all')
	const [data, loading, error] = useFetch(url)

	const ref = useRef(null)
	// ref.current?.children?.[1]?.classList?.add('new')
	// console.log(ref.current?.children?.[1]?.classList?.contains('new'))

	function handleClick() {
		if (ref.current?.children?.[1]?.classList?.contains('hide')) {
			ref.current?.children?.[1]?.classList?.remove('hide')
			ref.current?.children?.[1]?.classList?.add('show')
		} else if (ref.current?.children?.[1]?.classList?.contains('show')) {
			ref.current?.children?.[1]?.classList?.add('hide')
			ref.current?.children?.[1]?.classList?.remove('show')
		}
	}
	const [cont, setCont] = useState('')
	function getAttribute(event) {
		setCont(event.target.getAttribute('data-region'))
		setSearch('')
		if (event.target.getAttribute('data-region') === 'all')
			setUrl(event.target.getAttribute('data-region'))
		else setUrl('region/' + event.target.getAttribute('data-region'))
	}

	let content, cca2
	if (loading) {
		content = <Loading />
	} else if (data) {
		cca2 = data.data.map((country) => {
			return { [country.cca3]: `${country.name.common}` }
		})
		if (cca2.length >= 250)
			localStorage.setItem('countryCodes', JSON.stringify(cca2))
		content = data.data.map((country) => {
			return (
				<SingleCountry
					key={country.cca2}
					img={country.flags.png}
					name={country.name.common}
					population={country.population}
					region={country.region}
					capital={country?.capital}
				/>
			)
		})
	} else if (error) content = <p>{error}</p>

	const [search, setSearch] = useState('')
	return (
		<div className='container'>
			<div className='flex query'>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						setUrl(`name/${search}`)
						setCont('')
					}}
				>
					<input
						name='search'
						type='search'
						className='search'
						placeholder='Search for a country...'
						value={search}
						onChange={(e) => {
							if (!e.target.value) {
								setUrl('all')
							}
							setSearch(e.target.value)
						}}
					/>
				</form>
				<div className='dropdown capitalize' ref={ref} onClick={handleClick}>
					<div className='dropdown-menu'>{cont || 'Filter by Region'}</div>
					<div className='dropdown-option hide'>
						<li data-region='all' onClick={getAttribute}>
							All
						</li>
						<li data-region='america' onClick={getAttribute}>
							America
						</li>
						<li data-region='africa' onClick={getAttribute}>
							Africa
						</li>
						<li data-region='asia' onClick={getAttribute}>
							Asia
						</li>
						<li data-region='europe' onClick={getAttribute}>
							Europe
						</li>
						<li data-region='oceania' onClick={getAttribute}>
							Oceania
						</li>
					</div>
				</div>
			</div>
			<div className='list'>{content}</div>
		</div>
	)
}
export default CountryList
