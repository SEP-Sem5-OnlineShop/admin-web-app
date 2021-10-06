import React from 'react';
import StatusCard from './StatusCard';

export default function Status() {


    return (
        <div className="p-4">
            
            <br></br>

            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="Vendors"
                            amount="2,356"
                            
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Sales"
                            amount="924"
                            
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            
                        />
                    </div>
                </div>
            </div>

            
             
           
        </div>
    );
}
