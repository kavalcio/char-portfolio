import Container from '../components/container'
import HeroPost from '../components/hero-post'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

import { ImageList, ImageListItem } from '@mui/material';

type Props = {
  allPosts: Post[]
}

export default function Sewing() {
  return (
    <>
      <Layout>
        <Head>
          <title>Charlotte Claytor</title>
        </Head>
        <Container>
          <PageHeader />

          {/* <ImageList sx={{ width: 700, height: 450 }} cols={3} rowHeight={164}> */}
          <ImageList cols={3}>
            {/* {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))} */}
            <ImageListItem key={1}>
              <img
                srcSet={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format`}
                alt={'assets/images/anne/anne-1.jpg'}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={2}>
              <img
                srcSet={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format`}
                alt={'assets/images/anne/anne-1.jpg'}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={3}>
              <img
                srcSet={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format`}
                alt={'assets/images/anne/anne-1.jpg'}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={4}>
              <img
                srcSet={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format`}
                alt={'assets/images/anne/anne-1.jpg'}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={5}>
              <img
                srcSet={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format`}
                alt={'assets/images/anne/anne-1.jpg'}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={6}>
              <img
                srcSet={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format`}
                alt={'assets/images/anne/anne-1.jpg'}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={6}>
              <img
                srcSet={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${'assets/images/anne/anne-1.jpg'}?w=164&h=164&fit=crop&auto=format`}
                alt={'assets/images/anne/anne-1.jpg'}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Container>
      </Layout>
    </>
  )
}
