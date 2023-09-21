export const TagsElement = (props) => {
    const {
        children,
        tag
    } = props
    switch (tag) {
        case 'p':
            return (
                <p className=""> {children}  </p>
            )
        case 'h2':
            return (
                <h2 className="">  {children} </h2>
            )
        default:
            return (
                <div>
                    {children}
                </div>
            )
    }

}

