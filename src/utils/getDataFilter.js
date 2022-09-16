import http from "../services/httpServices"

async function GET_DATA_FILTER(url, setState, category) {
  try {
    const { data } = await http.Get(url)
    setState(data.filter(movie => movie.category === category).slice(0, 8))
  } catch (error) {
    console.log(error)
  }
}

export default GET_DATA_FILTER;