import React from 'react';

export default function PrettyJsonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-6xl h-96 max-h-[calc(100vh-2rem)]">
        {children}
      </div>
    </div>
  );
}
