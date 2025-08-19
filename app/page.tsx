import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">🚀 Next.js + shadcn/ui</CardTitle>
          <CardDescription>
            Your modern web app boilerplate is ready!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">Next.js 15</Badge>
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Start building by editing <code className="bg-muted px-1 rounded">app/page.tsx</code>
          </div>
          <Button className="w-full" asChild>
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
              View shadcn/ui Docs
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
