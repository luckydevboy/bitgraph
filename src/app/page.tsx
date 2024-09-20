"use client";

import {
  HourlyExchangeVolCarousel,
  HourlyPairOhlcv,
  Toggles,
} from "@/components";
import { useGetOhlcvHourly } from "@/api";
import { useState } from "react";

type State = "average" | "high" | "low";

export default function Home() {
  const result = useGetOhlcvHourly();
  const [actives, setActives] = useState<State[]>(["low", "high", "average"]);

  const handleClickToggles = (state: {
    average?: boolean;
    high?: boolean;
    low?: boolean;
  }) => {
    const key = Object.entries(state)[0][0] as State;
    const value = Object.entries(state)[0][1];

    if (value) {
      setActives([...actives, key]);
    } else {
      setActives(actives.filter((active) => active !== key));
    }
  };

  return (
    <div className="grid grid-cols-12 lg:grid-rows-4 gap-6 p-6 lg:h-svh">
      <HourlyPairOhlcv
        actives={actives}
        result={result}
        className="col-span-12 lg:col-span-9 row-span-3"
      />
      <HourlyExchangeVolCarousel className="col-span-12 lg:col-span-3 row-span-3" />
      <Toggles
        onClick={handleClickToggles}
        className="col-span-12 row-span-1"
        actives={actives}
      />
    </div>
  );
}
