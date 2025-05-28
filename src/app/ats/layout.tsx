import { Header } from "@/components/ui/header";

export default function ATSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="ats" />
      {children}
    </>
  );
}