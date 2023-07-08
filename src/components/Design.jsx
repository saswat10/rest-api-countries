import { FiArrowLeft } from 'react-icons/fi'
import { HiSun, HiMoon } from 'react-icons/hi'
import { RxHalf2 } from 'react-icons/rx'
import useFetch from '../utils/hooks/useFetch'
import { useRef, useState } from 'react'
import Loading from './Loading'

const Design = () => {
	const [url, setUrl] = useState('name/in')

	const [data, loading, error] = useFetch(url)
	console.log(data, loading, error)

	let content
	if (loading) content = <p>Loading....</p>
	if (data) content = <p>{data.data.length}</p>
	if (error) content = <p>{error}</p>

	// const dropdown = document.querySelector('.dropdown')
	// addEventListener('click',function(){
	// 	console.log(dropdown.classList.contains('.hide'))
	// })
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

	function getAttribute(event) {
		console.log(event.target.getAttribute('data-region'))
	}
	return (
		<div>
			{content}
			<Loading/>
			Design
			{/* Button Element */}
			<button
				type='button'
				value='back'
				className='px-8 py-4 '
				onClick={() => {
					setUrl('name/India')
				}}
			>
				<FiArrowLeft className='d-inline mr-10 mt-1' />
				Back
			</button>
			{/* Country name */}
			<div className=' flex mt-10 ' style={{ flexWrap: 'wrap' }}>
				<span className='my-2'>Border Countries: </span>
				<div className='country py-1 px-10'>France</div>
				<div className='country py-1 px-10'>Germany</div>
				<div className='country py-1 px-10'>Spain</div>
				<div className='country py-1 px-10'>France</div>
				<div className='country py-1 px-10'>Germany</div>
				<div className='country py-1 px-10'>Spain</div>
			</div>
			{/* Theme Buttons */}
			<button type='button' value='back' className='px-8 py-4 mx-2 my-2'>
				<HiSun className='d-inline mr-10 mt-1' />
				Light
			</button>
			<button type='button' value='back' className='px-8 py-4 mx-2 my-2'>
				<HiMoon className='d-inline mr-10 mt-1' />
				Dark
			</button>
			<button type='button' value='back' className='px-8 py-4 mx-2 my-2'>
				<RxHalf2 className='d-inline mr-10 mt-1' />
				Auto
			</button>
			<input
				type='text'
				className='search'
				placeholder='Search for a country...'
			/>
			<div className=' grid mt-10 card-container'>
				<section className='card my-6'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
						alt='Brazil Flag'
					/>
					<div className='container card-info py-10 mb-10'>
						<h2 className='my-5'>Brazil</h2>
						<b>Population:</b> 124191
						<br />
						<b>Region:</b> something
						<br />
						<b>Capital:</b> something
					</div>
				</section>
				<section className='card my-6'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
						alt='Brazil Flag'
					/>
					<div className='container card-info py-10 mb-10'>
						<h2 className='my-5'>Brazil</h2>
						<b>Population:</b> 124191
						<br />
						<b>Region:</b> something
						<br />
						<b>Capital:</b> something
					</div>
				</section>
				<section className='card my-6'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
						alt='Brazil Flag'
					/>
					<div className='container card-info py-10 mb-10'>
						<h2 className='my-5'>Brazil</h2>
						<b>Population:</b> 124191
						<br />
						<b>Region:</b> something
						<br />
						<b>Capital:</b> something
					</div>
				</section>
				<section className='card my-6'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
						alt='Brazil Flag'
					/>
					<div className='container card-info py-10 mb-10'>
						<h2 className='my-5'>Brazil</h2>
						<b>Population:</b> 124191
						<br />
						<b>Region:</b> something
						<br />
						<b>Capital:</b> something
					</div>
				</section>
				<section className='card my-6'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
						alt='Brazil Flag'
					/>
					<div className='container card-info py-10 mb-10'>
						<h2 className='my-5'>Brazil</h2>
						<b>Population:</b> 124191
						<br />
						<b>Region:</b> something
						<br />
						<b>Capital:</b> something
					</div>
				</section>
				<section className='card my-6'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
						alt='Brazil Flag'
					/>
					<div className='container card-info py-10 mb-10'>
						<h2 className='my-5'>Brazil</h2>
						<b>Population:</b> 124191
						<br />
						<b>Region:</b> something
						<br />
						<b>Capital:</b> something
					</div>
				</section>
				<section className='card my-6'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
						alt='Brazil Flag'
					/>
					<div className='container card-info py-10 mb-10'>
						<h2 className='my-5'>Brazil</h2>
						<b>Population:</b> 124191
						<br />
						<b>Region:</b> something
						<br />
						<b>Capital:</b> something
					</div>
				</section>
			</div>
			{/* Loader component */}
			<section className='loader'></section>
		</div>
	)
}
export default Design
