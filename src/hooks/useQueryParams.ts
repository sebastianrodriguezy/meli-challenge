import { useLocation } from 'react-router-dom';

export function useQueryParams() {
  const params = new URLSearchParams(useLocation().search);

  return {
    referrer: params.get('referrer') || '/previous-step',
    token: params.get('token') || '123',
  };
}
