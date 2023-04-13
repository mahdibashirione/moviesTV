import { useEffect, useState } from "react";
import http from "../services/httpServices";

let error = null;
let data = null;
let loading = false;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    http
      .Get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { error, data, loading };
};

export default useFetch;
