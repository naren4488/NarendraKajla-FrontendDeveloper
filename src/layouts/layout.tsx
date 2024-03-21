import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 px-6 py-10 sm:px-20">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
