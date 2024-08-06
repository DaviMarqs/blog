import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <section>
        <article>
          <div className="mt-10 flex justify-between flex-col gap-4 md:items-center md:flex-row">
            <h2 className="m-0">
              A reporting system for environmental complaints
            </h2>
            <div className="flex items-center gap-4">
              <div className="ring-1 ring-zinc-950 px-2 py-1">TypeScript</div>
              <div className="ring-1 ring-zinc-950 px-2 py-1">TailwindCSS</div>
              <div className="ring-1 ring-zinc-950 px-2 py-1">Next.js</div>
            </div>
          </div>
          <a
            href="https://disqueverde.vercel.app/"
            target="_blank"
            className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950"
          >
            <span className="z-10 absolute flex items-center transition-all gap-2 top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-100">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="size-full group-hover:scale-105 transition-all"
              src="/projects/disque-verde.png"
              width={9999}
              height={250}
              alt="merchant"
            />
          </a>
          <p>
            A website for reporting environmental issues. Its main functionality
            is to allow users to report issues in a dynamic and simple way.
          </p>
          <div className="items-center flex gap-4">
            <a
              className="items-center flex gap-2"
              href="https://disqueverde.vercel.app/"
              target="_blank"
            >
              Visit website
              <ArrowUpRight className="size-5" />
            </a>
            {/* <a
              className="items-center flex gap-2"
              href=""
              target="_blank"
            >
              View code
              <ArrowUpRight className="size-5" />
            </a> */}
          </div>
        </article>
      </section>
    </>
  );
}
