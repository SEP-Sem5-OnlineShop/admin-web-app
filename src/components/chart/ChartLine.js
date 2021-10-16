import React from 'react'
import { Chart } from 'react-charts'
import {genApi} from '../../api/index'

export default function MyChart() {
  const [purchaseCount1, setpurchaseCount1] = React.useState(0);
  const [purchaseCount2, setpurchaseCount2] = React.useState(0);
  const [purchaseCount3, setpurchaseCount3] = React.useState(0);
  const [purchaseCount4, setpurchaseCount4] = React.useState(0);
  const [purchaseCount5, setpurchaseCount5] = React.useState(0);

  const count1=genApi.getLastPurchaseDay1();
  const count2=genApi.getLastPurchaseDay2();
  const count3=genApi.getLastPurchaseDay3();
  const count4=genApi.getLastPurchaseDay4();
  const count5=genApi.getLastPurchaseDay5();

  count1.then(
      function(value) { 
          setpurchaseCount1(value.data.count)
      },
      function(error) { 
          console.log(error) }
  )
  
  
  count2.then(
      function(value) { 
          setpurchaseCount2(value.data.count)
      },
      function(error) { 
          console.log(error) }
  )

  
  count3.then(
      function(value) { 
          setpurchaseCount3(value.data.count)
      },
      function(error) { 
          console.log(error) }
  )

  
  count4.then(
      function(value) { 
          setpurchaseCount4(value.data.count)
      },
      function(error) { 
          console.log(error) }
  )

  
  count5.then(
      function(value) { 
          setpurchaseCount5(value.data.count)
      },
      function(error) { 
          console.log(error) }
  )

  const data1=[]
  data1.push(purchaseCount1);
  data1.push(purchaseCount2);
  data1.push(purchaseCount3);
  data1.push(purchaseCount4);
  data1.push(purchaseCount5);
  console.log(data1)


  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, purchaseCount1], [1, purchaseCount2], [2, purchaseCount3], [3, purchaseCount4], [4, purchaseCount5]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return(
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>

  )
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    

}