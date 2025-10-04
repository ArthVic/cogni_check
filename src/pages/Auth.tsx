import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"patient" | "caregiver">("patient");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    relationship: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app would validate credentials
    navigate('/consent');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 animate-fade-in">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome</h1>
          <p className="text-muted-foreground">
            Please provide some basic information to begin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Type Selection */}
          <div className="space-y-2">
            <Label>I am a:</Label>
            <Select value={userType} onValueChange={(value: "patient" | "caregiver") => setUserType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="patient">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Patient (taking the test)
                  </div>
                </SelectItem>
                <SelectItem value="caregiver">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4" />
                    Caregiver (helping someone)
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              {userType === "patient" ? "Your name" : "Patient's name"}
            </Label>
            <Input
              id="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            <p className="text-xs text-muted-foreground">
              For receiving results summary (optional)
            </p>
          </div>

          {/* Relationship (if caregiver) */}
          {userType === "caregiver" && (
            <div className="space-y-2">
              <Label htmlFor="relationship">Relationship to patient</Label>
              <Select value={formData.relationship} onValueChange={(value) => setFormData(prev => ({ ...prev, relationship: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spouse">Spouse/Partner</SelectItem>
                  <SelectItem value="child">Adult Child</SelectItem>
                  <SelectItem value="sibling">Sibling</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="professional">Healthcare Professional</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Button type="submit" variant="medical" size="lg" className="w-full">
            Continue to Assessment
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          All information is kept confidential and secure
        </p>
      </Card>
    </div>
  );
}