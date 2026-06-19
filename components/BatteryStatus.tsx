import React from "react";
import type { Battery, BatteryStatus as StatusType } from "@/types/batteries";

interface BatteryStatusProps {
  batteryIndex: number;
  status: StatusType;
  updateBattery: (index: number, changes: Partial<Battery>) => void;
}

const options: StatusType[] = ["Poor", "Fair", "Good"];

const BatteryStatus = ({
  batteryIndex,
  status,
  updateBattery,
}: BatteryStatusProps) => {
  return (
    <div>
      <label>Status:</label>

      <div>
        {options.map((option) => (
          <button
            key={option}
            data-active={status === option}
            onClick={() => updateBattery(batteryIndex, { status: option })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BatteryStatus;
