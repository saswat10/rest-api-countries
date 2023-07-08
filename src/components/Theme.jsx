import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { RxHalf2 } from 'react-icons/rx'

const Theme = () => {
	const local = localStorage.getItem('theme')
	const [theme, setTheme] = useState(local?local:'auto')
	useEffect(() => {
		document.documentElement.classList = theme
	}, [theme])

	function handleClick() {
		if (theme === 'auto') {
			localStorage.setItem('theme', 'light')
			setTheme('light')
		}
		if (theme === 'light') {
			localStorage.setItem('theme', 'dark')
			setTheme('dark')
		}
		if (theme === 'dark') {
			localStorage.setItem('theme', 'auto')
			setTheme('auto')
		}
	}

	return (
		<div className='capitalize bold' onClick={handleClick} style={{cursor:'pointer'}}>
			{theme === 'auto' ? (
				<RxHalf2 className='d-inline mx-5'/>
			) : theme === 'dark' ? (
				<HiMoon className='d-inline mx-5'/>
			) : (
				<HiSun className='d-inline mx-5'/>
			)}
			<span className='mt-10 pt-10'>{theme}</span>
		</div>
	)
}
export default Theme
