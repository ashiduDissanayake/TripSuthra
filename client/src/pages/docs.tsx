// pages/DocsPage.js or wherever your DocsPage is located
import CollapsibleSidebar from '@/components/collapseSidebar';
import React from 'react';


const DocsPage = () => {
  return (
    <div className="flex">
      <CollapsibleSidebar />
      <main className="flex-grow p-4">
        <h1>Documentation Page</h1>
        <p>Content for the documentation page.</p>
      </main>
    </div>
  );
};

export default DocsPage;
