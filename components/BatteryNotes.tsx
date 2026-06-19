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
    <div>
      <label>Notes:</label>
      <textarea
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
