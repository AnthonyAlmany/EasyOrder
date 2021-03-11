import React from 'react'
import options from '../select-day.js'
import { v4 as uuidv4 } from 'uuid';

function Date({ day, setDay }) {



    const handleChange = (e) => {
        setDay(e.target.value)
    }

    return (
        <div>
            <div className="delivery-container">
                <h3>Delivery:</h3>
                <div className="select-container">

                    <select value={day} onChange={handleChange}>
                        {options.map((option) => (
                            <option key={uuidv4()} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Date