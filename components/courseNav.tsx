import Link from "next/link";
import { FC } from "react";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#training", label: "Training Options" },
  { href: "#pre-requisites", label: "Pre-requisites" },
  { href: "#curriculum", label: "Curriculum" },
  //   { href: "#attend", label: "Who should attend" },
  //   { href: "#reviews", label: "Reviews" },
  //   { href: "#faq", label: "FAQs" },
];

const courseNav: FC = () => {
  return (
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 list-none">
      {navItems.map((item, index) => (
        <li key={index} className="menu-item">
          <Link
            href={item.href}
            className="text-apex-text text-lg pb-3 font-medium hover:text-apex-blue-dark hover:underline decoration-2 hover:underline-offset-4  transition-colors duration-200 "
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default courseNav;
