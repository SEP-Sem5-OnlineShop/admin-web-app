import React from 'react';
import StatusCard from './StatusCard';
import {genApi} from '../../api/index'
import { createEnumMember } from 'typescript';

function getNumber(value){
    const number=value;
    // console.log(number);
    return number;
}
export default function Status() {
    
    const [vendorCount, setNumber] = React.useState(0);
    const count=genApi.getNumberOfVendors();

    const [purchaseCount, setPurchaseNumber] = React.useState(0);
    const purchases=genApi.getPurchaseCount();
   
    count.then(
        function(value) { 
            setNumber(value.data.count)
            // num=numbers;
            // console.log(typeof(numbers))
        },
        function(error) { 
            console.log(error) }
    )
    
    console.log(vendorCount);


    purchases.then(
        function(value) { 
            setPurchaseNumber(value.data.count)
            // num=numbers;
            // console.log(value)
        },
        function(error) { 
            console.log(error) }
    )
   
    console.log(purchaseCount);
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
                            amount={vendorCount}
                            
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Today Purchases"
                            amount={purchaseCount}
                            
                        />
                        {/* <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            
                        /> */}
                    </div>
                </div>
            </div>

            
             
           
        </div>
    );
}
