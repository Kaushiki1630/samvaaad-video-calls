import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("samvaaad-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("samvaaad-theme", theme);
    set({ theme });
  },
}));