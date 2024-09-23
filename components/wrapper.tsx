export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-5xl px-4 mx-auto">{children}</div>;
}
