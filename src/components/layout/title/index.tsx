interface Props {
  title: string;
  itemCount: number;
}

export default function Hello({ title, itemCount }: Props) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{itemCount}</p>
      </div>
    </>
  );
}
