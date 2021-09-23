import React from 'react'
import Table, { AvatarCell, SelectColumnFilter } from '../../components/filter/filter'  // new
import {genApi} from '../../api/index'



function TableFilter() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Telephone",
      accessor: 'telephone',
    },
    // {
    //   Header: "Status",
    //   accessor: 'status',
    //   Cell: StatusPill,
    // },
    // {
    //   Header: "Age",
    //   accessor: 'age',
    // },
    {
      Header: "Status",
      accessor: 'vendor.status',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  // const data = React.useMemo(() => getData(), [])


////////////////////////////////////////////////
  const [vendors, setVendors] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getVendors();
 
      setVendors(result.data.data);
      console.log(typeof(result.data))
      console.log(result.data)
    }catch(e){
      console.log(e)
    }
    
  },[]);

// console.log(vendors[0].vendor.status)
const data=[]
vendors.map(vendor => data.push({
  name: vendor.firstName + vendor.lastName,
  email: vendor.email||'',
  telephone: vendor.telephone,
  v: vendor.vendor||'',
  status:vendor.vendor.status||'',
  link: `/singleVendor/${vendor._id}`
}))
// const status=data
console.log(data)

//////////////////////////////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-3xl  font-semibold"><u>Vendor List</u></h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
   
        </div>
      </main>
    </div>
  );
}

export default TableFilter;