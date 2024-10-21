import React from "react";
import DashNav from "../components/DashNav";

const HubLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='font-[family-name:var(--font-body)]'>
      <DashNav />
      {children}
    </main>
  );
};

export default HubLayout;
