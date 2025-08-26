// path: churrasplit/frontend/src/components/GroupCard.tsx
import React from "react";

type Group = {
  id: number;
  name: string;
  members: string[];
};

export default function GroupCard({
  group,
  onClick,
}: {
  group: Group;
  onClick: () => void;
}) {
  return (
    <div
      className="list-item"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <strong>{group.name}</strong>
      <div style={{ fontSize: 14, color: "#555" }}>
        {group.members.length} participantes
      </div>
    </div>
  );
}