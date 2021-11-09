import React from 'react';

import { Provider } from "react-redux";
import store from "./store/index";
import MainRouter from 'router/index';


// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Import Swiper styles
// import 'swiper/swiper-bundle.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { ToastContainer } from "react-toastify"

  function App() {

  return (
    
    <div className="App">
      
          

        <Provider store={store}>
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
                />
              <MainRouter />
          </Provider>
      </div>

    
  );
}
// }

export default App;
