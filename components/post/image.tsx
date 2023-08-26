type Props = {
  source: string
}

const Image = ({ source }: Props) => {
  return (
    <div style={{ margin: 20 }}>
      <img src={source}/>
    </div>
  )
}

export default Image
