import PostContentType from './postContent'

type PostType = {
  slug: string
  title: string
  coverImage: string
  contents: Array<PostContentType>
}

export default PostType
