"use client"

import { useForm, ValidationError } from '@formspree/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Loader2, CheckCircle, Mail } from "lucide-react"

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xovzdpaq")

  if (state.succeeded) {
    return (
      <div className="container max-w-2xl py-12 mx-auto">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="space-y-4 py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold">Message Sent!</h2>
              <p className="text-muted-foreground">
                Thank you for your message. We'll get back to you soon.
              </p>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
                className="mt-4"
              >
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-2xl mx-auto py-12">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Contact</CardTitle>
          <CardDescription className="text-lg">
            For enquiries ☒ evalyc@gmail.com
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={state.submitting}
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-sm text-red-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  disabled={state.submitting}
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-sm text-red-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
                disabled={state.submitting}
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                required
                disabled={state.submitting}
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={state.submitting}
              size="lg"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Información de contacto adicional */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>evalyc@gmail.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}