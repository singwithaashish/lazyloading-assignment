export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100 text-gray-900 font-mono">
      <h1 className="text-9xl font-black">404</h1>
      <h5 className="text-5xl font-black">Page Not Found</h5>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-primary text-white font-semibold rounded-lg duration-200 shadow-md hover:bg-hover mt-10"
      >
        Go Back
      </button>
    </div>
  );
}
