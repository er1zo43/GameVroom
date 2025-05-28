import { Header } from "@/components/ui/header";

export default function ETSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="ets" />
      {children}
    </>
  );
}