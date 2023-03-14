import React, {useState} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { Table, Radio } from 'antd'

export default function Customers() {
  const [selected, setSelected] = useState('all');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleSelected = (value) => {
    setSelected(value)
  }

  const menu = [
    {id: 1, name: 'All 234', codename: 'all' },
    {id: 2, name: 'Business 234', codename: 'business' },
    {id: 3, name: 'Builder Referral 234', codename: 'builder' },
    {id: 4, name: 'Store/Walking 234', codename: 'walking' },
    {id: 5, name: 'Store/Direct 234', codename: 'direct' }
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push(
      {
        key: i,
        name: 'Philip Marshall',
        phone: '(371)611-0042',
        email: "debra.vargas@mail.com",
        address: '841 Lakeshore Dr Port Orford, Oregon',
        type: 'Business',
        salesperson: 'George James',
        notes: 1,
        action: '...'
      },
    )
  }

  const columns = [
    {
      title: 'Full Name'.toUpperCase(),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone'.toUpperCase(),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email'.toUpperCase(),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address'.toUpperCase(),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Type'.toUpperCase(),
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'salesPerson'.toUpperCase(),
      dataIndex: 'salesperson',
      key: 'salesperson',
    },
    {
      title: 'Notes'.toUpperCase(),
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      dataIndex: 'action',
      key: 'action',
    },
  ]

  const onSelectChange = (pagination, filters, sorter) => {
    console.log('selectedRowKeys changed: ', pagination, filters, sorter);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  return (
    <>
      <div className="p-3 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Customers</span>
        <div className='d-flex' style={{ gap: "10px"}}>
        <div className='position-relative d-flex align-items-center p-1' style={{gap: "5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
          <RiSearchLine />
          <input type="text" placeholder='Search...'  className='ps-1' style={{border: "none", outline: "none", font: "normal normal medium 14px/16px Inter", color: "#94A3B8"}}/>
        </div>
          <button className='border-0 text-white' style={{background: "#28589A", borderRadius: "5px"}}>+ Add Customer</button>
        </div>
      </div>
      <div className="p-3 d-flex" style={{background: "#f1f5f9"}}>
        <div className='d-flex' style={{gap: "25px"}}>
        {
          menu?.map(item => (
            <span className='' style={{cursor: "pointer",  padding: "5px 15px", borderRadius:"20px", textDecoration: "none", color: selected === item.codename ? 'white' : "black", border: "1px solid #e2e8f0", background: selected === item.codename ? "#28589A" : "white" }} onClick={() => handleSelected(item.codename)}>{item.name}</span>
          ))
        }
        </div>
      </div>
      {selected === "all" && 
      <div className="p-3" style={{background: "#f1f5f9"}}>
      <div className='p-3 bg-white'>
        <span className="fs-5 fw-bold">All Customers</span>
      </div>
      <Table dataSource={data} columns={columns} onChange= {onSelectChange}/>
      </div>
      }
      {selected === "business" && <h1>Business</h1>}
      {selected === "builder" && <h1>Builder</h1>}
      {selected === "walking" && <h1>Walking</h1>}
      {selected === "direct" && <h1>Direct</h1>}
    </>
  )
}
