import Container from '../components/container'
import HeroPost from '../components/hero-post'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

export default function Resume() {
  return (
    <>
      <Layout>
        <Head>
          <title>Charlotte Claytor</title>
        </Head>
        <Container>
          <PageHeader />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
        </Container>
      </Layout>
    </>
  )
}
