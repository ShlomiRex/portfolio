import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative">
      <div
        className={cn(
          "animate-pulse rounded-md bg-muted overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0">
          <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </div>
  )
}

export { Skeleton }