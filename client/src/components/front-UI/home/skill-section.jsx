import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const SkillSection = () => {
    return (
        <div>
            <section id="skills" className="border-t border-slate-800/60 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                        My <span className="text-cyan-400">Skills</span>
                    </h2>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "Frontend",
                                color: "cyan",
                                items: ["React", "Next.js", "Tailwind", "Redux", "Zustand"]
                            },
                            {
                                title: "Backend",
                                color: "teal",
                                items: ["Node.js", "Express", "NestJS", "REST", "GraphQL"]
                            },
                            {title: "Database", color: "amber", items: ["MongoDB", "PostgreSQL", "Redis", "Prisma"]},
                            {
                                title: "Tools & Others",
                                color: "purple",
                                items: ["Git", "Docker", "CI/CD", "Socket.IO", "TypeScript"]
                            },
                        ].map((category) => (
                            <Card key={category.title} className="border-slate-700/50 bg-slate-900/40">
                                <CardContent className="p-6">
                                    <h3 className={`mb-4 text-xl font-semibold text-${category.color}-400`}>{category.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill) => (
                                            <Badge key={skill} variant="outline"
                                                   className="border-slate-600 text-slate-300">
                                                {skill}
                                            </Badge>
                                        ))}
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

export default SkillSection;