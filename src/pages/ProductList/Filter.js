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
      Header: "Price",
      accessor: 'price',
    },
    // {
    //   Header: "Status",
    //   accessor: 'status',
    //   Cell: StatusPill,
    // },
    {
      Header: "Rating",
      accessor: 'rating',
    },
    // {
    //   Header: "Image",
    //   accessor: 'imageUrl',
    //   Filter: SelectColumnFilter,  // new
    //   filter: 'includes',
    // },
  ], [])

  


////////////////////////////////////////////////
const {id} = useParams()
const [products, setProducts] = React.useState([]);
        React.useEffect(async () => {
            try{
            const result = await genApi.getVendor(id);
            const testVendor = {...result.data.data}
            
            setProducts(testVendor.vendor.products || [])
            console.log(typeof(testVendor.products))
            console.log(testVendor.products)
            }catch(e){
            console.log(e)
            }
            
        },[]);

<<<<<<< HEAD
        const productList=vendors
        console.log(({productList}))
=======
        const productList=products
        console.log(typeof({productList}))
>>>>>>> 70b5efc6fa7ae7bd5df828a05c20a9312f629af5


        const data=[]
  products.map(vendor => data.push({
    name: vendor.name,
    email:vendor._id,
    price: vendor.price,
    rating: vendor.rating,
    imageUrl: vendor.imageUrl,
  link: `/singleProduct/${vendor._id}`
}))

console.log(data)
        

//////////////////////////////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Product List</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />

          
        </div>
      </main>
    </div>
  );
}

export default TableFilter;
