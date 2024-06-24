"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex items-center dark:text-white">
        <Switch onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
      </div>
    </>
  );
}
