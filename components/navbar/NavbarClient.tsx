"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import { menu, close } from "../../assets";
import { navLinks } from "../../constants";

const NavbarClient = () => {
    gsap.registerPlugin(ScrollToPlugin);

    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [pathname, setPathname] = useState("/");

    useEffect(() => {
        setPathname(window.location.pathname);

        const handlePopState = () => setPathname(window.location.pathname);
        window.addEventListener("popstate", handlePopState);

        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500 || (pathname === "/blog" && window.scrollY > 2));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    useEffect(() => {
        if (active === "blog") window.location.href = `/${active}`;
        else if (active) window.location.href = `/#${active}`;
    }, [active]);

    return (
        <ReactLenis root>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <Image
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                />
                {toggle && (
                    <div className="p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] w-[50%] z-10 rounded-xl">
                        <ul className="list-none flex flex-col gap-4">
                            {navLinks.map((nav: { id: string, title: string }) => (
                                <li
                                    key={nav.id}
                                    className="font-medium text-[16px] text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400"
                                    onClick={() => {
                                        setToggle(false);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </ReactLenis>
    );
};

export default NavbarClient;
