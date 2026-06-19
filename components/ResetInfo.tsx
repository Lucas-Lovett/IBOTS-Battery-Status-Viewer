"use client";
import React from "react";

interface ResetInfoProps {
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
  setHistory: React.Dispatch<React.SetStateAction<number[][]>>;
}

const ResetInfo = ({ setBatteries, setHistory }: ResetInfoProps) => {
  function resetInfoClick() {
    setBatteries((prev) =>
      prev.map((battery) => ({
        ...battery,
        lastUsed: 0,
        name: "",
        voltage: "",
        resistance: "",
        notes: "",
        lastChecked: "Never",
      })),
    );
    setHistory([]);
  }

  return (
    <button className="btn" onClick={resetInfoClick}>
      Reset Info
    </button>
  );
};

export default ResetInfo;
