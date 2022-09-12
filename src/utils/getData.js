import http from "../services/httpServices"

async function GET_DATA(url, setState) {
  try {
    const { data } = await http.Get(url)
    setState(data)
  } catch (error) {
    console.log(error)
  }
}

export default GET_DATA;