"use client";

import { useMemo } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CampusInvolvementCard from "@/components/ui/CampusInvolvementCard";
import { campusInvolvement } from "@/lib/data";

function formatRoleHeading(role: string) {
  if (role === "Lead") return "Leadership";
  if (role === "Volunteer") return "Volunteering";
  if (role === "Organizer") return "Organizing";
  if (role === "Coordinator") return "Coordination";
  if (role.endsWith("s")) return role;
  return `${role}s`;
}

export default function CampusInvolvement() {
  // Group by role
  const grouped = useMemo(() => {
    const groups: Record<string, typeof campusInvolvement> = {};
    campusInvolvement.forEach((item) => {
      if (!groups[item.role]) groups[item.role] = [];
      groups[item.role].push(item);
    });
    return groups;
  }, []);

  const roleOrder = ["Lead", "Organizer", "Coordinator", "Volunteer", "Student Delegate", "Social Committee Member"];
  const sortedRoles = Object.keys(grouped).sort(
    (a, b) => (roleOrder.indexOf(a) === -1 ? 99 : roleOrder.indexOf(a)) - (roleOrder.indexOf(b) === -1 ? 99 : roleOrder.indexOf(b))
  );

  return (
    <section id="campus" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="~/campus"
          eyebrow="Campus"
          title="Beyond the keyboard."
          description="Events organized, volunteered for, and coordinated at college and beyond."
        />

        <div className="space-y-10">
          {sortedRoles.map((role) => (
            <div key={role}>
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-mist">
                {formatRoleHeading(role)}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {grouped[role].map((item, i) => (
                  <CampusInvolvementCard
                    key={item.event}
                    involvement={item}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
