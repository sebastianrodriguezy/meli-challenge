import { useQueryParams } from '../hooks/useQueryParams';

export default function SimulateNextStep() {
  const { referrer, token } = useQueryParams();

  return (
    <div>
      <h2>Siguiente paso simulado</h2>
      <p>Referrer Obtenido: {referrer}</p>
      <p>Token Obtenido: {token}</p>
    </div>
  );
}
