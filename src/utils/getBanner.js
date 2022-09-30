import http from "../services/httpServices";

async function GET_BANNER(url, setState) {
  try {
    const { data } = await http.Get(url)
    setState(data.filter(movie => movie.coming === true).slice(0, 6))
  } catch (error) {
    console.log(error)
  }
}

export default GET_BANNER;