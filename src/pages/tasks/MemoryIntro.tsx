import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { Brain, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MemoryIntro() {
  const navigate = useNavigate();

  const playInstructions = () => {
    console.log("Playing audio instructions...");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-4">
        <ProgressBar current={3} total={5} className="mb-8" />
        
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Memory Tasks</h1>
            <p className="text-muted-foreground">
              Simple exercises to assess different types of memory
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-accent/30 border-accent">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                What to Expect
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• <strong>Word List:</strong> Remember a list of words (immediate recall)</p>
                <p>• <strong>Shape Matching:</strong> Match patterns and shapes</p>
                <p>• <strong>Number Sequence:</strong> Repeat number sequences</p>
                <p>• <strong>Delayed Recall:</strong> Remember the word list from earlier</p>
                <p>• <strong>Orientation:</strong> Questions about time and place</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl mb-2">📝</div>
                <h4 className="font-medium">Take Your Time</h4>
                <p className="text-xs text-muted-foreground">No rush - think carefully</p>
              </Card>
              
              <Card className="p-4 text-center">
                <div className="text-2xl mb-2">💭</div>
                <h4 className="font-medium">Best Effort</h4>
                <p className="text-xs text-muted-foreground">Just do your best</p>
              </Card>
            </div>

            <div className="bg-success-light p-4 rounded-lg border border-success/20">
              <p className="text-sm text-success-foreground">
                <strong>Remember:</strong> These are normal cognitive exercises. 
                Everyone performs differently, and there are no "failing" scores.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/task/speech-record')}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                variant="medical" 
                size="lg"
                onClick={() => navigate('/task/word-recall')}
                className="flex-1"
              >
                Start Memory Tasks
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}