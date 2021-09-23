import React from 'react';

import MainRouter from "./router";
import { Provider } from "react-redux";
import store from "./store/index";

import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
// import Tables from 'pages/Tables';
// import Tables from 'components/Table'

import Tables from 'pages/VendorList/TableFilter';
// import Tables from 'pages/VendorList';
import singleVendor from 'pages/SingleVendor/SngleVendor';
import profile from 'pages/myProfile/profile';

import singleProduct from 'pages/singleProduct/SngleVendor';

import requestList from 'pages/vendorRequestList/RequestList';
// import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import RegisterVendor from 'pages/vendor/register/index';


  function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
     
        
    //   </header>
      

    //   <Sidebar />
    //          <div className="md:ml-64">
    //              <div style={{minHeight: 'calc(100vh - 169px)'}}>
    //                  <Switch>
    //                      <Route exact path="/" component={Dashboard} />
    //                      <Route exact path="/settings" component={Settings} />
    //                      <Route exact path="/tables" component={Tables} />
    //                      <Route exact path="/singleVendor/:id" component={singleVendor} />

    //                      <Route exact path="/singleProduct/:id" component={singleProduct} />

    //                      <Route exact path="/requestList" component={requestList} />
    //                      <Route exact path="/vendor/register/:id" component={RegisterVendor} />
    //                      <Route exact path="/profile" component={profile} />

    //                     <Redirect from="*" to="/" />
    //                  </Switch>
    //              </div>
                 
    //              <Footer />
    //          </div>




    // </div>
    <div className="App">
          <Provider store={store}>
              <MainRouter />
          </Provider>
      </div>

    
  );
}
// }

export default App;
