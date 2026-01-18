'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ModeToggle} from "@/components/front-UI/theme/ModeToggle";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";


const Navbar = () => {
    const navItems = ["Home", "About", "Projects", "Contact"];
    return (
        <div>
            <nav className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="text-2xl font-bold tracking-tight">
                        <span className="text-cyan-400">Uttom</span> Kumar
                    </div>

                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => {
                            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`

                            return (
                                <Link
                                    key={item}
                                    href={route}
                                    className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                                >
                                    {item}
                                </Link>
                            );
                        })}

                    </div>

                    {/*--hide now -- Mode Toggler*/}
                    {/*<div className="flex items-center gap-4">*/}
                    {/*    <ModeToggle />*/}
                    {/*</div>*/}
                    <div className={"block md:hidden "}>
                        <Sheet>
                            <SheetTrigger asChild>
                                <button>
                                    <MenuIcon size={20} />
                                </button>
                            </SheetTrigger>
                            <SheetContent className={"bg-slate-950/70 backdrop-blur-xl"}>
                                <div className="items-center gap-8 flex flex-col spacey-4 py-10 ">
                                    {navItems.map((item) => {
                                        const route = item === "Home" ? "/" : `/${item.toLowerCase()}`

                                        return (
                                            <Link
                                                key={item}
                                                href={route}
                                                className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                                            >
                                                {item}
                                            </Link>
                                        );
                                    })}

                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;