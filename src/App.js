import './App.css';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Header from './components/Header';
//import Counter from './components/Counter';
// import Coffee from './components/Coffee';
// import Tea from './components/Tea';
// import Pastries from './components/Pastries';
import Product from './components/product';
function App() {
  return (
    <div className="App">
    <Header />
    {/*<Counter />
     
    <Coffee />
    <Tea />
    <Pastries />
  */ }
    <Product />
    <Forms />
    <Footer />

    </div>
  );
}

export default App;
