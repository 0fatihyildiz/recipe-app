import Card from "../components/common/card";
import Title from "../components/layout/title";

export default function Home() {
  return (
    <div>
      <Title title="Explore Recipes" itemCount={512} />
      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {Array.from(Array(10).keys()).map((i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}
