import { useState, useEffect } from 'react'
import customFetch from '../axios'

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchData(url)
	}, [url])

	const fetchData = async (url) => {
		setData(null)
		setLoading(true)
		setError(null)
		try {
			const response = await customFetch.get(`/${url}`)
			setLoading(false)
			setData(response)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			setError(error.message)
			console.log(error)
		}
	}

	return [data, loading, error]
}
export default useFetch
