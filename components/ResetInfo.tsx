"use client"
import React from 'react'

interface ResetInfoProps {
    setBatteries: React.Dispatch<React.SetStateAction<{ name: string; lastUsed: number }[]>>
}

const ResetInfo = ({ setBatteries }: ResetInfoProps) => {

    function resetInfoClick() {
        setBatteries(prev =>
            prev.map(battery => ({ ...battery, lastUsed: 0, name: "" }))
        )
    }

    return (
        <button onClick={resetInfoClick}>
            Reset Info
        </button>
    )
}

export default ResetInfo