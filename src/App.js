import Cards from "./components/Cards";
import Navbar from "./components/Navbar";  
import Prenav from "./components/Prenav";
import Counter from "./components/Counter";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Prenav/> 
    <Counter/>
    <Navbar/>
    <Cards/>
    <ToastContainer 
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />

    
    
    </>
  
  );
}

export default App;
