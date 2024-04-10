import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contentlayout from './shared/layout-components/layout/content-layout';

import Login from './login';




// ecommerce
import AddProduct from './components/ecommerce/add-product';
import DashboardE from './components/ecommerce/dashboard';
import Orders from './components/ecommerce/orders';





// authentication
// import ForgotPassword from './components/authentication/forgot-password';
// import ResetPassword from './components/authentication/reset-password';
// import Signin from './components/authentication/signin';
// import Signup from './components/authentication/signup';
// import UnderConstruction from './components/authentication/under-construction';
// import NotFound from './components/404';


function App() {
    return (
        <Fragment>
            <Contentlayout>
                <Routes>
                    <Route path="/" element={<Login />} />


                    {/* ecommerce */}
                    <Route path="/components/ecommerce/add-product" element={<AddProduct />} />
                    <Route path="/components/dashboard/dashboard" element={<DashboardE />} />
                    <Route path="/components/ecommerce/orders" element={<Orders />} />


                    {/* authentication */}
                    {/* <Route path="/components/authentication/forgot-password" element={<ForgotPassword />} />
                    <Route path="/components/authentication/reset-password" element={<ResetPassword />} />
                    <Route path="/components/authentication/signin" element={<Signin />} />
                    <Route path="/components/authentication/signup" element={<Signup />} />
                    <Route path="/components/authentication/under-construction" element={<UnderConstruction />} />
                    <Route component={<NotFound />} /> */}

                </Routes>
            </Contentlayout>
        </Fragment >
    );
}

export default App;
