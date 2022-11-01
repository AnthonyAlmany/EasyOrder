import React from 'react'
import options from '../select-day'
import { v4 as uuidv4 } from 'uuid';


interface propsDate{
    day: string,
    setDay: (day : string) => void
}

function Date({ day, setDay } : propsDate) {



    const handleChange = (e:any) => {
        setDay(e.target.value);
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
