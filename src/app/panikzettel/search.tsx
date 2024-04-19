"use client";

import { DownloadIcon, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { Panikzettel } from "@/models/panikzettel";

export default function PanikzettelSearch({
  panikzettel,
}: {
  panikzettel: Panikzettel[];
}) {
  const [open, setOpen] = useState(false);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((current) => !current);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [setOpen]);
  return (
    <div className="relative mx-auto mb-12 mt-4 h-full w-4/6">
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2"
      >
        <Search className="mr-2 size-4"></Search>
        Suchen...
        <kbd className="pointer-events-none absolute right-[0.3rem] top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">CTRL</span>k
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Malo"></CommandInput>
        <CommandList>
          <CommandEmpty>
            Gibts wohl noch nicht :(. Musste wohl selber machen
          </CommandEmpty>
          <CommandGroup heading="Panikzettel">
            {panikzettel
              .filter((x) => x.name)
              .map((x) => (
                <CommandItem
                  key={x.name}
                  value={`${x.name} ${x.shortname}`}
                  onSelect={() => {
                    runCommand(() => router.push(x.url));
                  }}
                >
                  <div className="mr-2 flex size-4 items-center justify-center">
                    <DownloadIcon className="size-3" />
                  </div>
                  {x.name}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
