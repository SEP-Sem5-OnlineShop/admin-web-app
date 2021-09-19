import React from 'react';



import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
// import Tables from 'pages/Tables';
// import Tables from 'components/Table'

import Tables from 'pages/VendorList/TableFilter';
// import Tables from 'pages/VendorList';
import singleVendor from 'pages/SingleVendor/SngleVendor';
import requestList from 'pages/vendorRequestList/RequestList';
// import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import RegisterVendor from 'pages/vendor/register/index';

// function App() {
//     return (
//         <>
//             <Sidebar />
//             <div className="md:ml-64">
//                 <div style={{minHeight: 'calc(100vh - 169px)'}}>
//                     <Switch>
//                         <Route exact path="/" component={Dashboard} />
//                         <Route exact path="/settings" component={Settings} />
//                         <Route exact path="/tables" component={Tables} />
//                         <Route exact path="/singleVendor" component={singleVendor} />
//                         <Route exact path="/requestList" component={requestList} />
//                         <Route exact path="/maps" component={Maps} />
//                         <Redirect from="*" to="/" />
//                     </Switch>
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default App;







// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={apiResponse:''};

//   }
//   callApi(){
//     fetch("http://localhost:9000/testApi")
//     .then(res =>res.text())
//     .then(res => this.setState({apiResponse:res}));
//   }

//   componentWillMount(){
//     this.callApi();
//   }


  function App() {
// render(){
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
        
      </header>
      

      <Sidebar />
             <div className="md:ml-64">
                 <div style={{minHeight: 'calc(100vh - 169px)'}}>
                     <Switch>
                         <Route exact path="/" component={Dashboard} />
                         <Route exact path="/settings" component={Settings} />
                         <Route exact path="/tables" component={Tables} />
                         <Route exact path="/singleVendor/:id" component={singleVendor} />
                         <Route exact path="/requestList" component={requestList} />
                         <Route exact path="/vendor/register/:id" component={RegisterVendor} />
                         {/* <Route exact path="/maps" component={Maps} /> */}
                        <Redirect from="*" to="/" />
                     </Switch>
                 </div>

                 {/* <p>{this.state.apiResponse}</p> */}
                 
                 <Footer />
             </div>




    </div>

    
  );
}
// }

export default App;
