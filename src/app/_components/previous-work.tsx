import React from "react";
import MonoCard from "@/components/mono-card";

const workHistory = [
  {
    company: "Anduril Industries",
    role: "Mission Success Intern",
    period: "Jan 2025 - May 2025",
  },
  {
    company: "US Army",
    role: "Engineer Officer",
    period: "Jul 2019 - Jan 2025",
  },
  {
    company: "National Security Agency",
    role: "Research Intern",
    period: "Jun 2017 - Aug 2017",
  },
  {
    company: "The Citadel",
    role: "BS Electrical Engineering",
    period: "Aug 2015 - May 2019",
  },
];

export default function PreviousWork() {
  return (
    <MonoCard title="Previous Work">
      <div className="font-mono text-sm space-y-3">
        {workHistory.map((job, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 transition-colors hover:bg-emerald-400 cursor-crosshair px-1"
          >
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <span className="font-semibold">{job.company}</span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="text-neutral-700">{job.role}</span>
            </div>
            <div className="text-xs text-neutral-600">{job.period}</div>
          </div>
        ))}
      </div>
    </MonoCard>
  );
}
