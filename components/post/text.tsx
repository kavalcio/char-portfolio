import ReactMarkdown from 'react-markdown';

type Props = {
  text: string
}

const Text = ({ text }: Props) => {
  return (
    <div style={{ margin: 20, textAlign: 'center', lineHeight: '40px' }}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default Text
