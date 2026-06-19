import React from "react";
import { Battery } from "@/types/batteries";

interface RecommendedBatteryProps {
  batteries: Battery[];
}

const RecommendedBattery = ({ batteries }: RecommendedBatteryProps) => {
  const goodBatteries = batteries.filter(
    (battery) => battery.status === "Good",
  );

  const fairBatteries = batteries.filter(
    (battery) => battery.status === "Fair",
  );

  const poorBatteries = batteries.filter(
    (battery) => battery.status === "Poor",
  );

  const candidates =
    goodBatteries.length > 0
      ? goodBatteries
      : fairBatteries.length > 0
        ? fairBatteries
        : poorBatteries;

  const sortedCandidates = [...candidates].sort((a, b) => {
    if (Number(a.voltage) !== Number(b.voltage)) {
      return Number(b.voltage) - Number(a.voltage);
    } else if (Number(a.lastUsed) !== Number(b.lastUsed)) {
      return Number(b.lastUsed) - Number(a.lastUsed);
    } else {
      return Number(a.resistance) - Number(b.resistance);
    }
  });

  const recommendedBattery = sortedCandidates[0];

  return (
    <div>
        Recommended Battery: {recommendedBattery?.name};
    </div>
  )
};

export default RecommendedBattery;
