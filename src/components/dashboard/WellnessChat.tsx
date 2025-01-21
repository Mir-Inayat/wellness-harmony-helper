import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const WellnessChat = () => {
  const [message, setMessage] = useState("");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Wellness Chat</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[200px] overflow-y-auto border rounded-md p-4">
          <p className="text-muted-foreground">Chat coming soon...</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
};