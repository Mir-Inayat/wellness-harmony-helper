import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Mood tracked!",
      description: "Your mood has been recorded successfully.",
    });
    setMood("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Mood Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="How are you feeling today?"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <Button onClick={handleSubmit} className="w-full">
          Track Mood
        </Button>
      </CardContent>
    </Card>
  );
};