
export interface IconProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    svg?: string
}

export const Icon = (props: IconProps) => {
    return <img {...props} src={`data:image/svg+xml;utf8,${encodeURIComponent(props.svg || "")}`} />
}