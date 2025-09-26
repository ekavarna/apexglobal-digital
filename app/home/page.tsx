// app/home/page.tsx
import ClientHomePage from "@/components/ClientHomePage";

// Force dynamic rendering to prevent prerendering
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div
      className="h-screen w-full bg-[#222431] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url('/img/course/apex-global-bg.png')` }}
    >
      <ClientHomePage />
    </div>
  );
}
