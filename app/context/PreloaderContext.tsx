"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type PreloaderContextValue = {
  isComplete: boolean;
  complete: () => void;
};

const PreloaderContext = createContext<PreloaderContextValue>({
  isComplete: false,
  complete: () => {},
});

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isComplete, setIsComplete] = useState(false);
  const complete = useCallback(() => setIsComplete(true), []);

  return (
    <PreloaderContext.Provider value={{ isComplete, complete }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
