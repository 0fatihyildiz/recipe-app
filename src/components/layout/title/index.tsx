import { Icon } from "@iconify/react";
import { PrimaryButton } from "../../common/material/styles/button";

interface Props {
  title: string;
  itemCount?: number;
}

export default function Title({ title, itemCount }: Props) {
  return (
    <div className="my-12 lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1 space-y-2">
        <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
          { title }
        </h2>
        {itemCount && <div className="mt-2 flex flex-col text-zinc-500 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          { itemCount } recipes found
        </div>}
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <PrimaryButton>
          Filter <Icon className="ml-6" icon="iconamoon:apps-thin" />
        </PrimaryButton>
      </div>
    </div>
  );
}
