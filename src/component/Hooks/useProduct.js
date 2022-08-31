import { useEffect, useState } from "react"

const useProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://desolate-escarpment-09661.herokuapp.com/services`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  return [products, setProducts]
}
export default useProduct; 