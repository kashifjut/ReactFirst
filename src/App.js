import Cards from "./components/Cards";
import Navbar from "./components/Navbar";  
import Prenav from "./components/Prenav";
import Counter from "./components/Counter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Effect from "./components/Effect";

function App() {
  return (
    <>
    <Prenav/> 
    <Counter/>
    <Navbar/>
    <Cards/>
    <Effect/>
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
