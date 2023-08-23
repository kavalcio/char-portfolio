import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link'

const tabs = [
  {
    name: 'Film/TV',
    url: '/film',
  },
  {
    name: 'Conceptual Designs',
    url: '/designs',
  },
  {
    name: 'Sewing',
    url: '/sewing',
  },
  {
    name: 'Resume',
    url: '/resume',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

const Intro = () => {
  const { pathname } = useRouter();
  return (
    // <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    <section style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 64,
      marginBottom: 64,
    }}>
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        Charlotte Claytor
      </h1>
      <section style={{
        display: 'flex',
        
      }}>
        {tabs.map((tab, index) => (
          <Link
            key={index}
            as={tab.url}
            href={tab.url}
            aria-label={tab.name}
            className={clsx('navigation-tab', pathname === tab.url && 'underlined')}
          >
            {tab.name}
          </Link>
        ))}
      </section>
    </section>
  )
}

export default Intro
