import React from "react";
import type { Battery } from "@/types/batteries";

interface BatteryResistanceProps {
  resistance: string;
  batteryIndex: number;
  updateBattery: (index: number, changes: Partial<Battery>) => void;
}

const BatteryResistance = ({
  resistance,
  batteryIndex,
  updateBattery,
}: BatteryResistanceProps) => {
  return (
    <div className="mb-3">
      <label className="label">Battery Resistance:</label>
      <input
        className="input"
        type="number"
        value={resistance}
        onChange={(e) =>
          updateBattery(batteryIndex, {
            resistance: e.target.value,
          })
        }
        placeholder="Battery Resistance"
      />
    </div>
  );
};

export default BatteryResistance;
