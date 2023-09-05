import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/container'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import type PostType from '../../interfaces/post'
import PageHeader from '../../components/page-header'
import Image from '../../components/post/image'
import Text from '../../components/post/text'

import { POST_DICTIONARY } from '../../data/posts';

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  const router = useRouter();
  const title = post.title ? `${post.title} | Charlotte Claytor` : 'Charlotte Claytor';
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <PageHeader />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <PostTitle>{post.title}</PostTitle>
            {post.contents.map((content, index) => (
              <>
                {content.type === 'image' && (
                  <Image source={content.source} />
                )}
                {content.type === 'text' && (
                  <Text text={content.text} />
                )}
              </>
            ))}
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = POST_DICTIONARY[params.slug];
  return {
    props: {
      post,
    },
  }
};

// TODO: if use tries to go to an invalid slug, redirect to 404 instead of showing js error
export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};
