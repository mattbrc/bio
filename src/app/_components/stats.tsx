import Link from "next/link";
import React from "react";
import { AthleteStats, Activity } from "~/types/strava";
import MonoCard from "@/components/mono-card";
import MonoTable from "@/components/mono-table";
import { Badge } from "@/components/ui/badge";
import MonoBadge from "@/components/mono-badge";

interface StatsProps {
  stats: AthleteStats;
}

export default function Stats({ stats }: StatsProps) {
  let data = [["NAME", "COUNT", "DISTANCE", "MILES PER WEEK", "HOURS"]]; // Header row

  // Add runs data
  data.push([
    "Runs",
    stats.recent_run_totals.count.toString(),
    `${(stats.recent_run_totals.distance / 1609).toFixed(2)} mi`,
    `${(stats.recent_run_totals.distance / 1609 / 4).toFixed(2)} mi`,
    `${(stats.recent_run_totals.moving_time / 3600).toFixed(2)}`,
  ]);

  // Add rides data
  data.push([
    "Rides",
    stats.recent_ride_totals.count.toString(),
    `${(stats.recent_ride_totals.distance / 1609).toFixed(2)} mi`,
    `${(stats.recent_ride_totals.distance / 1609 / 4).toFixed(2)} mi`,
    `${(stats.recent_ride_totals.moving_time / 3600).toFixed(2)}`,
  ]);

  // Add walks data
  // data.push([
  //   "Walks",
  //   "—",
  //   "—",
  //   walkDuration === null ? "—" : `${(walkDuration / 3600).toFixed(2)}`,
  // ]);

  return (
    <MonoCard title="30d Stats">
      <MonoTable data={data} />
      <MonoBadge
        value="strava api v3"
        link="https://developers.strava.com/docs/reference/"
      />
    </MonoCard>
  );
}
