import { cn } from "@/lib/utils";

type PointerProps = {
  displayName: string;
  color?: "red" | "blue" | "lime" | "pink";
};

export function Pointer({ displayName, color }: PointerProps) {
  return (
    <section className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer size-5 text-white"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
      </svg>
      <div className="absolute top-full left-full">
        <span
          className={cn(
            "inline-flex rounded-full rounded-tl-none bg-blue-500 px-2 font-bold text-sm",
            color === "red" && "bg-red-500",
            color === "blue" && "bg-blue-500",
            color === "lime" && "bg-lime-500",
            color === "pink" && "bg-pink-500",
          )}
        >
          {displayName}
        </span>
      </div>
    </section>
  );
}
