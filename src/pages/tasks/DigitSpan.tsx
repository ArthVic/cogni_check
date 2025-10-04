import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/ProgressBar";
import { Hash, Volume2, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SEQUENCES = [
  { forward: "2-8-5", backward: "5-8-2" },
  { forward: "6-1-9-4", backward: "4-9-1-6" },
  { forward: "3-7-2-8-1", backward: "1-8-2-7-3" }
];

export default function DigitSpan() {
  const navigate = useNavigate();
  const [currentSequence, setCurrentSequence] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [userInput, setUserInput] = useState("");
  const [showSequence, setShowSequence] = useState(false);
  const [results, setResults] = useState<Array<{forward: string, backward: string}>>([]);

  const getCurrentSequenceData = () => {
    const seq = SEQUENCES[currentSequence];
    return direction === "forward" ? seq.forward : seq.backward;
  };

  const playSequence = () => {
    setShowSequence(true);
    console.log("Playing sequence audio:", getCurrentSequenceData());
    
    // Hide sequence after 3 seconds
    setTimeout(() => {
      setShowSequence(false);
    }, 3000);
  };

  const handleSubmit = () => {
    const newResults = [...results];
    if (!newResults[currentSequence]) {
      newResults[currentSequence] = { forward: "", backward: "" };
    }
    newResults[currentSequence][direction] = userInput;
    setResults(newResults);

    if (direction === "forward") {
      setDirection("backward");
      setUserInput("");
    } else {
      if (currentSequence < SEQUENCES.length - 1) {
        setCurrentSequence(prev => prev + 1);
        setDirection("forward");
        setUserInput("");
      } else {
        // All sequences completed
        navigate('/task/completion');
      }
    }
    setShowSequence(false);
  };

  const formatSequence = (sequence: string) => {
    return sequence.split('-').join(' - ');
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-4">
        <ProgressBar current={4} total={5} className="mb-8" />
        
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Hash className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Number Sequences</h1>
            <p className="text-muted-foreground">
              Listen to the number sequence and repeat it {direction}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-accent/30 border-accent">
              <div className="flex items-center gap-2 mb-3">
                {direction === "forward" ? (
                  <Hash className="h-5 w-5 text-primary" />
                ) : (
                  <RotateCcw className="h-5 w-5 text-primary" />
                )}
                <h3 className="font-semibold">
                  Sequence {currentSequence + 1} - {direction === "forward" ? "Forward" : "Backward"}
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {direction === "forward" 
                  ? "Repeat the numbers in the same order you heard them"
                  : "Repeat the numbers in reverse order"
                }
              </p>

              <Button 
                variant="audio" 
                size="sm" 
                onClick={playSequence}
                className="mb-4"
              >
                <Volume2 className="h-4 w-4" />
                Play Number Sequence
              </Button>

              {showSequence && (
                <Card className="p-4 text-center bg-primary/5 border-primary/20">
                  <div className="text-2xl font-bold text-primary">
                    {formatSequence(getCurrentSequenceData())}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Listen carefully - this will disappear soon
                  </p>
                </Card>
              )}
            </Card>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Enter the sequence {direction}:
              </label>
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={direction === "forward" ? "e.g., 2-8-5" : "e.g., 5-8-2"}
                className="text-lg text-center"
              />
              <p className="text-xs text-muted-foreground">
                Use dashes (-) to separate numbers
              </p>
            </div>

            <div className="bg-accent/30 p-4 rounded-lg border border-accent">
              <p className="text-sm text-muted-foreground">
                Progress: Sequence {currentSequence + 1} of {SEQUENCES.length} 
                ({direction})
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/task/word-recall')}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                variant="medical" 
                size="lg"
                onClick={handleSubmit}
                disabled={!userInput.trim()}
                className="flex-1"
              >
                {currentSequence === SEQUENCES.length - 1 && direction === "backward" 
                  ? "Finish Tasks" 
                  : "Next"
                }
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}