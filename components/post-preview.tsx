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
      {/* <span className="post-preview-subtitle">{subtitle}</span> */}
      {/* <h3 className="text-3xl mb-3 leading-snug">
        {title}
      </h3> */}
      {/* <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} /> */}
    </Link>
  )
}

export default PostPreview
