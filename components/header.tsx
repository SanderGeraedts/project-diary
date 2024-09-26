import Wrapper from "@/components/wrapper";
import Link from "next/link";

export default function Header({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <header className="w-full bg-white py-4 shadow-md">
      <Wrapper>
        <div className="flex justify-between">
          <Link href="/">
            <h1 className="text-highlight font-semibold text-3xl">
              ProjectDiary
            </h1>
          </Link>
          <Link
            href={href}
            className="bg-highlight rounded-xl px-4 py-1 text-white font-semibold shadow-md"
          >
            {label}
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}
