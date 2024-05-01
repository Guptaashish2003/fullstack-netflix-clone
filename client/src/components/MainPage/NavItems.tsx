import React from 'react'
interface NavitemsProps {
    lable:string
}
const NavItems:React.FC<NavitemsProps> = ({lable}) => {
  return (
    <div className=' text-white cursor-pointer hover:text-gray-300 transition'>{lable}</div>
  )
}

export default NavItems