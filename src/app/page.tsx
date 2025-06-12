"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/toggle-button"
export default function Home() {
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-background p-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        
        <h1 className="text-4xl font-bold tracking-tight">Welcome to the Admin Dashboard Portal</h1>
        <p className="text-muted-foreground text-lg">
          Manage your application with ease. Secure access for admins and users.
        </p>
       <ModeToggle/>
        <div className="flex gap-4 justify-center mt-6">
          <Button onClick={() => router.push("/login")}>Admin Login</Button>
          <Button variant="outline" onClick={() => router.push("/")}>User Access</Button>
        </div>
      </section>

      {/* Example Component Section */}
      <section className="w-full max-w-3xl mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Sample Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>This is a reusable card from shadcn/ui, used to display content.</p>
            <Badge variant="default">Example Badge</Badge>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-muted-foreground text-center">
        © {year} Admin Dashboard Portal. All rights reserved.
      </footer>
    </main>
  )
}
