import React, { useState } from 'react';

const Bai4: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedProgress(progress);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Progress:
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            required
          />
          {progress}%
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedProgress !== null && (
        <div>
          <h2>Submitted Progress: {submittedProgress}%</h2>
        </div>
      )}
    </div>
  );
};

export default Bai4;
