import React from 'react'
import options from '../select-day.js'

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
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Date
