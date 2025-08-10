import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">404 - Page Not Found</h1>
        
        <div className="mb-8">
          <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
            {/* BST Visualization */}
            <circle cx="150" cy="30" r="20" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
            <text x="150" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">404</text>
            
            {/* Left subtree */}
            <line x1="150" y1="50" x2="90" y2="80" stroke="#6B7280" strokeWidth="2" />
            <circle cx="90" cy="100" r="15" fill="#10B981" stroke="#047857" strokeWidth="2" />
            <text x="90" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Not</text>
            
            <line x1="90" y1="115" x2="60" y2="140" stroke="#6B7280" strokeWidth="2" />
            <circle cx="60" cy="160" r="12" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <text x="60" y="164" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">404</text>
            
            <line x1="90" y1="115" x2="120" y2="140" stroke="#6B7280" strokeWidth="2" />
            <circle cx="120" cy="160" r="12" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <text x="120" y="164" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Found</text>
            
            {/* Right subtree */}
            <line x1="150" y1="50" x2="210" y2="80" stroke="#6B7280" strokeWidth="2" />
            <circle cx="210" cy="100" r="15" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
            <text x="210" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Page</text>
            
            <line x1="210" y1="115" x2="240" y2="140" stroke="#6B7280" strokeWidth="2" />
            <circle cx="240" cy="160" r="12" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="2" />
            <text x="240" y="164" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Lost</text>
          </svg>
        </div>
        
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Go to Home
        </Link>
      </div>
    </div>
  );
}