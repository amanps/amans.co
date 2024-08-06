'use client';

import React, { useState, useEffect } from 'react';

const JsonViewer: React.FC = () => {
  const [leftInput, setLeftInput] = useState<string>('');
  const [rightInput, setRightInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (leftInput.trim() === '') {
        setRightInput('');
        setError(null);
        return;
      }
      const parsedJson = JSON.parse(leftInput);
      setRightInput(JSON.stringify(parsedJson, null, 2));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON');
    }
  }, [leftInput]);

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <h1 className="text-lg text-left font-semibold p-4 bg-gray-50 dark:bg-gray-700">
        JSON Formatter
      </h1>
      <div className="flex-grow flex">
        <textarea
          className="flex-1 p-4 resize-none font-mono text-sm bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-600"
          value={leftInput}
          onChange={(e) => setLeftInput(e.target.value)}
          placeholder="Paste your JSON here..."
          style={{ outline: 'none' }}
        />
        <textarea
          className="flex-1 p-4 resize-none font-mono text-sm bg-white dark:bg-gray-800"
          value={error ? error : rightInput}
          onChange={(e) => setRightInput(e.target.value)}
          placeholder="Formatted JSON will appear here."
          style={{ color: error ? 'red' : 'inherit', outline: 'none' }}
        />
      </div>
    </div>
  );
};

export default JsonViewer;
