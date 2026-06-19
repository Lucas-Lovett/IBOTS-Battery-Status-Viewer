import React from "react";
import type { Battery, BatteryStatus } from "@/types/batteries";

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
    <div className="field">
      <label className="label">Notes:</label>
      <textarea
        className="input textarea"
        value={notes}
        onChange={(e) =>
          setBatteries((prev) =>
            prev.map((b, i) =>
              i === batteryIndex ? { ...b, notes: e.target.value } : b,
            ),
          )
        }
      />
    </div>
  );
};

export default BatteryNotes;
