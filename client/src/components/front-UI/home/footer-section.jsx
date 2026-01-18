import React from 'react';
import {Button} from "@/components/ui/button";
import {Github, Linkedin, Mail, } from "lucide-react";
import Link from "next/link";

const FooterSection = () => {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <section className="border-t border-slate-800/60 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready to build something <span className="text-cyan-400">awesome</span>?
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Let&apos;s turn your idea into a production-ready application.
                    </p>

                    <div className="mt-10 flex justify-center gap-6">
                        <Link href={'/contact'}  className="gap-2 text-lg px-5 py-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-600">
                            Hire Me Now
                        </Link>
                    </div>

                    <div className="mt-12 flex justify-center gap-8 text-slate-400">
                        <a href="#" className="hover:text-cyan-400"><Github/></a>
                        <a href="#" className="hover:text-cyan-400"><Linkedin/></a>
                        <a href="#" className="hover:text-cyan-400"><Mail/></a>
                    </div>
                    {/* Copyright Section */}
                    <div className="">
                        <p className="text-sm text-slate-400 pt-5">
                            © {startYear === currentYear ? startYear : `${startYear}–${currentYear}`} Uttom Kumar. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FooterSection;