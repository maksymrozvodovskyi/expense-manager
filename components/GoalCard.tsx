"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Pencil, Trash2 } from "lucide-react";
import { useGoalsStore } from "@/lib/store/usegoalsStore";
import { Goal } from "../lib/types/goal";

type Props = {
  goal: Goal;
  onEdit: () => void;
  onDelete: () => void;
};

export default function GoalCard({ goal, onEdit, onDelete }: Props) {
  const updateProgress = useGoalsStore((s) => s.updateProgress);

  const percent = Math.min((goal.current / goal.target) * 100, 100);

  return (
    <div
      className="
        relative
        flex flex-col
        gap-4
        p-5
        rounded-xl border
        bg-white dark:bg-neutral-900
        shadow-sm
      "
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{goal.title}</h3>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <Pencil className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={onDelete}>
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Target: <span className="font-medium">{goal.target} грн</span>
      </div>

      <Progress value={percent} />

      <div className="flex justify-between text-sm">
        <span>{goal.current} грн</span>
        <span className="font-medium">{percent.toFixed(0)}%</span>
      </div>

      <div className="text-xs text-gray-500">Deadline: {goal.deadline}</div>

      <Button
        size="sm"
        className="
          w-full
        "
        onClick={() => updateProgress(goal.id, 500)}
      >
        + Add 500 грн
      </Button>
    </div>
  );
}
