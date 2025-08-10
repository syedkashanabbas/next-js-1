import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Illustration */}
        <div className="flex justify-center">
          <Image
            src="/404tvimage.avif" 
            alt="404 Illustration"
            width={400}
            height={400}
            priority
          />
        </div>

        {/* Right: Text + Button */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Oops!</h1>
          <p className="text-lg text-gray-500 mb-8">
            We couldn’t find the page you were looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            ← Go home
          </Link>
        </div>

      </div>
    </div>
  );
}
