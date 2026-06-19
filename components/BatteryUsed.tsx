import React from "react";
import type { Battery } from "@/types/batteries";

interface BatteryUsedProps {
  batteryIndex: number;
  batteries: {
    name: string;
    lastUsed: number;
    voltage: string;
    resistance: string;
    notes: string;
  }[];
  updateBattery: (index: number, changes: Partial<Battery>) => void;
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>;
}

const BatteryUsed = ({
  batteryIndex,
  batteries,
  updateBattery,
  setHistory,
}: BatteryUsedProps) => {
  function useBatteryClick() {
    setHistory((prev) => [
      ...prev,
      batteries.map((battery) => battery.lastUsed),
    ]);

    batteries.forEach((battery, index) => {
      if (index === batteryIndex) {
        updateBattery(index, { lastUsed: 0 });
      } else {
        updateBattery(index, {
          lastUsed: battery.lastUsed + 1,
        });
      }
    });
  }

  return (
    <div>
      <button onClick={useBatteryClick}>Use Battery</button>
    </div>
  );
};

export default BatteryUsed;
