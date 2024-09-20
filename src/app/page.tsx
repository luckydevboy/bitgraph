"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  HourlyExchangeVolCarousel,
  HourlyPairOhlcv,
} from "@/components";
import { useGetOhlcvHourly } from "@/api";

export default function Home() {
  const result = useGetOhlcvHourly();

  return (
    <div className="grid grid-cols-12 grid-rows-4 gap-6 p-6 h-svh">
      <HourlyPairOhlcv result={result} className="col-span-9 row-span-3" />
      <HourlyExchangeVolCarousel className="col-span-3 row-span-3" />
      <Card className="col-span-12 row-span-1">
        <CardHeader></CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ipsum.
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
