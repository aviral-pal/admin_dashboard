"use client"

import Sidebar from "@/components/Slidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 bg-muted overflow-auto">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Welcome, Admin 👋</h1>
          <p className="text-muted-foreground">Here’s what’s happening today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>123 Active Users</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>$4,500 this month</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Server Status</CardTitle>
            </CardHeader>
            <CardContent>All systems operational</CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
