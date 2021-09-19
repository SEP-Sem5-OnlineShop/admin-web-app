import React from 'react'
import Table from './Filter';

export default function TableFilter() {
  return (
    <>
        <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
            <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                   
                </div>
            </div>
        </div>

        <div className="px-3 md:px-8 h-auto -mt-24">
            <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 px-4 mb-16">
                    <Table />
                    
                </div>
            </div>
        </div>
    </>
);

}
