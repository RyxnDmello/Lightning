import { useState } from "react";

export default function useFilterSearch() {
  const [prompt, setPrompt] = useState<string | undefined>(undefined);

  const onSetPrompt = (value: string) => setPrompt(value);

  return { prompt, onSetPrompt };
}
