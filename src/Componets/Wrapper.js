import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div style={{ maxWidth: "70%", margin: "0 auto" }}>{children}</div>
    )
}

export default Wrapper