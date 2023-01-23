import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import Link from 'next/link'

const CustomMarkdown = ({ children, className }) => {
  return (
    <ReactMarkdown
      components={{
        a: props => <Link href={props.href}>{props.children}</Link>
      }}
      className={className}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  )
}

export default CustomMarkdown