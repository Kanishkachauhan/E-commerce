import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from './cartContext'


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
      <div style={{ padding: '20px' }}>
      
      <h2>Home</h2>

      
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

     
      {loading && <p>Loading...</p>}

     
      {!loading && products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #5676bf', margin: '10px', padding: '10px' }}>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
         <button onClick={() => addToCart(item)}>
  Add to Cart
</button>
        </div>
      ))}

    </div>
  )
}

export default Home