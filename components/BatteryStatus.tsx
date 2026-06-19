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
    <div className="field">
      <label className="label">Status:</label>

      <div className="statusGroup">
        {options.map((option) => (
          <button
            key={option}
            data-active={status === option}
            className="statusButton"
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
