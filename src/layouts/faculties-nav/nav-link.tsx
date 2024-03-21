import Link from "next/link";
import type { ReactNode } from "react";
import { useId } from "react";

type FacultiesNavLinkProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  subElement?: ReactNode;
  // autoBorder automatically removes the overlapping border of the middle elements
  autoBorder?: boolean;
  tooltipContent?: string;
  tooltipPlace?: "top" | "bottom" | "left" | "right";
};
export const FakultätsNavLink = (props: FacultiesNavLinkProps) => {
  const id = useId();
  return (
    <li
      className={`w-full border-t-1 border-dotted border-white/50 ${
        props.autoBorder ? "last: border-b-1" : "border-b-1"
      }`}
    >
      <Link
        data-tooltip-id={id}
        data-tooltip-content={props.tooltipContent}
        data-tooltip-place={props.tooltipPlace}
        href={props.href}
        passHref
        className="m-0 flex w-full px-4 py-2 text-sm font-medium text-white hover:border-b-0 hover:bg-white/10 lg:px-0"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          className="mr-2 mt-1 hidden h-[13px] w-auto lg:block"
        >
          <circle cx="25" cy="25" r="25" className="fill-white" />
          <g
            transform="matrix(1,0,0,1,0.205391,-7.10543e-15)"
            className="fill-rwth-accent"
          >
            <g transform="matrix(0.648283,0.648283,-1.01556,1.01556,11.4889,-15.3974)">
              <rect x="22.721" y="7.831" width="27.279" height="4.557" />
            </g>
            <g transform="matrix(0.648283,-0.648283,1.01556,1.01556,-9.04382,44.8647)">
              <rect x="22.721" y="7.831" width="27.279" height="4.557" />
            </g>
          </g>
        </svg>
        <div className="block">
          {props.children}
          {props.subElement && (
            <span className="block font-sans text-sm font-thin text-white lg:mb-3">
              {props.subElement}
            </span>
          )}
        </div>
        <div className="ml-auto mr-3 grid items-center justify-end lg:hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 50 50"
            version="1.1"
            className="h-[13px] fill-white "
          >
            <g transform="matrix(-0.574927,0.574927,-0.653001,-0.653001,67.8709,13.3023)">
              <path d="M45.386,12.257C45.386,12.113 45.322,11.975 45.206,11.874C45.091,11.772 44.934,11.715 44.771,11.715C42.745,11.715 36.294,11.715 34.268,11.715C34.104,11.715 33.948,11.772 33.833,11.874C33.717,11.975 33.653,12.113 33.653,12.257C33.653,16.559 33.653,45.156 33.653,49.459C33.653,49.602 33.717,49.74 33.833,49.841C33.948,49.943 34.104,50 34.268,50C36.294,50 42.745,50 44.771,50C44.934,50 45.091,49.943 45.206,49.841C45.322,49.74 45.386,49.602 45.386,49.459C45.386,45.156 45.386,16.559 45.386,12.257Z" />
            </g>
            <g transform="matrix(0.574927,0.574927,-0.653001,0.653001,22.4293,-8.7439)">
              <path d="M45.386,12.257C45.386,12.113 45.322,11.975 45.206,11.874C45.091,11.772 44.934,11.715 44.771,11.715C42.745,11.715 36.294,11.715 34.268,11.715C34.104,11.715 33.948,11.772 33.833,11.874C33.717,11.975 33.653,12.113 33.653,12.257C33.653,16.559 33.653,45.156 33.653,49.459C33.653,49.602 33.717,49.74 33.833,49.841C33.948,49.943 34.104,50 34.268,50C36.294,50 42.745,50 44.771,50C44.934,50 45.091,49.943 45.206,49.841C45.322,49.74 45.386,49.602 45.386,49.459C45.386,45.156 45.386,16.559 45.386,12.257Z" />
            </g>
          </svg>
        </div>
      </Link>
    </li>
  );
};
