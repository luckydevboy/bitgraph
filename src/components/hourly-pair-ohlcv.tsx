import { UseQueryResult } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components";
import { IOhlcvH } from "@/interfaces";

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
  result: UseQueryResult<IOhlcvH[], Error>;
  className?: string;
  actives: ("average" | "high" | "low")[];
};

const HourlyPairOhlcv = ({ result, className, actives }: Props) => {
  const { data, isLoading, isError, error } = result;

  return (
    <Card className={className}>
      <CardHeader></CardHeader>
      <CardContent className="h-[calc(100%-24px-48px)]">
        {/* TODO: Use Skeleton component */}
        {isLoading && <>Loading...</>}

        {data && (
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="time"
                tickLine={true}
                tickMargin={10}
                axisLine={true}
              />
              <YAxis
                dataKey="average"
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              {actives.map((item) => (
                <Bar
                  key={item}
                  dataKey={item}
                  fill={`var(--color-${item})`}
                  radius={4}
                />
              ))}
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
