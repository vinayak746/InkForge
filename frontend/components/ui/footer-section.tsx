"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, Moon, Sun } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div  id="about" className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#features" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#features" className="block transition-colors hover:text-primary">
                Features
              </a>
              <a href="#discover" className="block transition-colors hover:text-primary">
                Discover
              </a>
              <a href="#testimonials" className="block transition-colors hover:text-primary">
                Testimonials
              </a>
              <a href="#about" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>
            <div className="mb-6 flex space-x-4">
  {/* GitHub */}
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="https://github.com/thakurRohi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>View my GitHub</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</div>

            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 By Rohit Thakur. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }