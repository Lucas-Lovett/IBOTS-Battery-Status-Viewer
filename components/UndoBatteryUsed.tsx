import React from "react";

interface UndoBatteryUsedProps {
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>;
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

const UndoBatteryUsed = ({
  setHistory,
  setBatteries,
}: UndoBatteryUsedProps) => {
  function undoBatteryUsedClick() {
    setHistory((prev) => {
      if (prev.length === 0) return prev;

      const last = prev[prev.length - 1];

      setBatteries((current) =>
        current.map((battery, index) => ({
          ...battery,
          lastUsed: last[index],
        })),
      );

      return prev.slice(0, -1);
    });
  }

  return (
    <button className="btn" onClick={undoBatteryUsedClick}>
      Undo
    </button>
  );
};

export default UndoBatteryUsed;
