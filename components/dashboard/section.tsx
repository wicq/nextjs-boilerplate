import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  children: React.ReactNode
  card?: boolean
}

export function Section({
  title,
  description,
  children,
  card,
  className,
  ...props
}: SectionProps) {
  const Content = () => (
    <div {...props} className={cn("grid gap-4", className)}>
      {(title || description) && (
        <div className="grid gap-1">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <Separator />
      {children}
    </div>
  )

  if (card) {
    return (
      <Card className="p-6">
        <Content />
      </Card>
    )
  }

  return <Content />
} 