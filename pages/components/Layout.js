import NavBar from './NavBar';
import Gallary from './Gallary';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Gallary />
      <main>{children}</main>
      <Footer />
    </>
  );
}
