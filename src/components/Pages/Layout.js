import {NavLink, Outlet} from "react-router-dom"
import './Layout.style.css'

const Layout = () => {
    return (
        <>
        <header>
        <NavLink  to='/' >Home</NavLink>
        <NavLink  to='/chats' style={{ margin: '0 15px'}}>Chats</NavLink>
        <NavLink  to='/profile'>Profile</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
          This is footer
      </footer>
      </>
    );
};

export default Layout;



