// components/contact-section.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, User, MessageSquare } from "lucide-react"

const ContactPage = () => {
    return (
        <section id="contact" className="relative py-24 md:py-32 border-slate-800/60 bg-slate-950/40 overflow-hidden">
            {/* Background gradient + subtle noise */}
            <div className="absolute inset-0" />
            <div className="absolute inset-0 " />

            <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
                        <Mail className="h-4 w-4" />
                        Let's talk
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Get in <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Touch</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project idea, need help with your MERN stack app, or just want to connect?
                        Drop me a message — I usually reply within 24 hours.
                    </p>
                </div>

                {/* Main contact card */}
                <div className="max-w-2xl mx-auto">
                    <Card className="bg-slate-950/40">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-2xl">Send a Message</CardTitle>
                            <CardDescription className="text-base">
                                Fill in the form below and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            {/* Name + Email row */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                                        <User className="h-4 w-4 text-muted-foreground" />
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="name"
                                            placeholder="Enter Your Name"
                                            className="pl-2 bg-background/50 border-border/60 focus-visible:ring-primary/40 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="hello@gmail.com"
                                            className="pl-2 bg-background/50 border-border/60 focus-visible:ring-primary/40 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    placeholder="Project collaboration / Bug fixing help / Just saying hi"
                                    className="bg-background/50 border-border/60 focus-visible:ring-primary/40 transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Your Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Hi Uttom, I saw your portfolio and really liked your real-time chat project. Would love to discuss..."
                                    className="min-h-40 bg-background/50 border-border/60 focus-visible:ring-primary/40 transition-all resize-none"
                                />
                            </div>

                            {/* Submit area */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                                <p className="text-sm text-muted-foreground">
                                    Or email directly →{" "}
                                    <a
                                        href="mailto:uttom00781@gmail.com"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        uttom00781@gmail.com
                                    </a>
                                </p>

                                <Button
                                    size="lg"
                                    className="gap-2 min-w-45  bg-linear-to-r from-cyan-500 to-blue-600 shadow-lg shadow-primary/20 transition-all "
                                >
                                    Send Message
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Optional micro social proof / alternative contacts */}
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Usually reply in <strong className="text-foreground">24h</strong></span>
                        </div>
                        <span>•</span>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">Twitter / X</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage;