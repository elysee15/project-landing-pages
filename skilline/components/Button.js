
export default function Button({ children, ...props }) {
    return <button className="rounded-full" {...props}>{children}</button>
}