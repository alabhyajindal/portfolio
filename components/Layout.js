import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col '>
      <Header />
      <main className='grow mx-4 my-4'>{children}</main>
      <Footer />
    </div>
  );
}
