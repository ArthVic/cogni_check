import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { Mic, Square, Play, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SpeechRecord() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    // Mock recording start
    console.log("Starting recording...");
  };

  const stopRecording = () => {
    setIsRecording(false);
    setHasRecorded(true);
    // Mock recording stop
    console.log("Recording stopped");
  };

  const playInstructions = () => {
    console.log("Playing audio instructions...");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-4">
        <ProgressBar current={2} total={5} className="mb-8" />
        
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Describe the Picture</h1>
            <p className="text-muted-foreground">
              Look at the image below and describe what you see in detail
            </p>
          </div>

          {/* Mock Picture */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">🏞️</div>
                <p className="text-sm">Scenic landscape with mountains, lake, and trees</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-4 bg-accent/30 border-accent">
              <p className="text-sm text-muted-foreground mb-3">
                Describe everything you see in the picture. Talk about the scenery, colors, objects, 
                and any activities. Speak for 1-2 minutes.
              </p>
              
              <Button 
                variant="audio" 
                size="sm" 
                onClick={playInstructions}
              >
                <Volume2 className="h-4 w-4" />
                Replay Instructions
              </Button>
            </Card>

            {/* Recording Controls */}
            <div className="text-center space-y-4">
              {isRecording && (
                <div className="text-lg font-semibold text-destructive">
                  Recording: {formatTime(recordingTime)}
                </div>
              )}

              <div className="flex justify-center">
                {!isRecording ? (
                  <Button
                    variant="record"
                    size="iconLg"
                    onClick={startRecording}
                    disabled={hasRecorded}
                  >
                    {hasRecorded ? <Play className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                  </Button>
                ) : (
                  <Button
                    variant="destructive"
                    size="iconLg"
                    onClick={stopRecording}
                  >
                    <Square className="h-6 w-6" />
                  </Button>
                )}
              </div>

              <p className="text-sm text-muted-foreground">
                {!hasRecorded && !isRecording && "Tap the microphone to start recording"}
                {isRecording && "Tap the square to stop recording"}
                {hasRecorded && !isRecording && "Recording completed"}
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/task/speech-intro')}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                variant="medical" 
                size="lg"
                disabled={!hasRecorded}
                onClick={() => navigate('/task/memory-intro')}
                className="flex-1"
              >
                Continue
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}