const fetchData = async (params = '') => {
  const baseURL = `https://api.nasa.gov/planetary/apod?${params}api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  try {
    const response = await fetch(baseURL)
    if (!response.ok) throw new Error()
    const data = await response.json()
    return {
      data: data,
      error: null
    }
  } catch (error) {
    return {
      data: [],
      error: error.stack
    }
  }
}

export default fetchData
