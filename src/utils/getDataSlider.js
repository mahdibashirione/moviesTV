import http from "../services/httpServices"

async function GET_DATA_SLIDER(url, setState, category) {
  try {
    const { data } = await http.Get(url)
    setState(data.filter(movie => movie.category === category && movie.slider === true).slice(0, 8))
  } catch (error) {
    console.log(error)
  }
}

export default GET_DATA_SLIDER;