import Link from 'next/link'
import React from 'react'

function SettingsSideNav() {
  return (
    <div className="container flex w-52 border-r h-screen">
    <div className=" p-7">
      <ul className="text-xl">
        <li className="mb-3">
            <Link href={"/settings/invoice"}>
            
            Invoice
            </Link>
        </li>
     
        <li className="mb-3">
            Billing
        </li>
        <li className="mb-3">
            Notification
        </li>
        <li className="mb-3">
            Password
        </li>
        <li className="mb-3">
            Teams
        </li>
        <li className="mb-3">
            Display
        </li>
      </ul>
    </div>
  </div>
  )
}

export default SettingsSideNav