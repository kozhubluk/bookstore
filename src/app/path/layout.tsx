export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      layout
      <div>{children}</div>
    </div>
  );
}
