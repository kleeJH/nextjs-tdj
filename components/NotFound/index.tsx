// import { useTranslations } from "next-intl";
import Image from "next/image";

// Ref: https://github.com/typehero/typehero/blob/main/apps/web/src/app/not-found.tsx
export default function NotFound({
  type = "notfound",
}: {
  type?: "notfound" | "error";
}) {
  return (
    <>
      <div className="absolute top-0 flex w-full h-screen flex-col items-center justify-center gap-8 overflow-hidden">
        <Image
          className="animate-logofly absolute left-0 -z-10 mx-auto opacity-80"
          alt="TDJ's Logo"
          src="/assets/images/logo.png"
          height="70"
          width="60"
        />
        <div className="stars absolute -left-full -z-50 mt-[56px] h-screen w-[200%]" />
        <div className="stars absolute -left-full -z-40 mt-[56px] h-1/2 w-[400%] scale-[2]" />
        <div className="stars absolute -left-full -z-30 mt-[56px] h-1/3 w-[600%] scale-[3]" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 font-mono text-4xl font-bold leading-tight opacity-60 md:text-9xl pink-text-gradient">
            {type === "notfound" ? 404 : 500}
          </h1>
          <p className="px-6 text-center font-mono text-base md:px-0 md:text-xl pink-text-gradient">
            {type === "notfound"
              ? "Page not found."
              : "An unexpected error has occured."}
          </p>
        </div>
      </div>
    </>
  );
}
