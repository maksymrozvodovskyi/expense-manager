"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Goal } from "../lib/types/goal";
import { v4 as uuid } from "uuid";

type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
  onSubmit: (goal: Goal) => void;
  initial?: Goal;
  editMode?: boolean;
};

export default function GoalModal({
  open,
  setOpen,
  onSubmit,
  initial,
  editMode,
}: Props) {
  const [goalState, setGoalState] = useState({
    title: "",
    target: "",
    deadline: "",
  });

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    if (isOpen && initial) {
      setGoalState({
        title: initial.title,
        target: String(initial.target),
        deadline: initial.deadline,
      });
      return;
    }

    if (!isOpen && !initial) {
      setGoalState({
        title: "",
        target: "",
        deadline: "",
      });
    }
  };

  const handleSubmit = () => {
    const { title, target, deadline } = goalState;

    if (!title || !target || !deadline) return;

    onSubmit({
      id: initial?.id ?? uuid(),
      title,
      target: Number(target),
      current: initial?.current ?? 0,
      deadline,
    });

    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="relative flex flex-col gap-4 p-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {editMode ? "Edit Goal" : "Create Goal"}
          </DialogTitle>
        </DialogHeader>

        <Input
          placeholder="Goal title"
          value={goalState.title}
          onChange={(e) =>
            setGoalState((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <Input
          placeholder="Target amount"
          type="number"
          value={goalState.target}
          onChange={(e) =>
            setGoalState((prev) => ({ ...prev, target: e.target.value }))
          }
        />

        <Input
          type="date"
          value={goalState.deadline}
          onChange={(e) =>
            setGoalState((prev) => ({ ...prev, deadline: e.target.value }))
          }
        />

        <Button className="w-full" onClick={handleSubmit}>
          {editMode ? "Save Changes" : "Save"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
