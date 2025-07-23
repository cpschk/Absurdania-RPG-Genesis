
'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { roadmapPhases, type Phase, type FeatureStatus } from "@/lib/roadmap-data";

function StatusBadge({ status }: { status: FeatureStatus }) {
  const baseClasses = "px-3 py-1 text-xs font-bold rounded-full inline-block whitespace-nowrap";
  switch (status) {
    case 'Done':
      return <span className={cn(baseClasses, "bg-green-600 text-white")}>✅ Hecho</span>;
    case 'In Progress':
      return <span className={cn(baseClasses, "bg-yellow-400 text-black animate-pulse")}>🟡 En progreso</span>;
    case 'Pending':
      return <span className={cn(baseClasses, "bg-gray-500 text-white")}>⬜️ Pendiente</span>;
    default:
      return null;
  }
}

function PhaseTable({ phase }: { phase: Phase }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
        <span className="mr-2">{phase.icon}</span>
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {phase.title}
        </span>
      </h3>
      <p className="text-center text-gray-300 mb-6 italic">{phase.subtitle}</p>
      <div className="overflow-hidden rounded-lg border border-purple-500/20 bg-gray-900/50">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b-purple-500/20">
                <TableHead className="text-white font-semibold w-[30%]">Funcionalidad</TableHead>
                <TableHead className="text-white font-semibold w-[15%] text-center">Estado</TableHead>
                <TableHead className="text-white font-semibold w-[55%]">Descripción breve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {phase.features.map((feature, index) => (
                <TableRow key={index} className="border-b-purple-500/10 last:border-b-0">
                  <TableCell className="font-medium text-gray-200">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    <StatusBadge status={feature.status} />
                  </TableCell>
                  <TableCell className="text-gray-400 text-sm">{feature.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}


export function RoadmapSection() {
  return (
    <div className="p-4 sm:p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Roadmap Visual
      </h2>
      <div className="space-y-16">
        {roadmapPhases.map((phase, index) => (
          <PhaseTable key={index} phase={phase} />
        ))}
      </div>
    </div>
  );
}
