import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Brain, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/30 p-4">
      <div className="container mx-auto max-w-4xl pt-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">CogniCheck</h1>
          </div>
          <LanguageSelector />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quick Memory Assessment
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A simple, private screening tool to assess cognitive health. 
            Takes just 10-15 minutes and provides immediate insights.
          </p>
          
          <Button 
            variant="medical" 
            size="xl"
            onClick={() => navigate('/auth')}
            className="mb-8"
          >
            Start Memory Check
          </Button>

          <p className="text-sm text-muted-foreground">
            Confidential • Evidence-based • Accessible
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-medium transition-shadow">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Private & Secure</h3>
            <p className="text-sm text-muted-foreground">
              Your data stays private. No information stored without consent.
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-medium transition-shadow">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quick Assessment</h3>
            <p className="text-sm text-muted-foreground">
              Evidence-based screening in under 15 minutes.
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-medium transition-shadow">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Immediate Results</h3>
            <p className="text-sm text-muted-foreground">
              Get risk assessment and next steps right away.
            </p>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card className="p-4 bg-accent/50 border-accent">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Important:</strong> This tool is for screening purposes only and does not replace professional medical diagnosis. 
            Consult healthcare professionals for comprehensive evaluation.
          </p>
        </Card>
      </div>
    </div>
  );
}