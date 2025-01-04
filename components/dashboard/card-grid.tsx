import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  dense?: boolean
}

export function CardGrid({ 
  children, 
  dense,
  className,
  ...props 
}: CardGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        dense ? "md:grid-cols-4" : "md:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  description?: string
  icon?: React.ReactNode
}

export function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold">{value}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  )
} 