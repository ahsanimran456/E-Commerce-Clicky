import { Route, Routes } from 'react-router-dom';
import './App.css';
import Site from './Containers/Site/Site';
import AddProductProvider from './Context/AddProducts';
import SelectedView from './Containers/SelectedProduct/SelectedProduct';
import ShowProduct from './Containers/ShowProduct/ShowProducts';

function App() {
  return (
    <div className="App">
      <AddProductProvider>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route path={`/product/:view/:id`} element={<SelectedView />} />
          <Route path={`/:items`} element={<ShowProduct />} />
        </Routes>
      </AddProductProvider>
    </div>
  );
}

export default App;
