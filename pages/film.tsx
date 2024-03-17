import Container from '../components/container'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Posts from '../components/posts'
import { ORDERED_FILMS } from '../data/posts.js';

type Props = {
  allPosts: Post[]
}

export default function Film({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Charlotte Claytor</title>
        </Head>
        <Container>
          <PageHeader />
          <Posts posts={ORDERED_FILMS} />
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
