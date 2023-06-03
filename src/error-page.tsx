import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="px-4 lg:py-12">
          <div className="lg:flex lg:gap-4">
            <div className="flex flex-col items-center justify-center lg:py-32 md:py-24">
              <h1 className="text-9xl font-bold text-yellow-500">{error.status}</h1>
              <p className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
                <span className="text-red-400">Oops!</span> {error.statusText}
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <p>
                
              </p>
              <a
                href="/"
                className="bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800"
              >
                Go home
              </a>
            </div>
            <div className="mt-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <p>Unknown Error</p>;
}
