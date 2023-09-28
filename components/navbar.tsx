import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link'

const tabs = [
  {
    name: 'Film & TV',
    url: '/film',
  },
  // {
  //   name: 'Conceptual Designs',
  //   url: '/designs',
  // },
  // {
  //   name: 'Sewing',
  //   url: '/sewing',
  // },
  // {
  //   name: 'Resume',
  //   url: '/resume',
  // },
  {
    name: 'Contact',
    url: '/contact',
  },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    // todo: fix on mobile screens
    <section
      className='pt-8 pb-8 md:pt-0 md:pb-0'
      style={{
        display: 'flex',
        justifyContent: 'center',
        // width: 'fit-content',
        overflow: 'hidden',
        // overflowX: 'scroll',
        // marginTop: 32,
      }}
    >
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
  );
}

export default Navbar;
