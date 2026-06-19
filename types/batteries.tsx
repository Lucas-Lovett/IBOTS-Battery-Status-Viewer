export type Battery = {
  name: string;
  lastUsed: number;
  voltage: string;
  resistance: string;
  notes: string;
  lastChecked: string;
  status: BatteryStatus;
};

export type BatteryStatus = "Poor" | "Fair" | "Good";
