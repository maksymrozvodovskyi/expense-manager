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
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    if (isOpen && initial) {
      setTitle(initial.title);
      setTarget(String(initial.target));
      setDeadline(initial.deadline);
    }

    if (!isOpen && !initial) {
      setTitle("");
      setTarget("");
      setDeadline("");
    }
  };

  const handleSubmit = () => {
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
      <DialogContent
        className="
          relative
          flex flex-col
          gap-4
          p-6
          rounded-xl
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {editMode ? "Edit Goal" : "Create Goal"}
          </DialogTitle>
        </DialogHeader>

        <Input
          placeholder="Goal title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          placeholder="Target amount"
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />

        <Input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <Button
          className="
            w-full
          "
          onClick={handleSubmit}
        >
          {editMode ? "Save Changes" : "Save"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
