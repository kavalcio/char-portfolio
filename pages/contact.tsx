import Container from '../components/container'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Contact() {
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
          <span>charlotteclaytor@gmail.com</span>
          <span>@clayychar</span>
        </Container>
      </Layout>
    </>
  )
}
