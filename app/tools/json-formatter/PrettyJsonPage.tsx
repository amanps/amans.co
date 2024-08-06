'use client';

import React from 'react';
import JsonViewer from './JsonViewer';

const PrettyJsonPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-left">
            JSON Formatter
          </h1>
        </div>
      </header>
      <main className="flex-1">
        <JsonViewer />
      </main>
    </div>
  );
};

export default PrettyJsonPage;
