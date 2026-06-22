import React from "react";
import type { Battery } from "@/types/batteries";

interface UndoBatteryUsedProps {
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>;
  setBatteries: React.Dispatch<React.SetStateAction<Battery[]>>;
}

const UndoBatteryUsed = ({
  setHistory,
  setBatteries,
}: UndoBatteryUsedProps) => {
  const undo = () => {
    setHistory((prev) => {
      if (!prev.length) return prev;

      const last = prev[prev.length - 1];

      setBatteries((curr) =>
        curr.map((b, i) => ({
          ...b,
          lastUsed: last[i],
        })),
      );

      return prev.slice(0, -1);
    });
  };

  return <button className="button utilityButton" onClick={undo}>Undo</button>;
};

export default UndoBatteryUsed;
