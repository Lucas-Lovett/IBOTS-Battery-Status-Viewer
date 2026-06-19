"use client";

import React from "react";
import BatteryUsed from "./BatteryUsed";
import ResetInfo from "./ResetInfo";
import BatteryName from "./BatteryName";
import BatteryVoltage from "./BatteryVoltage";
import BatteryResistance from "./BatteryResistance";
import BatteryNotes from "./BatteryNotes";
import UndoBatteryUsed from "./UndoBatteryUsed";
import type { Battery } from "@/types/batteries";

const BatteryStatusCards = () => {
  const [batteries, setBatteries] = React.useState<Battery[]>(
    Array.from({ length: 12 }, () => ({
      name: "",
      lastUsed: 0,
      voltage: "",
      resistance: "",
      notes: "",
      lastChecked: "Never",
    })),
  );

  const [, setHistory] = React.useState<number[][]>([]);

  const updateBattery = (index: number, changes: Partial<Battery>) => {
    setBatteries((prev) =>
      prev.map((battery, i) =>
        i === index
          ? {
              ...battery,
              ...changes,
              lastChecked: new Date().toLocaleTimeString(),
            }
          : battery,
      ),
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {batteries.map((battery, index) => (
          <div key={index} className="border rounded-lg p-4">
            <BatteryName
              name={battery.name}
              batteryIndex={index}
              setBatteries={setBatteries}
            />

            <BatteryVoltage
              voltage={battery.voltage}
              batteryIndex={index}
              updateBattery={updateBattery}
            />

            <BatteryResistance
              resistance={battery.resistance}
              batteryIndex={index}
              updateBattery={updateBattery}
            />

            <h1>Last used {battery.lastUsed} matches ago</h1>

            <BatteryUsed
              batteryIndex={index}
              batteries={batteries}
              updateBattery={updateBattery}
              setHistory={setHistory}
            />

            <h1>Battery last checked at: {battery.lastChecked}</h1>

            <h1>Notes:</h1>

            <BatteryNotes
              notes={battery.notes}
              batteryIndex={index}
              setBatteries={setBatteries}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <ResetInfo setBatteries={setBatteries} setHistory={setHistory} />
        <UndoBatteryUsed setHistory={setHistory} setBatteries={setBatteries} />
      </div>
    </div>
  );
};

export default BatteryStatusCards;
