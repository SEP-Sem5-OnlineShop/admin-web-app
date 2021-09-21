import React from 'react'
import {genApi} from '../../api/index'
import Chart from '../ChartBar'


function TableFilter() {

////////////////////////////////////////////////
const [vendors, setVendors] = React.useState( [] );

React.useEffect(async () => {
  try{
    const result = await genApi.getMaxProducts();

    setVendors(result.data.data);
    // console.log(result.data)
    // console.log(result.data.product_name)
  }catch(e){
    console.log(e)
  }
  
},[]);
console.log(vendors)

const names=[]
vendors.map( vendor =>  names.push({
name: vendor.product_name,
// rating: vendor.rating,
}))

console.log(names)

const ratings=[]
vendors.map( vendor =>  ratings.push({
// name: vendor.product_name,
rating: vendor.rating,
}))

console.log(ratings)

//////////////////////////////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Products with maximum ratings</h1>
        </div>
        <div className="mt-6">
          <Chart names={names}/>
        </div>
      </main>
    </div>
  );
}

export default TableFilter;