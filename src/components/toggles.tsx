import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Switch,
  Label,
} from "@/components";

type Props = {
  className?: string;
  onClick: (state: {
    average?: boolean;
    high?: boolean;
    low?: boolean;
  }) => void;
  actives: ("average" | "high" | "low")[];
};

const Toggles = ({ className, onClick, actives }: Props) => {
  return (
    <Card className={className}>
      <CardHeader></CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="high"
              checked={Boolean(actives.find((active) => active === "high"))}
              onClick={() =>
                onClick({
                  high: !actives.find((active) => active === "high"),
                })
              }
            />
            <Label htmlFor="high">Higher</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="average"
              checked={Boolean(actives.find((active) => active === "average"))}
              onClick={() =>
                onClick({
                  average: !actives.find((active) => active === "average"),
                })
              }
            />
            <Label htmlFor="average">Average</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="low"
              checked={Boolean(actives.find((active) => active === "low"))}
              onClick={() =>
                onClick({
                  low: !actives.find((active) => active === "low"),
                })
              }
            />
            <Label htmlFor="low">Lower</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Toggles;
