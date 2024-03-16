import Container from '../components/container'
import HeroPost from '../components/hero-post'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

import { ImageList, ImageListItem } from '@mui/material';

export default function Sewing({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Charlotte Claytor</title>
        </Head>
        <Container>
          <PageHeader />
        
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
