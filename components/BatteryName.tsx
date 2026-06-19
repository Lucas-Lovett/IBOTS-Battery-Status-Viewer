import React from "react";
import type { Battery, BatteryStatus } from "@/types/batteries";

interface BatteryNameProps {
  name: string;
  batteryIndex: number;
  setBatteries: React.Dispatch<React.SetStateAction<Battery[]>>;
}

const BatteryName = ({
  name,
  batteryIndex,
  setBatteries,
}: BatteryNameProps) => {
  return (
    <div className="field">
      <label className="label">Battery Name:</label>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) =>
          setBatteries((prev) =>
            prev.map((b, i) =>
              i === batteryIndex ? { ...b, name: e.target.value } : b,
            ),
          )
        }
      />
    </div>
  );
};

export default BatteryName;
