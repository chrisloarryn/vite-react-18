import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const renderRows = (products: any) => (<>
      {products.map((product: any) => (
          <tr key={product.id}>
            <td>{product.brand}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.calculatedPrice}</td>
            <td>{`${product.percentage}%`}</td>
            <td>
              <iframe src={`http://${product.image}`} width="80" height="80"> </iframe>
            </td>
          </tr>
        ))}
  </>)
  
  useEffect(() => {
    fetch('http://100.25.149.108:3000/products?searchText=asdsa')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }, [])

  return (
    <>
      <h1>lista de productos</h1>

      <div className="App">
      <table style={{
        width: '100%',
        height: '100%',
        borderCollapse: 'collapse',
        borderSpacing: '0',
        border: '1px solid black',
      }}>
        <thead>
          <th>brand</th>
          <th>description</th>
          <th>price</th>
          <th>calculated</th>
          <th>percentage</th>
          <th>image</th>
        </thead>
          <tbody>
          {renderRows(products)}
        </tbody>
      </table>
    </div>
      
    </>
  )
}

export default App
