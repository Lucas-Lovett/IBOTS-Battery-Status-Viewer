import React from 'react'

interface BatteryNameProps {
    name: string
    batteryIndex: number
    setBatteries: React.Dispatch<React.SetStateAction<{ name: string; lastUsed: number }[]>>
}

const BatteryName = ({ name, batteryIndex, setBatteries }: BatteryNameProps) => {
  return (
    <input
        type="text"
        value={name}
        onChange={(e) =>
            setBatteries(prev =>
                prev.map((battery, index) =>
                    index === batteryIndex ? { ...battery, name: e.target.value } : battery
                )
            )
        }
        placeholder="Battery Name"
    />
  )
}

export default BatteryName