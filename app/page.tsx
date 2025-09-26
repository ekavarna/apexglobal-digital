import { Suspense } from "react";
import HomePage from "./home/page";

// Force dynamic rendering to prevent prerendering errors
export const dynamic = "force-dynamic";

const HomeLanding = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center bg-[#222431]">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }
    >
      <section className="w-full h-full bg-amber-50 flex-center flex-col">
        <HomePage />
      </section>
    </Suspense>
  );
};

export default HomeLanding;
