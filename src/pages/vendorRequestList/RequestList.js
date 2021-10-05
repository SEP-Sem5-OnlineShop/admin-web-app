import React from 'react'
import Table, { AvatarCell, SelectColumnFilter } from '../../components/filter/filter'  // new
import {genApi} from '../../api/index'



function RequestList() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Shop",
      accessor: 'shop',
    },
    {
      Header: "Status",
      accessor: 'status',
      // Cell: StatusPill,
    },
    // {
    //   Header: "Age",
    //   accessor: 'age',
    // },
    {
      Header: "Region to be covered",
      accessor: 'regionToBeCovered',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  // const data = React.useMemo(() => getData(), [])


////////////////////////////////////////////////
  const [vendors, setVendors] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getRequests();
 
      setVendors(result.data.data);
      console.log(result.data)
    }catch(e){
      console.log(e)
    }
    
  },[]);


const data=[]
vendors.map(vendor => data.push({
  name: vendor.firstName,
  email: vendor.address,
  shop: vendor.shopName,
  regionToBeCovered:vendor.regionToBeCovered,
  status: vendor.status||'',
  link: `/vendor/register/${vendor._id}`
}))

//////////////////////////////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Vendor List</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default RequestList;