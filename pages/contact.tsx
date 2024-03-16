import Container from '../components/container'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import Head from 'next/head'
import PostTitle from '../components/post-title'

// TODO: try to embed instagram feed
// use react-social-media-embed?
export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>Charlotte Claytor</title>
        </Head>
        <Container>
          <PageHeader />
          <h1 className="text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center">
            Contact
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <a href="mailto:charlotteclaytor@gmail.com">
              <div className='contact-link'>
                charlotteclaytor@gmail.com
              </div>
            </a>
            <a href="https://www.instagram.com/clayychar/" target="_blank">
              <div className='contact-link'>
                @claycharr
              </div>
            </a>
          </div>
        </Container>
      </Layout>
    </>
  )
}
