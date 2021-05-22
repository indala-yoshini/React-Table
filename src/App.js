import React,{components} from 'react'
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import './components/a.css'



function App() {


    const data = [
        {
            NAME:'YOSHINI',
            AGE:19,
            ADDRESS:'ADDRESS A',
            PHONENO:6789054323,
            EMAIL:'YOSHINI@gmail.com',
            key:1
        },
        {
            NAME:'VIRAT',
            AGE:32,
            ADDRESS:'ADDRESS B',
            PHONENO:9876543210,
            EMAIL:'VIRAT@gmail.com',
            key:2
        },
        {
            NAME:'KOHLI',
            AGE:33,
            ADDRESS:'ADDRESS C',
            PHONENO:9444556785,
            EMAIL:'KOHLI@gmail.com',
            key:3
        },
        {
            NAME:'RAM',
            AGE:35,
            ADDRESS:'ADDRESS D',
            PHONENO:9812467342,
            EMAIL:'RAM@gmail.com',
            key:4
        },
        {
            NAME:'CHARAN',
            AGE:36,
            ADDRESS:'ADDRESS E',
            PHONENO:6794210006,
            EMAIL:'CHARAN@gmail.com',
            key:5
        },
    ];


    const columns = [
        {
          title: 'NAME',
          dataIndex: 'NAME',
          key: 'NAME',
        },
        {
          title: 'AGE',
          dataIndex: 'AGE',
          key: 'AGE',
          sorter: (a,b) =>a.AGE -b.AGE,
        },
        {
          title: 'ADDRESS',
          dataIndex:'ADDRESS',
          key: 'ADDRESS',
        },
        {
            title: 'PHONENO',
            dataIndex: 'PHONENO',
            key: 'PHONENO',
          },
          {
            title: 'EMAIL',
            dataIndex: 'EMAIL',
            key: 'EMAIL',
          },
      ];


  return (
  <div className="container"> 
  <header >
  <Table  dataSource={data}  columns={columns}>


  </Table>
  </header>
  
  </div>
 
  );
}

export default App;
