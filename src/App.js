import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
// import Tables from 'pages/Tables';
import Tables from 'pages/VendorList';
// import Tables from 'pages/SngleVendor';
// import Tables from 'components/filterTable';
// import Tables from 'pages/vendorRequestList';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import RegisterVendor from 'pages/vendor/register/index';

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
                        <Route exact path="/vendor/register" component={RegisterVendor} />
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
