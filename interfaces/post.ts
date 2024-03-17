import PostContentType from './postContent'

type PostType = {
  slug: string
  title: string
  coverImage: string
  postPreviewStyle?: object
  contents: Array<PostContentType>
}

export default PostType
