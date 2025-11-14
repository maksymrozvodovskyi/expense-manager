"use client";

import { Button } from "@/components/ui/button";
import GoalCard from "@/components/GoalCard";
import GoalModal from "@/components/GoalModal";
import { useState } from "react";
import { Goal, useGoalsStore } from "@/lib/store/usegoalsStore";

export default function GoalsPage() {
  const { workspace, goals, setWorkspace, addGoal, updateGoal, deleteGoal } =
    useGoalsStore();

  const [open, setOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Goals — {workspace.toUpperCase()}</h1>

      <div className="flex gap-3">
        {(["personal", "family", "office"] as const).map((ws) => (
          <Button
            key={ws}
            variant={workspace === ws ? "default" : "outline"}
            onClick={() => setWorkspace(ws)}
            className="capitalize"
          >
            {ws}
          </Button>
        ))}
      </div>

      <Button onClick={() => setOpen(true)}>+ Add Goal</Button>

      <div className="grid mt-6 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goals[workspace].map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onEdit={() => setEditingGoal(goal)}
            onDelete={() => deleteGoal(goal.id)}
          />
        ))}
      </div>

      {open && <GoalModal open={open} setOpen={setOpen} onSubmit={addGoal} />}

      {editingGoal && (
        <GoalModal
          open={!!editingGoal}
          setOpen={() => setEditingGoal(null)}
          onSubmit={updateGoal}
          initial={editingGoal}
          editMode
        />
      )}
    </div>
  );
}
