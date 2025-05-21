import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { UserInfo } from '../types/user';

import UserFieldsForm from './UserFieldsForm';
import CaptchaWrapper from './CaptchaWrapper';
import { useQueryParams } from '../hooks/useQueryParams';

export default function ReviewStepPage() {
  const { referrer, token } = useQueryParams();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleContinue = () => {
    if (!captchaVerified) return alert('Por favor completa el captcha');

    navigate(`/next-step?referrer=${referrer}&token=${token}`);
  };

  return (
    <div>
      <h1>Revisa tus datos antes de continuar</h1>
      <UserFieldsForm onChange={setUserInfo} />
      <CaptchaWrapper
        isVerified={captchaVerified}
        onVerify={() => setCaptchaVerified(true)}
      />
      <div className="buttons">
        <button onClick={() => {}}>Regresar</button>
        <button
          onClick={handleContinue}
          disabled={!userInfo || !captchaVerified}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
