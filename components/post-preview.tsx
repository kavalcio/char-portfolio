import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  slug: string,
  postPreviewStyle?: object,
}

const PostPreview = ({
  title,
  coverImage,
  slug,
  postPreviewStyle,
}: Props) => {
  return (
    <Link
      className='post-preview'
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      style={{
        backgroundImage: `url(${coverImage})`,
        ...(postPreviewStyle || {}),
      }}
    >
      <span className="post-preview-title">{title}</span>
    </Link>
  )
}

export default PostPreview
