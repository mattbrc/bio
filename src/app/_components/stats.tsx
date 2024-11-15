import Link from "next/link";
import React from "react";
import { get30dActivities, getAthleteStats } from "@/lib/strava";
import { AthleteStats } from "~/types/strava";

// export const revalidate = 0;

export default async function Stats() {
  // const stats: AthleteStats = await getAthleteStats();

  let stats: AthleteStats | null = null;
  let strengthSessionCount: number | null = null;
  let walkDuration: number | null = null;
  try {
    stats = await getAthleteStats();
    const moreStats = await get30dActivities();
    strengthSessionCount = moreStats.strengthSessionCount;
    walkDuration = moreStats.walkDuration;
  } catch (error) {
    console.error(error);
  }

  if (!stats) {
    return <div>Error loading stats.</div>;
  }

  return (
    <div>
      <h2>
        Trailing 30d{" "}
        <Link
          href="https://www.strava.com/athletes/7445195"
          className="underline underline-offset-2 hover:text-orange-500"
        >
          Strava
        </Link>{" "}
        Stats
      </h2>
      <p className="text-xs font-mono">live stream from strava api v3.</p>

      <div className="flex flex-row gap-8">
        <div>
          <p className="font-mono font-bold pt-2">Runs</p>
          <ul>
            <li>Count: {stats.recent_run_totals.count}</li>
            <li>
              Dist: {(stats.recent_run_totals.distance / 1609).toFixed(2)} mi
            </li>
            <li>
              Dur: {(stats.recent_run_totals.moving_time / 3600).toFixed(2)}{" "}
              hours
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono font-bold pt-2">Rides</p>
          <ul>
            <li>Count: {stats.recent_ride_totals.count}</li>
            <li>
              Dist: {(stats.recent_ride_totals.distance / 1609).toFixed(2)} mi
            </li>
            <li>
              Dur: {(stats.recent_ride_totals.moving_time / 3600).toFixed(2)}{" "}
              hours
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono font-bold pt-2">Walks</p>
          <ul>
            <li>
              Dur:{" "}
              {walkDuration === null
                ? "No data"
                : (walkDuration / 3600).toFixed(2) + " hours"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
