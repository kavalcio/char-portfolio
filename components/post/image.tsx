type Props = {
  source: string
}

const Image = ({ source }: Props) => {
  return (
    <div className='post-content-image-container'>
      <img className='post-content-image' src={source}/>
    </div>
  )
}

export default Image
