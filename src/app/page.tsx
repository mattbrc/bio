import React from "react";

export const dynamic = "force-dynamic";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Recents from "./_components/recents";
import MonoCard from "@/components/mono-card";
import MonoImage from "@/components/mono-image";
import MonoHeader from "@/components/mono-header";
import MonoBadge from "@/components/mono-badge";
import { List, ListItem } from "@/components/mono-list";
import MonoTable from "@/components/mono-table";
import MonoFooter from "@/components/mono-footer";
import Link from "next/link";
import { getAthleteStats, getRecentActivities } from "@/lib/strava";
import ActivityHeatmap from "./_components/activity-heatmap";
import { unstable_cache } from "next/cache";
import Stats from "./_components/stats";

const stackItems = [
  {
    category: "Frontend",
    items: "Next, React",
  },
  {
    category: "Backend",
    items: "tRPC, Drizzle, FastAPI, Redis",
  },
  {
    category: "Languages",
    items: "TypeScript, Python, Solidity",
  },
  {
    category: "DevOps",
    items: "AWS, SST, CI/CD",
  },
  {
    category: "Other",
    items: "Postgres, MySQL, Tailwind, PostHog, Datadog, Palantir, Sentry",
  },
] as const;

const cachedStravaData = unstable_cache(
  async () => {
    const [activitiesData, stats] = await Promise.all([
      getRecentActivities(),
      getAthleteStats(),
    ]);

    return {
      activities: activitiesData,
      stats,
    };
  },
  ["strava-data"],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ["strava"],
  }
);

export default async function Home() {
  // Fetch all data with caching
  const stravaData = await cachedStravaData();

  return (
    <main className="flex flex-col items-center w-full pt-2 pb-8">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <MonoImage
          src="/spacex2.jpeg"
          alt="Profile"
          width={650}
          height={300}
          subtitle="Falcon 9, 08-04-2024"
        />
        <div className="mt-4 flex flex-col gap-4">
          <MonoCard title="Current">Mission Success @ Anduril</MonoCard>

          {/* <MonoCard title="Work">
            Technical Program Manager: Lead the Army Organization Server
            program, a data feed serving over 1 million end users. Partner with
            developers and analytics teams to enhance product features, optimize
            processes, and improve data accuracy by building internal analytics
            tools (angular/node, MS Access, VBA) and engineering enhancements.
          </MonoCard> */}
          <MonoCard title="Stack">
            <div className="grid grid-cols-[auto_1fr] gap-y-1 font-mono text-sm">
              {stackItems.map(({ category, items }) => (
                <React.Fragment key={category}>
                  <div className="flex items-center pr-2">
                    <span className="mr-2">→</span>
                    <span>{category}:</span>
                  </div>
                  <div className="flex items-start rounded transition-colors hover:bg-emerald-400 cursor-pointer px-2">
                    {items}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </MonoCard>
          <Stats stats={stravaData.stats} />
          <Recents activities={stravaData.activities} />
        </div>
      </div>
    </main>
  );
}
