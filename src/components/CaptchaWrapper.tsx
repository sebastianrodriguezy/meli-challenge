import { useEffect, useState } from 'react';

interface CaptchaWrapperProps {
  onVerify: () => void;
  isVerified: boolean;
}

export default function CaptchaWrapper({
  onVerify,
  isVerified,
}: CaptchaWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="captcha">
      {loading ? (
        <p>Cargando captcha...</p>
      ) : (
        <button onClick={onVerify}>
          {isVerified ? 'Verificado ✅' : 'No soy un Robot'}
        </button>
      )}
    </div>
  );
}
