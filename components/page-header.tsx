import { useRouter } from 'next/router';
import Link from 'next/link'
import Navbar from './navbar';

const PageHeader = () => {
  const { pathname } = useRouter();
  return (
    // <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    <section
      className='flex-col md:flex-row'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 64,
        marginBottom: 64,
      }}
    >
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/film">
          Charlotte Claytor
        </Link>
      </h1>
      <Navbar />
    </section>
  )
}

export default PageHeader;
