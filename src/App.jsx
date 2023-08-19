import Nav from '@/components/Nav.jsx';
import PopularProducts from '@/components/PopularProducts';
import SuperQuality from '@/components/SuperQuality';
import Services from '@/components/Services';
import SpecialOffer from '@/components/SpecialOffer';
import CustomerReviews from '@/components/CustomerReviews';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

function App() {
  return (
    <main className='relative'>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Nav />
      </section>

      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section
        className='padding-x
ру-10'>
        <Services />
      </section>
      <section className='padding '>
        <SpecialOffer />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding-x padding-t pb-8 bg-black'>
        <Footer />
      </section>
    </main>
  );
}

export default App;
