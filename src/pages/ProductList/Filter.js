import React from 'react'
import Table, { AvatarCell, SelectColumnFilter } from '../../components/filter/filter'  // new
import {genApi} from '../../api/index'
import {useParams} from "react-router"



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
      Header: "Title",
      accessor: 'title',
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
      Header: "Role",
      accessor: 'role',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  // const data = React.useMemo(() => getData(), [])


////////////////////////////////////////////////
// const {id} = useParams()
// const [vendor, setVendor] = React.useState({});
//         React.useEffect(async () => {
//             try{
//             const result = await genApi.getVendor(id);
//             const testVendor = {...result.data.data}
            
//             setVendor(testVendor)
//             }catch(e){
//             console.log(e)
//             }
            
//         },[]);

//         console.log(vendor.products)


// const data=[]
// vendors.map(vendor => data.push({
//   name: vendor.name,
//   email: vendor.name,
//   title: vendor.name,
//   role: vendor.name,
//   link: `/singleVendor/${vendor._id}`
// }))

// console.log(data)

//////////////////////////////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Product List</h1>
        </div>
        <div className="mt-6">
          {/* <Table columns={columns} data={vendor.products} /> */}
        </div>
      </main>
    </div>
  );
}

export default TableFilter;
