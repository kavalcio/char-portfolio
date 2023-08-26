type Props = {
  text: string
}

const Text = ({ text }: Props) => {
  return (
    <div style={{ margin: 20 }}>
      <p>{text}</p>
    </div>
  )
}

export default Text
