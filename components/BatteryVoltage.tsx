import React from "react";
import type { Battery } from "@/types/batteries";

interface BatteryVoltageProps {
  voltage: string;
  batteryIndex: number;
  updateBattery: (index: number, changes: Partial<Battery>) => void;
}

const BatteryVoltage = ({
  voltage,
  batteryIndex,
  updateBattery,
}: BatteryVoltageProps) => {
  return (
    <div className="mb-3">
      <label className="label">Battery Voltage:</label>
      <input
        className="input"
        type="number"
        value={voltage}
        onChange={(e) =>
          updateBattery(batteryIndex, {
            voltage: e.target.value,
          })
        }
        placeholder="Battery Voltage"
      />
    </div>
  );
};

export default BatteryVoltage;
