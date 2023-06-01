import Header from "@/components/header/Header";
import List from "@/components/List";

export default function Home() {
  return (
    <main>
      <div className="w-full h-full px-4 py-2 md:py-6 overflow-hidden overflow-y-auto">
        <Header />
        <List title="Newest songs" />
        <List title="Newest songs" />
        <List title="Newest songs" />
      </div>
    </main>
  );
}
