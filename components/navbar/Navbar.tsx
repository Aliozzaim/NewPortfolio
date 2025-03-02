"use server"
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../constants";
import GitHub from "../../assets/github-mark.svg";
import Linkedin from "../../assets/linkedin-svgrepo-com.svg";
import NavbarClient from "./NavbarClient";

async function Navbar() {
    return (
        <nav className="w-full z-[49] flex items-center py-5 fixed top-0 mx-auto bg-black px-4">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2">
                    <p className="text-[18px] font-bold  flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Ali Ozzaim &nbsp;
                        <span className="sm:block hidden"> | Full Stack Engineer</span>
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-[1.5rem] items-center">
                    {navLinks.map((nav) => (
                        <li key={nav.id} className="text-secondary hover:text-white text-[18px] font-medium">
                            <a
                                className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 hover:from-neutral-100 hover:to-neutral-50"
                                href={`${nav.id === "blog" ? "/blog" : `/#${nav.id}`}`}
                            >
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    <div className="flex justify-center items-center">
                        <a href="https://github.com/Aliozzaim" className="w-[45px] h-[36px] inline-flex !rounded-full  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <Image className="w-[20px] h-[20px]" src={GitHub} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/ali-r%C4%B1za-%C3%B6zzaim-8b1ba320a/" className="ml-[1rem]  w-[45px] h-[36px] inline-flex !rounded-full  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <Image className="w-[20px] h-[20px]" src={Linkedin} alt="LinkedIn" />
                        </a>
                    </div>
                </ul>
            </div>
            <NavbarClient />
        </nav>
    );
};

export default Navbar;
