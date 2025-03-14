const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="mx-auto max-w-screen-sm">{children}</main>;
};

export default Layout;
