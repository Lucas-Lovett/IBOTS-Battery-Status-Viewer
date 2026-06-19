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
    <div>
      <label>Battery Resistance:</label>
      <input
        type="number"
        value={resistance}
        onChange={(e) =>
          updateBattery(batteryIndex, {
            resistance: e.target.value,
          })
        }
      />
    </div>
  );
};

export default BatteryResistance;
