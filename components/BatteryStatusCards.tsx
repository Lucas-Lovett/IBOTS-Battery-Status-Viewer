"use client"
import React from 'react'
import BatteryUsed from './BatteryUsed'
import ResetInfo from './ResetInfo'
import BatteryName from './BatteryName'

const BatteryStatusCards = () => {
    const [batteries, setBatteries] = React.useState(
        Array.from({ length: 4 }, () => ({ 
            name: "", 
            lastUsed: 0 
        }))
    )

    return (
        <div>
            {batteries.map((battery, index) => (
                <div key={index}>
                    <BatteryName
                        name={battery.name}
                        batteryIndex={index}
                        setBatteries={setBatteries}
                    />
                    <h1>Last used {battery.lastUsed} matches ago</h1>
                    <BatteryUsed
                        batteryIndex={index}
                        setBatteries={setBatteries}
                    />
                </div>
            ))}

            <ResetInfo
                setBatteries={setBatteries}
            />
        </div>
    )
}

export default BatteryStatusCards