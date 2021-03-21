import React from 'react'

function Option2({estado}) {
    const isSuspended = estado === "normal"
    return (
        <>
            {isSuspended
                ?
                    <>
                        <option>normal</option>
                        <option>suspendida</option>
                    </>
                :
                    <>
                        <option>suspendida</option>
                        <option>normal</option>
                    </>
            }
            
        </>
    )
}

export default Option2
