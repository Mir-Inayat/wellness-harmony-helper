import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const HealthAssessment = () => {
  const { toast } = useToast();

  const startAssessment = () => {
    toast({
      title: "Coming Soon",
      description: "Health assessment feature will be available soon!",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Health Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={startAssessment} className="w-full">
          Start Assessment
        </Button>
      </CardContent>
    </Card>
  );
};