import React, { useState } from 'react';

const Bai2: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [submittedColor, setSubmittedColor] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedColor(color);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedColor && (
        <div>
          <h2>Submitted Color: {submittedColor}</h2>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: submittedColor,
              border: '1px solid #000',
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Bai2;
