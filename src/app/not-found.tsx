import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}

