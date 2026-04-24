
import React, { useState } from 'react';
import { LOGO_PRIMARY, LOGO_FALLBACK } from '../constants';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 sm:h-12 md:h-[60px] object-contain" }) => {
  const [imgSrc, setImgSrc] = useState(LOGO_PRIMARY);

  const handleError = () => {
    if (imgSrc !== LOGO_FALLBACK) {
      setImgSrc(LOGO_FALLBACK);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt="All India Human Rights Protection Commission Logo" 
      className={className}
      onError={handleError}
    />
  );
};

export default Logo;
