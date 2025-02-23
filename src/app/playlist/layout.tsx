const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="mx-auto max-w-prose">{children}</main>;
};

export default Layout;
