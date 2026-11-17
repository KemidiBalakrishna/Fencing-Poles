import { useState } from 'react';
import { Shield } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  fallbackLabel?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className = 'w-full h-full object-cover',
  aspectClassName = 'w-full h-full',
  fallbackLabel,
}: ImageWithFallbackProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={`relative overflow-hidden bg-[#EAECEF] ${aspectClassName}`}>
      {status === 'loading' && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#EAECEF] via-[#DFE3E8] to-[#EAECEF] animate-pulse"
          aria-hidden="true"
        />
      )}

      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F1F3F5] to-[#E2E6EA] text-[#4B5563]">
          <Shield className="w-8 h-8 text-[#163A28] mb-2" strokeWidth={1.5} />
          <span className="text-xs font-medium text-[#1C1E21]">
            {fallbackLabel || alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`${className} transition-opacity duration-300 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
