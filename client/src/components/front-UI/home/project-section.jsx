import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import { ExternalLink} from "lucide-react";

const ProjectSection = () => {
    return (
        <div>
            <section id="projects" className="border-t border-slate-800/60 bg-slate-950/40 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            My <span className="text-cyan-400">Projects</span>
                        </h2>
                        <Button variant="outline"
                                className="gap-2 border-cyan-600/40 text-cyan-400 hover:bg-cyan-950/30">
                            View All Projects <ExternalLink className="h-4 w-4"/>
                        </Button>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {[
                            {title: "Task Management App", desc: "Team task assignments & progress tracking"},
                            {title: "Video Progress Tracking", desc: "Pause/Resume & analytics dashboard"},
                            {title: "Real-Time Chat", desc: "Socket.IO powered instant messaging"},
                        ].map((project) => (
                            <Card key={project.title}
                                  className="group overflow-hidden border-slate-700/50 bg-slate-900/40 transition-all hover:border-cyan-700/50">
                                <CardContent className="p-0">
                                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-400">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-slate-400">{project.desc}</p>
                                        <div className="mt-6 flex gap-3">
                                            <Button variant="secondary" size="sm">Live Demo</Button>
                                            <Button variant="ghost" size="sm"
                                                    className="text-slate-400 hover:text-cyan-400">
                                                Code
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectSection;