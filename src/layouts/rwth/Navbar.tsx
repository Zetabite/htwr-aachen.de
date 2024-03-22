import type { FC } from "react";
import { useContext, useState } from "react";

import type { NavbarConfig } from "@/models/layout";

import { DesktopNavbar } from "./DesktopNavbar";
import MenuButton from "./MenuButton";
import Sidenav from "./Sidenav";
import { FacultiesNavContext } from "../faculties-nav/nav";

type NavbarProps = {
  instituteName: string;
  instituteTitle: string;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  config: NavbarConfig;
};

const Navbar: FC<NavbarProps> = ({
  instituteName,
  menuOpen,
  setMenuOpen,
  config,
  instituteTitle,
}) => {
  const [open, setOpen] = useContext(FacultiesNavContext)
  return (
    <>
      <button
        className={
          menuOpen
            ? "absolute z-50 size-full bg-black opacity-20 transition-opacity"
            : "hidden"
        }
        type="button"
        title="Schließen"
        onClick={() => {
          if (open) setOpen(false);
          setMenuOpen(false);
        }}
      ></button>
      <div className="max-w-[1280px] lg:mx-auto">
        <DesktopNavbar
          onMenuClick={() => {
            setMenuOpen(true);
          }}
          instituteTitle={instituteTitle}
          config={config}
        >
          {config.linkElements.map((linkElement) => {
            return (
              <MenuButton
                href={linkElement.href}
                path={linkElement.path || linkElement.href}
                instituteName={instituteName}
                key={linkElement.name}
              >
                {linkElement.children
                  ? linkElement.children
                  : linkElement.name.toUpperCase()}
              </MenuButton>
            );
          })}
        </DesktopNavbar>
      </div>
      <Sidenav
        instituteName={instituteName}
        menuOpen={menuOpen}
        config={config}
      />
    </>
  );
};

export default Navbar;
