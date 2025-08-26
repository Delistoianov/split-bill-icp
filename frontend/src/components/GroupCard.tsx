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
      style={{
        border: "1px solid #eee",
        padding: "16px",
        margin: "8px 0",
        borderRadius: "var(--border-radius)",
        cursor: "pointer",
        backgroundColor: "#fafafa"
      }}
      onClick={onClick}
    >
      <strong>{group.name}</strong>
      <div style={{ fontSize: 14, color: "#555" }}>
        {group.members.length} participantes
      </div>
    </div>
  );
}