import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from './cartContext'
import './Home.css'
import Shimmer from '../components/Shimmer'


function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToCart } = useContext(CartContext)

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500) 

    return () => clearTimeout(timer)
  }, [search])

  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products
`
        )
        const data = await res.json()

    
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )

        setProducts(filtered)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [debouncedSearch])
  

  return (
      <div className="home-container">

  <h2 className="home-title">🛍️ Explore Products</h2>

  <input
    className="search-input"
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {loading && <Shimmer />}

  <div className="product-grid">
    {!loading && products.map((item) => (
      <div className="product-card" key={item.id}>
        <img src={item.image} alt={item.title} />

        <h4>{item.title}</h4>
        <p className="price">${item.price}</p>

        <button onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>

  
</div>
  )
}

export default Home