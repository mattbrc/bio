import React from "react";
import { Activity } from "~/types/strava";
import MonoCard from "@/components/mono-card";
import MonoBadge from "@/components/mono-badge";

interface ActivityHeatmapProps {
  activities: Activity[];
}

function getDaysArray(startDate: Date, endDate: Date) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export default function ActivityHeatmap({ activities }: ActivityHeatmapProps) {
  // Create a map of dates with activities
  const activityMap = new Map<string, Activity[]>();

  activities.forEach((activity) => {
    const date = formatDate(new Date(activity.start_date_local));
    if (!activityMap.has(date)) {
      activityMap.set(date, []);
    }
    activityMap.get(date)?.push(activity);
  });

  // Calculate date range based on activities
  const dates = activities.map((a) => new Date(a.start_date_local));
  const today = new Date(Math.max(...dates.map((d) => d.getTime())));
  const startDate = new Date(Math.min(...dates.map((d) => d.getTime())));

  // Get all days in our range
  const daysArray = getDaysArray(startDate, today);

  // Calculate days difference
  const daysDifference = Math.ceil(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Get months with their week counts for proper alignment
  const monthsWithWeeks = {} as Record<string, number>;

  // First, group days by month
  const daysByMonth = daysArray.reduce(
    (acc, date) => {
      const monthKey = date.toLocaleString("default", { month: "short" });
      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }
      acc[monthKey].push(date);
      return acc;
    },
    {} as Record<string, Date[]>
  );

  // Calculate weeks for each month based on the first and last day's position in the grid
  Object.entries(daysByMonth).forEach(([month, days]) => {
    const firstDay = days[0];
    const lastDay = days[days.length - 1];

    // Calculate which week column the first and last day appear in
    const firstWeek = Math.floor(daysArray.indexOf(firstDay) / 7);
    const lastWeek = Math.floor(daysArray.indexOf(lastDay) / 7);

    // Number of weeks is the difference plus 1
    monthsWithWeeks[month] = lastWeek - firstWeek + 1;
  });

  const months = Object.keys(monthsWithWeeks);

  // Group days by week (7 days each)
  const weeks = [];
  for (let i = 0; i < daysArray.length; i += 7) {
    weeks.push(daysArray.slice(i, i + 7));
  }

  return (
    <MonoCard title="Activity Contributions">
      <div className="flex flex-col gap-2">
        <div className="text-xs text-gray-500 font-mono flex flex-col gap-1 items-center">
          <div>
            Date Range: {startDate.toLocaleDateString()} -{" "}
            {today.toLocaleDateString()}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-[2px] sm:gap-1 py-2">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[2px] sm:gap-1">
                {week.map((day, dayIndex) => {
                  const date = formatDate(day);
                  const dayActivities = activityMap.get(date) || [];
                  const hasActivity = dayActivities.length > 0;

                  // Create detailed tooltip content
                  const tooltipContent = hasActivity
                    ? `${day.toLocaleDateString()}\n${dayActivities
                        .map(
                          (a) =>
                            `${a.type}: ${(a.distance / 1609.34).toFixed(2)} mi`
                        )
                        .join("\n")}`
                    : `${day.toLocaleDateString()}: No activity`;

                  return (
                    <div
                      key={dayIndex}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm ${
                        hasActivity
                          ? "bg-orange-500"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                      title={tooltipContent}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <MonoBadge value="strava api v3" />
    </MonoCard>
  );
}
