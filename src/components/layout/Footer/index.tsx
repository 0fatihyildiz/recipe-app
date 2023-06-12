import Logo from "../header/logo";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between px-4 pb-12 pt-24 sm:flex-row">
      <Logo className="opacity-50 grayscale" />

      <p className="mt-4 text-sm font-medium text-zinc-400 sm:mt-0 dark:text-gray-300">
        Made by <a href="https://github.com/0fatihyildiz" className="text-[rgb(var(--primary))] hover:underline" target="_blank" rel="noreferrer">Fatih</a>
      </p>
    </div>
  );
}
