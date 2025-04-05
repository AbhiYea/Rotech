import { create } from "zustand";

const useMessageState = create((set) => ({
  religious: [],
  health: [],
  food: [],
  govt: [],
  amazon: [],
  social: [],

  addMessage: (mode, message) =>
    set((state) => ({
      [mode]: [...state[mode], message],
    })),

  clearMessages: (mode) =>
    set(() => ({
      [mode]: [],
    })),
}));

export default useMessageState;
