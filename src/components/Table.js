import React from "react"
import DataTable, {FilterComponent} from 'react-data-table-component';
import {genApi} from '../api/index'




export default function Table() {
    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	// const filteredItems = fakeUsers.filter(
	// 	item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	// );

  
    //////////////////////////////
    const [vendors, setVendors] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getVendors();
 
      setVendors(result.data.data);
      console.log(result.data)
    }catch(e){
      console.log(e)
    }
    
  },[]);


const data=[]
vendors.map(vendor => data.push({
  name: vendor.firstName + vendor.lastName,
  role: vendor.role,
  title: vendor.telephone,
  email: vendor.role,}))


  const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Role',
        selector: row => row.role,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
];

    ////////////////////////////

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<DataTable
			title="Contact List"
			columns={columns}
			data={vendors}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead
		/>
	);
}

