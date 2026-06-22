import React from "react";
import type { Battery } from "@/types/batteries";

interface ResetInfoProps {
  setBatteries: React.Dispatch<React.SetStateAction<Battery[]>>;
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>;
}

const ResetInfo = ({ setBatteries, setHistory }: ResetInfoProps) => {
  const reset = () => {
    setBatteries((prev) =>
      prev.map((b) => ({
        ...b,
        lastUsed: 0,
        name: "",
        voltage: "",
        resistance: "",
        notes: "",
        lastChecked: "Never",
        status: "Good",
      })),
    );

    setHistory([]);
  };

  return <button className="button utilityButton" onClick={reset}>Reset Info</button>;
};

export default ResetInfo;
