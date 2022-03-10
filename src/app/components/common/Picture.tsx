type SourceProps = {
  srcSet: string
  type: string
}

type Props = {
  sources: [string, SourceProps][]
  imgProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
}

const Picture = ({ sources, imgProps }: Props) => {
  return (
    <picture>
      {sources.map(([type, { srcSet }]) => (
        <source srcSet={srcSet} type={type} key={type}></source>
      ))}
      <img {...imgProps} />
    </picture>
  )
}

export default Picture
