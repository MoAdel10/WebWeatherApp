import React, { useContext, useRef } from 'react';
import { Context } from '../Contex';


    export default function DropBox({ id, options }) {

    const {countryChosen,setCountryChosen} = useContext(Context);
    const dropList = useRef();

    function handleChange() {
        const selectedCountry = dropList.current.value;
        setCountryChosen(selectedCountry);
        
    }

    return (
        <select id={id} ref={dropList} onChange={handleChange}>
        <option>Choose the country code</option>
        {options.map((opt, index) => (
            <option key={index} value={opt.code}>
            {opt.name}
            </option>
        ))}
        </select>
    );
    }
