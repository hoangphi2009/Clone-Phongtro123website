import React from 'react'
import logo from '../../assets/logowithoutbg.png'
import { Button } from '../../components'
const Header = () => {
  return (
    <div className='w-full flex items-center justify-between bg-red-300'>
      <img
        src={logo}
        alt="logo"
        className='w-[240px] h-[70px] object-contain'
        />
        <div>
          <Button
            text = {'đăng nhập'} textColor ='text-white' bgColor = 'bg-[#3961fb]'
          />
        </div>
    </div>
  )
}

export default Header