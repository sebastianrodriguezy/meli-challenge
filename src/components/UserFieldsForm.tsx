import { useState, useEffect } from 'react';

import { UserInfo } from '../types/user';
import { mockFetchUser } from '../data/user';
import { userSchema } from '../utils/validations';

interface UserFieldsFormProps {
  onChange: (data: UserInfo) => void;
}

export default function UserFieldsForm({ onChange }: UserFieldsFormProps) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;

    const updated = { ...user, [e.target.name]: e.target.value };

    setUser(updated);
    onChange(updated);

    const result = userSchema.safeParse(updated);

    if (!result.success) {
      const newErrors: any = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  useEffect(() => {
    mockFetchUser().then((data) => {
      setUser(data);
      onChange(data);
    });
  }, []);

  if (!user) return <p style={{ textAlign: 'center' }}>Cargando datos...</p>;

  return (
    <form className="form">
      <label>
        Nombre:
        <input name="name" value={user.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Email:
        <input name="email" value={user.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Dirección:
        <input name="address" value={user.address} onChange={handleChange} />
        {errors.address && <span>{errors.address}</span>}
      </label>
    </form>
  );
}
