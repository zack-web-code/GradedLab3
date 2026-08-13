import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')

        if (!response.ok) {
          throw new Error('Failed to fetch products.')
        }

        const data = await response.json()

        setProducts(data)
        setFilteredProducts(data)
        setLoading(false)
      }
      catch {
        setError(true)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  function handleSearchChange(event) {
    const query = event.target.value

    setSearchQuery(query)

    const filtered = products.filter((products) => products.title.toLowerCase().includes(query.toLowerCase()))

    setFilteredProducts(filtered)
  }

  return (
    <main>
      <h1>Product Catalog</h1>

      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange}/>

      {loading && <p>Loading...</p>}
      {error && <p>Failed to load products.</p>}
      {!loading && !error && filteredProducts.length === 0 && (<p>No products found.</p>)}
      {!loading && !error && filteredProducts.length > 0 && (<ProductList products={filteredProducts} />)}
    </main>
  )
}

export default App