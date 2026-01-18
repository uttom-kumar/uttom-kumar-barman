import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import HeroImg from "../../../../public/uttom-kumar.png";
import {Github, Linkedin, Mail, Code, ExternalLink} from "lucide-react";

const AboutSection = () => {
    return (
        <div>
            <section id="about" className="border-t border-slate-800/60 bg-slate-950/40 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                        About <span className="text-cyan-400">Me</span>
                    </h2>

                    <div className="mt-12 grid gap-12 lg:grid-cols-2">
                        <div className="space-y-6 text-slate-300">
                            <p className="text-lg leading-relaxed">
                                I am a <strong className="text-cyan-400">MERN Stack developer</strong> with a passion
                                for solving challenging problems.
                            </p>
                            <p className="text-lg leading-relaxed">
                                I specialize in building full-stack web applications with the MERN stack — MongoDB,
                                Express.js, React.js, and Node.js.
                            </p>
                            <p className="text-lg leading-relaxed">
                                I enjoy fixing bugs, optimizing performance, and creating efficient & scalable
                                solutions.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-4">
                                <Badge variant="secondary" className="bg-cyan-950 text-cyan-300 hover:bg-cyan-900">
                                    React
                                </Badge>
                                <Badge variant="secondary" className="bg-teal-950 text-teal-300 hover:bg-teal-900">
                                    Node.js
                                </Badge>
                                <Badge variant="secondary" className="bg-amber-950 text-amber-300 hover:bg-amber-900">
                                    MongoDB
                                </Badge>
                                <Badge variant="secondary"
                                       className="bg-purple-950 text-purple-300 hover:bg-purple-900">
                                    TypeScript
                                </Badge>
                            </div>
                        </div>

                        {/* Debug joke card */}
                        <Card className="border-slate-700/60 bg-slate-900/60 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-amber-400">
                                        <Code className="h-6 w-6"/>
                                        <span className="font-mono text-sm">console.debug("hero moment")</span>
                                    </div>
                                    <div className="rounded-md bg-slate-950 p-4 font-mono text-sm text-red-400">
                                        Error on line 1969: Cannot read property &apos;taut&apos; of undefined
                                    </div>
                                    <div className="flex items-center gap-2 text-green-400">
                                        <span className="text-lg">✓</span>
                                        <span>Fixed after 3 Red Bulls & debugging!</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;