import Image from "next/image";
import StravaStats from "./_components/stats";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-8">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <Image
          src="/spacex2.jpeg"
          alt="Profile"
          width={650}
          height={500}
          className="w-full h-auto"
        />
        <p className="pt-1 text-center text-sm text-gray-600">
          Falcon 9, 08-04-2024
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <div>
            <h2>Work</h2>
            <p>
              Technical Program Manager: Lead the Army Organization Server
              program, a data feed serving over 1 million end users. Partner
              with developers and analytics teams to enhance product features,
              optimize processes, and improve data accuracy by building internal
              analytics tools (angular/node, MS Access, VBA) and engineering
              enhancements.
            </p>
          </div>
          <div>
            <h2>Stack</h2>
            <ul>
              <li>🦚 Frontend: Next.js, ReactJS</li>
              <li>💾 Backend: tRPC, Drizzle, Prisma</li>
              <li>🏎️ Languages: TypeScript, Python, SQL</li>
              <li>
                Other: MySQL, Vercel Postgres, Supabase, Tailwind, Solidity
              </li>
            </ul>
          </div>
          <StravaStats />
          <div>
            <h2>Personal Fitness Stats</h2>
            <ul>
              <li>1-mile run: 4:54 min</li>
              <li>400m run: 59 sec</li>
              <li>10-mile run: 6:36/mi</li>
              <li>Cindy: 24 rounds</li>
              <li>1RM Bench: 340, 1RM Deadlift: 445</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
