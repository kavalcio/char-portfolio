import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  slug,
}: Props) => {
  return (
    <Link
      className='post-preview'
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      style={{
        backgroundImage: `url(${coverImage})`,
        // backgroundPosition: '25% 75%',
      }}
    >
      <span className="post-preview-title">{title}</span>
    </Link>
  )
}

export default PostPreview
