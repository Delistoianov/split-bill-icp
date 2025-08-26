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
        border: "1px solid #ccc",
        margin: 8,
        padding: 12,
        borderRadius: 8,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <strong>{group.name}</strong>
      <div style={{ fontSize: 12, color: "#666" }}>
        {group.members.length} participantes
      </div>
    </div>
  );
}