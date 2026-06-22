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

const storageKey = "batteries";

const defaultBatteries: Battery[] = Array.from({ length: 12 }, () => ({
  name: "",
  lastUsed: 0,
  voltage: "",
  resistance: "",
  notes: "",
  lastChecked: "Never",
  status: "Good",
}));

const BatteryStatusCards = () => {
  const [batteries, setBatteries] = React.useState<Battery[]>(defaultBatteries);

  const [isLoaded, setIsLoaded] = React.useState(false);

  const [, setHistory] = React.useState<number[][]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Battery[];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBatteries(parsed);
      } catch {}
    }

    setIsLoaded(true);
  }, []);

  React.useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(storageKey, JSON.stringify(batteries));
  }, [batteries, isLoaded]);

  const updateBattery = (index: number, changes: Partial<Battery>) => {
    setBatteries((prev) =>
      prev.map((b, i) =>
        i === index
          ? {
              ...b,
              ...changes,
              lastChecked: new Date().toLocaleTimeString(),
            }
          : b,
      ),
    );
  };

  return (
    <div>
      <RecommendedBattery batteries={batteries} />

      <div className="statusCards">
        {batteries.map((battery, index) => (
          <div className="statusCard" key={index}>
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

            <div className="batteryInfo">
              Last used {battery.lastUsed} matches ago
            </div>

            <BatteryUsed
              batteryIndex={index}
              batteries={batteries}
              updateBattery={updateBattery}
              setHistory={setHistory}
            />

            <div className="batteryInfo">
              Battery last checked at: {battery.lastChecked}
            </div>

            <BatteryNotes
              notes={battery.notes}
              batteryIndex={index}
              setBatteries={setBatteries}
            />
          </div>
        ))}
      </div>

      <div className="utilityButtons">
        <ResetInfo setBatteries={setBatteries} setHistory={setHistory} />
        <UndoBatteryUsed setHistory={setHistory} setBatteries={setBatteries} />
      </div>
    </div>
  );
};

export default BatteryStatusCards;
