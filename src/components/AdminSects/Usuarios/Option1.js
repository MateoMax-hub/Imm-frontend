import React from 'react'

function Option1({rol}) {
    const isRol = rol === "admin"
    return (
        <>
            {isRol
                ?
                    <>
                        <option>admin</option>
                        <option>usuario</option>
                    </>
                :
                    <>
                        <option>usuario</option>
                        <option>admin</option>
                    </>
            }
            
        </>
    )
}

export default Option1
