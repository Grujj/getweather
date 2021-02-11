import React, { useState } from 'react'

export const Title = () => {

    const [title, setTitle] = useState("Welcome to GetWeather App !");

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}
