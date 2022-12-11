import React from 'react';
//import {Switch, Route, Redirect} from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../assets/admin/js/scripts';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Form from '../Form';



const Home = () => {

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                    {/* <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route 
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                            <Redirect  to="/admin/dashboard" />
                        </Switch> */}
                            <div className="wrapper">
                              <h3>TODO_LIST</h3>
                              <div className="form-and-todo-box">
                                <Form/>
                              </div>
                            </div>

                    </main>

                    <Footer />
                </div>

            </div>
        </div>
    );

}

export default Home;
