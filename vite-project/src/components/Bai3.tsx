import React, { useState } from 'react';

const Bai3: React.FC = () => {
  const [birthdate, setBirthdate] = useState<string>('');
  const [submittedBirthdate, setSubmittedBirthdate] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedBirthdate(birthdate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Birthdate:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedBirthdate && (
        <div>
          <h2>Submitted Birthdate: {submittedBirthdate}</h2>
        </div>
      )}
    </div>
  );
};

export default Bai3;
