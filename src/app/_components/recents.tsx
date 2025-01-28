import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Activity } from "~/types/strava";
import MonoCard from "@/components/mono-card";
import MonoTable from "@/components/mono-table";
import MonoBadge from "@/components/mono-badge";

interface RecentsProps {
  activities: Activity[];
}

function calculatePace(distance: number, time: number): string {
  // Only calculate pace for runs and walks
  if (distance === 0) return "—";

  // Convert meters to miles and seconds to minutes
  const miles = distance / 1609.34;
  const minutes = time / 60;

  // Calculate pace (minutes per mile)
  const pace = minutes / miles;

  // Format to mm:ss
  const paceMinutes = Math.floor(pace);
  const paceSeconds = Math.floor((pace - paceMinutes) * 60);

  return `${paceMinutes}:${paceSeconds.toString().padStart(2, "0")}`;
}

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

export default function Recents({ activities }: RecentsProps) {
  let data = [["NAME", "TYPE", "PACE", "DISTANCE", "TIME", "DATE"]];

  if (activities.length > 0) {
    activities.slice(0, 5).forEach((activity) => {
      const pace =
        activity.type === "Run" || activity.type === "Walk"
          ? calculatePace(activity.distance, activity.moving_time)
          : "—";

      data.push([
        activity.name,
        activity.type === "WeightTraining" ? "Weight Training" : activity.type,
        pace,
        `${(activity.distance / 1609.34).toFixed(2)} mi`,
        formatTime(activity.moving_time),
        new Date(activity.start_date_local).toLocaleString(),
      ]);
    });
  }

  return (
    <div>
      <MonoCard title="Recent Activities">
        <MonoTable data={data} />
        <MonoBadge
          value="strava api v3"
          link="https://developers.strava.com/docs/reference/"
        />
      </MonoCard>
    </div>
  );
}
