"use client"

import Sidebar from "@/components/Slidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 bg-muted overflow-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Welcome, Admin!</h1>
          <Button variant="destructive" onClick={() => router.push("/")}>Logout</Button>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>  
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">123</p>
              <Badge className="mt-2">Active</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">$4,500</p>
              <Badge variant="outline" className="mt-2">Updated</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Server Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">Online</p>
              <Badge variant="default" className="mt-2">All systems operational</Badge>
            </CardContent>
          </Card>
        </section>

        <section className="bg-background p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔️ User created a new post</li>
            <li>🛠 Server backup completed</li>
            <li>📈 Monthly report generated</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
