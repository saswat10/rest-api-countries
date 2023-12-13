## REST Countries API with color theme switcher

This is a solution to challenge from [Frontend Mentor](https://www.frontendmentor.io/).
Challenge Link 👉[Here](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub)👈

Link to the API 👉[Here](https://restcountries.com/)👈

## Overview

### The Challenge

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### My Process

Setting up the **React** environment using **Vite**, adding **SCSS** as Dev Dependencies. Other libraries which acted as **Helper Libraries**

- **Axios** - useful for making requests as it simplifies the native Fetch API

```bash
npm create vite@latest my-react-app -- --template react
npm install

# installing axios
npm i axios

#installing sass as dev dependencies
npm add -D sass
```

- Fetching is done using `useFetch()` custom hook which is a combination of `useEffect()`  and `useState()` hook
  ```js
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
  ``` 
- Theming is done with the help of local storage and `useState()`. A theme variable is set on the local storage and the theme is changed with the help of `useEffect()`.

