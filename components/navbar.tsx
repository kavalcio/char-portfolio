import { useRouter } from 'next/router';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link'

import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!isMobile ? (
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
      ) : (
        <>
          <IconButton
            aria-label="open-menu"
            style={{
              margin: 'auto',
              width: 'fit-content',
              padding: 7,
              marginTop: 20,
            }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon
              style={{
                color: 'black',
                fontSize: 40,
              }}
            />
          </IconButton>
          <Drawer
            // anchor={'top'}
            anchor={'left'}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            // style={{
            //   background: 'teal',
            // }}
            PaperProps={{
              style: {
                // background: '#f5f5f5',
                minWidth: 300,
                minHeight: '60%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Link
                key={index}
                as={tab.url}
                href={tab.url}
                aria-label={tab.name}
                onClick={() => setDrawerOpen(false)}
                className='navigation-tab'
                style={{
                  // marginBottom: 10,
                  width: '100%',
                  textDecoration: pathname === tab.url ? 'underline' : 'none',
                  padding: 20,
                  fontSize: 25,
                }}
              >
                {tab.name}
              </Link>
            ))}
          </Drawer>
        </>
      )}
    </>
  );
}

export default Navbar;
