import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const FoodAnalyzer = () => {
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    toast({
      title: "Coming Soon",
      description: "Food analysis feature will be available soon!",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Food Analyzer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input type="file" onChange={handleFileUpload} accept="image/*" />
        <Button className="w-full">Analyze Food</Button>
      </CardContent>
    </Card>
  );
};