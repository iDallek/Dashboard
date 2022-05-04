import React from 'react';

import SideBar from '../components/SideBar';

function Index() {
  return (
    <div className="flex flex-no-wrap">
      <SideBar />
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        <div className="w-full h-full rounded border-dashed border-2 border-gray-300"></div>
      </div>
    </div>
  );
}

export default Index;
