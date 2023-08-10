import { Route, Routes } from 'react-router-dom';
import './App.css';
import Site from './Containers/Site/Site';
import AddProductProvider from './Context/AddProducts';

function App() {
  return (
    <div className="App">
      <AddProductProvider>
        <Routes>
          <Route path="/" element={<Site />} />
        </Routes>
      </AddProductProvider>
    </div>
  );
}

export default App;
