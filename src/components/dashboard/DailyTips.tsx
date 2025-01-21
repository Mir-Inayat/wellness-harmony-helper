import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DailyTips = () => {
  const tips = [
    "Stay hydrated throughout the day",
    "Take regular breaks while working",
    "Practice mindful breathing",
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Daily Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="text-muted-foreground">
              • {tip}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};