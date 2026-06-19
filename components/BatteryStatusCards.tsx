"use client";

import React from "react";
import BatteryUsed from "./BatteryUsed";
import ResetInfo from "./ResetInfo";
import BatteryName from "./BatteryName";
import BatteryVoltage from "./BatteryVoltage";
import BatteryResistance from "./BatteryResistance";
import BatteryNotes from "./BatteryNotes";
import UndoBatteryUsed from "./UndoBatteryUsed";
import BatteryStatus from "./BatteryStatus";
import type { Battery } from "@/types/batteries";
import RecommendedBattery from "./RecommendedBattery";

const BatteryStatusCards = () => {
  const [batteries, setBatteries] = React.useState<Battery[]>(
    Array.from({ length: 12 }, () => ({
      name: "",
      lastUsed: 0,
      voltage: "",
      resistance: "",
      notes: "",
      lastChecked: "Never",
      status: "Good",
    })),
  );

  const [, setHistory] = React.useState<number[][]>([]);

  const updateBattery = (index: number, changes: Partial<Battery>) => {
    setBatteries((prev) =>
      prev.map((b, i) =>
        i === index
          ? { ...b, ...changes, lastChecked: new Date().toLocaleTimeString() }
          : b,
      ),
    );
  };

  return (
    <div>
      <div>
        <RecommendedBattery
          batteries={batteries}
        />
      </div>

      <div>
        {batteries.map((battery, index) => (
          <div key={index}>
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
            <BatteryStatus
              batteryIndex={index}
              status={battery.status}
              updateBattery={updateBattery}
            />

            <div>Last used {battery.lastUsed} matches ago</div>

            <BatteryUsed
              batteryIndex={index}
              batteries={batteries}
              updateBattery={updateBattery}
              setHistory={setHistory}
            />

            <div>Battery last checked at: {battery.lastChecked}</div>

            <BatteryNotes
              notes={battery.notes}
              batteryIndex={index}
              setBatteries={setBatteries}
            />
          </div>
        ))}
      </div>

      <div>
        <ResetInfo setBatteries={setBatteries} setHistory={setHistory} />
        <UndoBatteryUsed setHistory={setHistory} setBatteries={setBatteries} />
      </div>
    </div>
  );
};

export default BatteryStatusCards;
