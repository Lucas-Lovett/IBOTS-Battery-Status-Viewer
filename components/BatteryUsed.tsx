import React from 'react'

interface BatteryUsedProps {
    batteryIndex: number
    setBatteries: React.Dispatch<React.SetStateAction<{ name: string; lastUsed: number }[]>>
}

const BatteryUsed = ({batteryIndex, setBatteries }: BatteryUsedProps) => {

    function useBatteryClick() {
        setBatteries(prev =>
            prev.map((battery, index) =>
                index === batteryIndex ? { ...battery, lastUsed: battery.lastUsed + 1 } : battery
            )
        )
    }

    return (
        <button onClick={useBatteryClick}>
            Battery Used
        </button>
    )
}

export default BatteryUsed