import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { Volume2, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SpeechIntro() {
  const navigate = useNavigate();

  const playInstructions = () => {
    // Mock audio playback
    console.log("Playing audio instructions...");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-4">
        <ProgressBar current={2} total={5} className="mb-8" />
        
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Speech Assessment</h1>
            <p className="text-muted-foreground">
              We'll ask you to speak about a simple topic to assess speech patterns
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-accent/30 border-accent">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Instructions
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• You will be asked to describe a picture for 1-2 minutes</p>
                <p>• Speak naturally and describe what you see</p>
                <p>• There are no right or wrong answers</p>
                <p>• Take your time and be as detailed as you'd like</p>
              </div>
              
              <Button 
                variant="audio" 
                size="sm" 
                onClick={playInstructions}
                className="mt-4"
              >
                <Volume2 className="h-4 w-4" />
                Play Audio Instructions
              </Button>
            </Card>

            <div className="bg-warning-light p-4 rounded-lg border border-warning/20">
              <p className="text-sm text-warning-foreground">
                <strong>Privacy Note:</strong> Your speech will be recorded for analysis. 
                The recording is processed securely and not stored permanently.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/demographics')}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                variant="medical" 
                size="lg"
                onClick={() => navigate('/task/speech-record')}
                className="flex-1"
              >
                I'm Ready
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}