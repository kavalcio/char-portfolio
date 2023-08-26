import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/container'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import type PostType from '../../interfaces/post'
import Intro from '../../components/intro'
import Image from '../../components/post/image'
import Text from '../../components/post/text'

import { POST_DICTIONARY } from '../../data/posts';

// TODO: update PostType to fit our post format
type Props = {
  post: PostType
  preview?: boolean
}

// TODO: rename Intro component to Header
export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const title = post.title ? `${post.title} | Charlotte Claytor` : 'Charlotte Claytor';
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Intro />
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
            {/* <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article> */}
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
