import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components";
import { IHourlyExchangeVol } from "@/interfaces";

const chartConfig = {
  volume: {
    label: "Volume",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

type Props = {
  data: IHourlyExchangeVol;
};

const HourlyExchangeVol = ({ data }: Props) => {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart accessibilityLayer data={[data]}>
        <XAxis
          dataKey="time"
          tickLine={false}
          tickMargin={10}
          axisLine={true}
        />
        <YAxis
          dataKey="volume"
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="volume" fill="var(--color-volume)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default HourlyExchangeVol;
