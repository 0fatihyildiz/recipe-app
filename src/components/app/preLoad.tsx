import Logo from "../layout/header/logo";
import { Icon } from "@iconify/react/dist/iconify.js";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-90 flex flex-col items-center justify-center gap-2 bg-yellow text-white">
      <div className="opacity-80">
        <Logo color="white" dark={true} size={30} />
      </div>
      <Icon icon="svg-spinners:3-dots-move" fontSize={25} />
    </div>
  );
};

export default Loading;
