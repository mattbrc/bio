export const dynamic = "force-dynamic";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Stats from "./_components/stats";
import Recents from "./_components/recents";

export default async function Home() {
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
            <h2>Current</h2>
            <p>Learning about AI and integrating w/ health+fitness</p>
          </div>
          <Separator />
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
          <Separator />
          <div>
            <h2>Stack</h2>
            <ul>
              <li>- Frontend: Next, React</li>
              <li>- Backend: tRPC, Drizzle, Prisma</li>
              <li>- Languages: TypeScript, Python, Go</li>
              <li>- Other: MySQL, Postgres, Tailwind, Solidity</li>
            </ul>
          </div>
          <Separator />

          <Stats />
          <Separator />
          <Recents />
        </div>
      </div>
    </main>
  );
}
