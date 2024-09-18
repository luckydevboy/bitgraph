import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { IOhlvcH } from "@/interfaces";
import { UseQueryResult } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const chartConfig = {
  low: {
    label: "Low",
    color: "#60a5fa",
  },
  high: {
    label: "High",
    color: "#2563eb",
  },
  average: {
    label: "Average",
    color: "#10b981",
  },
} satisfies ChartConfig;

type Props = {
  result: UseQueryResult<IOhlvcH[], Error>;
  className?: string;
};

const HourlyPairOhlcv = ({ result, className }: Props) => {
  const { data, isLoading, isError, error } = result;

  return (
    <Card className={className}>
      <CardHeader></CardHeader>
      <CardContent>
        {/* TODO: Use Skeleton component */}
        {isLoading && <>Loading...</>}

        {data && (
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="time"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis
                dataKey="average"
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="low" fill="var(--color-low)" radius={4} />
              <Bar dataKey="average" fill="var(--color-average)" radius={4} />
              <Bar dataKey="high" fill="var(--color-high)" radius={4} />
            </BarChart>
          </ChartContainer>
        )}

        {isError && <code>{error?.message}</code>}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default HourlyPairOhlcv;
