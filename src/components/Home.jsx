import React, { Fragment, useEffect, useState } from 'react'
import { Title } from './commons/Title'
import { Search } from './Search'
import { Weather } from './Weather'

/**
 * Accueil de l'application
 */
export const Home = () => {

    const [city, setCity] = useState("");

    /**
     * Methode qui gere la reception des donnees du formulaire
     * @param {ref} inputRef 
     */
    const handleSubmit = (inputRef) => {
        setCity(inputRef.current.value);
    }

    useEffect(() => {
        
    }, [city])

    return (
        <Fragment>
            <Title />
            <Search submit={handleSubmit}/>
            <Weather city={city}/>
        </Fragment>
    )
}
