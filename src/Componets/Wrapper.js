import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div style={{ maxWidth: "80%", margin: "0 auto" }}>{children}</div>
    )
}

export default Wrapper