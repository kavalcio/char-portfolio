import Container from '../components/container'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import Head from 'next/head'
import Posts from '../components/posts'
import { ORDERED_FILMS } from '../data/posts.js';

export default function Film() {
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
