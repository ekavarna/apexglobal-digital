import HomePage from "./home/page";

// Force dynamic rendering to prevent prerendering errors
export const dynamic = "force-dynamic";

const HomeLanding = () => {
  return (
    <section className="w-full h-full bg-amber-50 flex-center flex-col">
      <HomePage />
    </section>
  );
};

export default HomeLanding;
