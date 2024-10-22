"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-slate-900/20 dark:bg-slate-50/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full flex-1 transition-all rounded-full"
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
        background:
          "linear-gradient(#D25804, #fff0), repeating-linear-gradient(135deg, rgb(232,6,6) 0 7px, #0000 0 20px), #D25804",
      }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }