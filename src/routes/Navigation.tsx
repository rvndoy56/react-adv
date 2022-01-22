import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg'




export const Navigation = () => {
    //Suspense permite mostrar un componente mientras se carga el otro
  return (
    <Suspense fallback={<span>Loading...</span>} >
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        {/* TODO: Crear navlink dinamicos */}
                            {routes.map(({to,name}) => (
                                <li key={to}>
                                    <NavLink to={to} className={ ({isActive})=> isActive ? 'nav-active' : '' }>{name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({to, path, Component}) => (
                            <Route key={to} path={path} element={<Component />} />
                        ))
                    }

                    {/* Esto se usa cuando se accede a una ruta desconocida */}
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  );
}

//Router Example React-Router-V5
    // <Router>

    //   <div className="main-layout">
    //     <nav>
    //         <img src={ logo } alt="React Logo" />
    //       <ul>
    //         <li>
    //           <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/about">
    //         <h1>About</h1>
    //       </Route>
    //       <Route path="/users">
    //         <h1>Users</h1>
    //       </Route>
    //       <Route path="/">
    //         <h1>Home</h1>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
