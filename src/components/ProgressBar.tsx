import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={cn("w-full bg-progress-bg rounded-full h-2", className)}>
      <div
        className="bg-progress-fill h-2 rounded-full transition-all duration-600 ease-out animate-progress-fill"
        style={{ 
          width: `${percentage}%`,
          '--progress-width': `${percentage}%` 
        } as React.CSSProperties}
      />
      <div className="mt-2 text-sm text-muted-foreground text-center">
        Task {current} of {total}
      </div>
    </div>
  );
}