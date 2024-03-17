import Container from '../components/container'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import Head from 'next/head'
import Posts from '../components/posts'

import { ORDERED_ILLUSTRATIONS } from '../data/posts'

export default function Illustrations() {
  return (
    <>
      <Layout>
        <Head>
          <title>Charlotte Claytor</title>
        </Head>
        <Container>
          <PageHeader />
          <Posts posts={ORDERED_ILLUSTRATIONS} />
        </Container>
      </Layout>
    </>
  )
}
