"use client";

import Image from "next/image";
import Link from "next/link";

import type { NavbarConfig } from "@/models/layout";

import { FacultiesNavContext } from "../faculties-nav/nav";
import { useContext } from "react";

type DeddebmeNavbarProps = {
  config: NavbarConfig;
};

export default function DeddebmeNavbar(props: DeddebmeNavbarProps) {
  const  [_open, setOpen] = useContext(FacultiesNavContext)

  return (
    <div>
      <nav className="mx-auto my-4 grid max-w-6xl grid-cols-2 items-center justify-items-center">
        <div className="text-center">
          <span className="text-rwth-accen mr-4 content-center text-center font-semibold">
            Professor Dr.-Ing. Stefan Kowalewski
          </span>
          <button
            type="button"
            className="mx-auto mr-3 rounded bg-accent  px-2 py-1 hover:bg-accent/75"
            onClick={() => {
              setOpen((x) => !x);
            }}
          >
            Fakultäten & Institute
          </button>
        </div>

        <div className="flex w-full justify-end">
          <Link href={props.config.logo.href} className="no-b">
            <Image
              alt={props.config.logo.alt}
              src={props.config.logo.logoUrl}
              width={props.config.logo.width}
              height={props.config.logo.height}
            />
          </Link>
          <div
            className={`h-[${props.config.logo.height}px] mx-4 w-1 bg-rwth-accent`}
          />
          <Link href="/" className="no-b">
            <Image
              alt="RWTH LOGO"
              src="/assets/rwth/banner.svg"
              height={props.config.logo.height}
              width={(props.config.logo.height || 0) * 3.66}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
