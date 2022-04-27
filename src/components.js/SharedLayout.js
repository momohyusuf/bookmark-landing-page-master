import { Link, Outlet } from 'react-router-dom';
import Navbar from './StyledNavbar';
import Footer from './footer';
export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
}
