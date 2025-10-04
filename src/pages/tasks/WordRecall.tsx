import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/ProgressBar";
import { Brain, Eye, EyeOff, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WORDS = ["Apple", "Table", "Ocean", "Guitar", "Mountain"];

export default function WordRecall() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"study" | "recall">("study");
  const [studyTime, setStudyTime] = useState(30);
  const [userWords, setUserWords] = useState(["", "", "", "", ""]);
  const [showWords, setShowWords] = useState(true);

  useEffect(() => {
    if (phase === "study" && studyTime > 0) {
      const timer = setTimeout(() => setStudyTime(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (phase === "study" && studyTime === 0) {
      setPhase("recall");
      setShowWords(false);
    }
  }, [phase, studyTime]);

  const playWords = () => {
    console.log("Playing words audio...");
  };

  const handleWordChange = (index: number, value: string) => {
    setUserWords(prev => {
      const newWords = [...prev];
      newWords[index] = value;
      return newWords;
    });
  };

  const handleSubmit = () => {
    // Store results for later use
    console.log("Word recall results:", userWords);
    navigate('/task/digit-span');
  };

  if (phase === "study") {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-2xl pt-4">
          <ProgressBar current={3} total={5} className="mb-8" />
          
          <Card className="p-8 animate-fade-in">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Word List - Study Phase</h1>
              <p className="text-muted-foreground">
                Study these words carefully. You'll be asked to recall them next.
              </p>
            </div>

            <Card className="p-6 bg-accent/30 border-accent mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Study Time Remaining:</h3>
                <div className="text-2xl font-bold text-primary">{studyTime}s</div>
              </div>
              
              <Button 
                variant="audio" 
                size="sm" 
                onClick={playWords}
                className="mb-4"
              >
                <Volume2 className="h-4 w-4" />
                Hear Words Read Aloud
              </Button>
            </Card>

            {showWords && (
              <Card className="p-8 text-center mb-6">
                <div className="grid grid-cols-1 gap-4 max-w-xs mx-auto">
                  {WORDS.map((word, index) => (
                    <div 
                      key={index}
                      className="text-2xl font-semibold p-4 bg-primary/5 rounded-lg border"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            <div className="text-center">
              <Button 
                variant="ghost"
                onClick={() => setShowWords(!showWords)}
                className="flex items-center gap-2"
              >
                {showWords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showWords ? "Hide Words" : "Show Words"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-4">
        <ProgressBar current={3} total={5} className="mb-8" />
        
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Word Recall</h1>
            <p className="text-muted-foreground">
              Write down as many words as you can remember from the list
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {userWords.map((word, index) => (
              <div key={index} className="space-y-1">
                <label className="text-sm font-medium">Word {index + 1}:</label>
                <Input
                  value={word}
                  onChange={(e) => handleWordChange(index, e.target.value)}
                  placeholder="Enter word here..."
                  className="text-lg"
                />
              </div>
            ))}
          </div>

          <div className="bg-accent/30 p-4 rounded-lg border border-accent mb-6">
            <p className="text-sm text-muted-foreground">
              Don't worry if you can't remember all the words. Just write down what you can recall.
            </p>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/task/memory-intro')}
              className="flex-1"
            >
              Back
            </Button>
            <Button 
              variant="medical" 
              size="lg"
              onClick={handleSubmit}
              className="flex-1"
            >
              Continue
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}