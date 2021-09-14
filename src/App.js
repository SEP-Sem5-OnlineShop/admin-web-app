import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
// import Tables from 'pages/Tables';


import Tables from 'pages/TableFilter';
// import Tables from 'pages/VendorList';
import singleVendor from 'pages/SngleVendor';
import requestList from 'pages/vendorRequestList';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <div style={{minHeight: 'calc(100vh - 169px)'}}>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/tables" component={Tables} />
                        <Route exact path="/singleVendor" component={singleVendor} />
                        <Route exact path="/requestList" component={requestList} />
                        <Route exact path="/maps" component={Maps} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
