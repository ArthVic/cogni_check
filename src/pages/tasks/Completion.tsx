import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { CheckCircle, Clock, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Completion() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate processing time
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setProcessing(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (processing) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-2xl pt-4">
          <ProgressBar current={5} total={5} className="mb-8" />
          
          <Card className="p-8 animate-fade-in text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-primary animate-spin" />
            </div>
            
            <h1 className="text-2xl font-bold mb-4">Processing Your Assessment</h1>
            <p className="text-muted-foreground mb-8">
              Analyzing your responses and generating risk summary...
            </p>

            <div className="space-y-4">
              <div className="w-full bg-progress-bg rounded-full h-3">
                <div
                  className="bg-progress-fill h-3 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{progress}% Complete</p>
            </div>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p>✓ Speech patterns analyzed</p>
              <p>✓ Memory performance evaluated</p>
              <p>✓ Cognitive scores calculated</p>
              <p>{progress > 80 ? "✓" : "..."} Risk assessment generated</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-4">
        <ProgressBar current={5} total={5} className="mb-8" />
        
        <Card className="p-8 animate-fade-in text-center">
          <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-success" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Assessment Complete!</h1>
          <p className="text-muted-foreground mb-8">
            Your cognitive screening has been completed successfully. 
            Your risk summary is now ready for review.
          </p>

          <div className="space-y-4 mb-8">
            <Card className="p-4 bg-success-light border-success/20">
              <h3 className="font-semibold text-success-foreground mb-2">
                What happens next?
              </h3>
              <div className="text-sm text-success-foreground space-y-1">
                <p>• View your personalized risk assessment</p>
                <p>• See contributing factors and explanations</p>
                <p>• Get recommendations for next steps</p>
                <p>• Access your results anytime</p>
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <Button 
              variant="medical" 
              size="lg"
              onClick={() => navigate('/results')}
              className="w-full"
            >
              <FileText className="h-4 w-4" />
              View My Results
            </Button>
            
            <Button 
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full"
            >
              Return to Home
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Your results will remain confidential and secure
          </p>
        </Card>
      </div>
    </div>
  );
}