import React from "react";

interface BatteryNotesProps {
  notes: string;
  batteryIndex: number;
  setBatteries: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        lastUsed: number;
        voltage: string;
        resistance: string;
        notes: string;
        lastChecked: string;
      }[]
    >
  >;
}

const BatteryNotes = ({
  notes,
  batteryIndex,
  setBatteries,
}: BatteryNotesProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="label">Notes:</label>
      <textarea
        className="input"
        value={notes}
        onChange={(e) =>
          setBatteries((prev) =>
            prev.map((battery, index) =>
              index === batteryIndex
                ? { ...battery, notes: e.target.value }
                : battery,
            ),
          )
        }
        placeholder="Battery Notes"
      />
    </div>
  );
};

export default BatteryNotes;
