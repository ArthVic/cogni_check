import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProgressBar } from "@/components/ProgressBar";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Demographics() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    education: "",
    region: "",
    primaryLanguage: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/task/speech-intro');
  };

  const isFormValid = formData.age && formData.education && formData.region && formData.primaryLanguage;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-4">
        <ProgressBar current={1} total={5} className="mb-8" />
        
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Basic Information</h1>
            <p className="text-muted-foreground">
              This helps us provide more accurate assessment results
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Select value={formData.age} onValueChange={(value) => setFormData(prev => ({ ...prev, age: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-29">18-29 years</SelectItem>
                  <SelectItem value="30-39">30-39 years</SelectItem>
                  <SelectItem value="40-49">40-49 years</SelectItem>
                  <SelectItem value="50-59">50-59 years</SelectItem>
                  <SelectItem value="60-69">60-69 years</SelectItem>
                  <SelectItem value="70-79">70-79 years</SelectItem>
                  <SelectItem value="80+">80+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Highest Education Level</Label>
              <Select value={formData.education} onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary school</SelectItem>
                  <SelectItem value="secondary">Secondary school</SelectItem>
                  <SelectItem value="higher-secondary">Higher secondary</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate degree</SelectItem>
                  <SelectItem value="postgraduate">Postgraduate degree</SelectItem>
                  <SelectItem value="other">Other/Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Geographic Region</Label>
              <Select value={formData.region} onValueChange={(value) => setFormData(prev => ({ ...prev, region: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north-india">North India</SelectItem>
                  <SelectItem value="south-india">South India</SelectItem>
                  <SelectItem value="east-india">East India</SelectItem>
                  <SelectItem value="west-india">West India</SelectItem>
                  <SelectItem value="central-india">Central India</SelectItem>
                  <SelectItem value="northeast-india">Northeast India</SelectItem>
                  <SelectItem value="other">Other/International</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="primaryLanguage">Primary Language</Label>
              <Select value={formData.primaryLanguage} onValueChange={(value) => setFormData(prev => ({ ...prev, primaryLanguage: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select primary language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="tamil">Tamil</SelectItem>
                  <SelectItem value="telugu">Telugu</SelectItem>
                  <SelectItem value="bengali">Bengali</SelectItem>
                  <SelectItem value="marathi">Marathi</SelectItem>
                  <SelectItem value="gujarati">Gujarati</SelectItem>
                  <SelectItem value="kannada">Kannada</SelectItem>
                  <SelectItem value="malayalam">Malayalam</SelectItem>
                  <SelectItem value="punjabi">Punjabi</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              disabled={!isFormValid}
              variant="medical" 
              size="lg" 
              className="w-full"
            >
              Continue to Assessment
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}