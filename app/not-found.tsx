import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090A1F] flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-400 leading-none tracking-tighter mb-4 drop-shadow-2xl">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        
        <p className="text-lg text-slate-400 mb-10 max-w-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          className="group relative flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#090A1F] transition-all hover:bg-slate-200 hover:scale-105 shadow-xl shadow-white/10"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
