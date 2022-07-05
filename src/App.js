import './App.css';
import ProductCard from './Components/ProductCard/ProductCard';
import Cart from './Components/Cart/Sidebar';

function App() {

  const products = [
    {
      id: 16878,
      name: 'Headphone',
      src: "https://i.ibb.co/5GhqxVf/headphone.png",
      price: 89,
      alt: 'Headphone',
      plural: 'Headphones'
    },
    {
      id: 278798,
      name: 'TV',
      src: 'https://i.ibb.co/XjB6Z6H/tv.png',
      price: 699,
      alt: 'TV',
      plural: 'TVs'
    },
    {
      id: 6673,
      name: 'Xbox',
      src: 'https://i.ibb.co/hMxnFYd/xbox.png',
      price: 499,
      alt: 'xbox',
      plural: 'Xboxes'
    }
  ]
  return (
    <div className="main-container">
      <Cart />
      <div className="products-container">
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              src={product.src}
              alt={product.alt}
              plural={product.plural}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;

