import React, { Fragment, useEffect, useState } from 'react'
import { Title } from './commons/Title'
import { Search } from './Search'
import { Weather } from './Weather'

export const Home = () => {

    const [city, setCity] = useState("");

    const handleSubmit = (inputRef) => {
        setCity(inputRef.current.value);
    }

    useEffect(() => {
        console.log(city);
    }, [city])

    return (
        <Fragment>
            <Title />
            <Search submit={handleSubmit}/>
            <Weather city={city}/>
        </Fragment>
    )
}
