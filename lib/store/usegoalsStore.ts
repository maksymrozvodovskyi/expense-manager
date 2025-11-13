import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

export type Goal = {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
};

export type Workspace = "personal" | "family" | "office";

type GoalsState = {
  workspace: Workspace;
  goals: Record<Workspace, Goal[]>;

  setWorkspace: (ws: Workspace) => void;
  addGoal: (goal: Omit<Goal, "id" | "current">) => void;
  updateGoal: (goal: Goal) => void;
  deleteGoal: (id: string) => void;
  updateProgress: (id: string, value: number) => void;
};

export const useGoalsStore = create<GoalsState>()(
  persist(
    (set, get) => ({
      workspace: "personal",

      goals: {
        personal: [],
        family: [],
        office: [],
      },

      setWorkspace: (ws) => set({ workspace: ws }),

      addGoal: (goalData) => {
        const { workspace, goals } = get();
        const newGoal: Goal = {
          id: uuid(),
          current: 0,
          ...goalData,
        };

        set({
          goals: {
            ...goals,
            [workspace]: [...goals[workspace], newGoal],
          },
        });
      },

      updateGoal: (updated) => {
        const { workspace, goals } = get();

        set({
          goals: {
            ...goals,
            [workspace]: goals[workspace].map((g) =>
              g.id === updated.id ? updated : g
            ),
          },
        });
      },

      deleteGoal: (id) => {
        const { workspace, goals } = get();

        set({
          goals: {
            ...goals,
            [workspace]: goals[workspace].filter((g) => g.id !== id),
          },
        });
      },

      updateProgress: (id, value) => {
        const { workspace, goals } = get();

        set({
          goals: {
            ...goals,
            [workspace]: goals[workspace].map((g) =>
              g.id === id ? { ...g, current: g.current + value } : g
            ),
          },
        });
      },
    }),

    {
      name: "goals-storage",
    }
  )
);
