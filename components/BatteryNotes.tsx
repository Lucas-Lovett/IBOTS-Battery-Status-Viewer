import React from "react";
import type { Battery } from "@/types/batteries";

interface BatteryNotesProps {
  notes: string;
  batteryIndex: number;
  setBatteries: React.Dispatch<React.SetStateAction<Battery[]>>;
}

const BatteryNotes = ({
  notes,
  batteryIndex,
  setBatteries,
}: BatteryNotesProps) => {
  return (
    <div className="labelContainer">
      <label className="label">Notes:</label>
      <textarea
        className="textarea"
        value={notes}
        onChange={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;

          setBatteries((prev) =>
            prev.map((b, i) =>
              i === batteryIndex ? { ...b, notes: e.target.value } : b,
            ),
          );
        }}
      />
    </div>
  );
};

export default BatteryNotes;
