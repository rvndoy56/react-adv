

import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React logo" />
                <ul>
                    <li>
                        <NavLink to="/lazy1" className={ ({isActive})=> isActive ? 'nav-active' : '' }>Lazy1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy2" className={ ({isActive})=> isActive ? 'nav-active' : '' }>Lazy2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy3" className={ ({isActive})=> isActive ? 'nav-active' : '' }>Lazy3</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="lazy1" element={<LazyPage1 />} />
                <Route path="lazy2" element={<LazyPage2 />} />
                <Route path="lazy3"  element={<LazyPage3 />} />
                {/* Esto se usa cuando se accede a una ruta desconocida */}
                <Route path="/*" element={<Navigate to="/lazy1" replace />} />
            </Routes>
        </div>
    </BrowserRouter>
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