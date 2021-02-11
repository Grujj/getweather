import React, { useRef, useState } from 'react'

export const Search = (props) => {

    const [text, setText] = useState("Recherche par ville...");
    const ref = useRef("city");
    
    return (
        <form>
            <input ref={ref} type="text" placeholder={text}/>
            <button type="button" onClick={() => props.submit(ref)}>Rechercher</button>
        </form>
    )
}
