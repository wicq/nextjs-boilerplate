import { PageHeader } from "@/components/dashboard/page-header"
import { CardGrid } from "@/components/dashboard/card-grid"
import { Section } from "@/components/dashboard/section"
import { SkeletonCard, SkeletonList } from "@/components/dashboard/skeleton-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        heading="Dashboard"
        text="Overview of your business metrics"
      />
      
      <CardGrid>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </CardGrid>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Section
            title="Recent Activity"
            description="Your most recent transactions and activities"
            card
          >
            <SkeletonList />
            <SkeletonList />
            <SkeletonList />
          </Section>
        </TabsContent>
      </Tabs>
    </div>
  )
} 