import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const GoalTracker = () => {
  const [goal, setGoal] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Goal Added",
      description: "Your goal has been tracked successfully!",
    });
    setGoal("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Goal Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Enter your goal..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <Button onClick={handleSubmit} className="w-full">
          Add Goal
        </Button>
      </CardContent>
    </Card>
  );
};