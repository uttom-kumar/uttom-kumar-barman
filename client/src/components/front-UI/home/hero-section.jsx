import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import HeroImg from "../../../../public/uttom-kumar.png";

import {Github, Linkedin, Mail, Code, ExternalLink} from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div>
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <div
                                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-sm text-cyan-400">
                <span className="relative flex h-2 w-2">
                  <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                                </span>
                                Available for freelance
                            </div>

                            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                Hello, I&apos;m <br/>
                                <span
                                    className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                  Uttom Kumar
                                </span>
                            </h1>

                            <p className="mt-4 text-xl text-slate-400">

                                Full-Stack <span className="font-semibold text-cyan-400">MERN</span> Developer
                            </p>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                                I solve tricky programming problems and build high-quality web applications with
                                MongoDB, Express.js, React.js, Node.js.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link href={'/contact'}
                                        className="text-md py-2 px-5 rounded-[5px] bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                                    Hire Me
                                </Link>
                                <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800">
                                    Download Resume
                                </Button>
                            </div>
                        </div>

                        {/* Right side hero image / illustration */}
                        <div className="relative mx-auto hidden max-w-md lg:block">
                            <div
                                className="relative aspect-square rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
                                {/* You can replace with your own image */}
                                <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10">
                                    &lt;/&gt;
                                </div>
                                <Image
                                    src={HeroImg} // ← replace with your image
                                    alt="Uttom Kumar - MERN Developer"
                                    width={500}
                                    height={500}
                                    className="w-[100%] h-[100%] relative z-10 rounded-xl object-cover shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;