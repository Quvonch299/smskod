'use client'
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from "./Modal";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[72px]">
        <div className='flex items-center gap-[37px]'>
          <Image
            src="/icon/logo-arch.svg"
            width={60}
            height={28}
            alt="logo"
          />

          <nav className="hidden md:flex gap-12">
            <a className="text-[14px] font-light text-[#585858]">Loyihalarimiz</a>
            <a className="text-[14px] font-light text-[#585858]">Afzalliklari</a>
            <a className="text-[14px] font-light text-[#585858]">Xizmatlar</a>
            <a className="text-[14px] font-light text-[#585858]">Fikrlar</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Qidirish..."
              className={`
                outline-none absolute right-10 h-9 rounded border px-3 text-sm
                transition-all duration-300
                ${openSearch ? 'w-[200px] opacity-100' : 'w-0 opacity-0 pointer-events-none'}
              `}
            />
            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="text-xl"
            >
              <CiSearch />
            </button>
          </div>
          <button
            onClick={() => setModal(true)}
            className="hidden md:block bg-[#FD665E] text-white text-sm w-[132px] h-[48px] rounded"
          >
            So’rov jo’nating
          </button>
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>

      {openMenu && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <a className="block text-sm">Loyihalarimiz</a>
          <a className="block text-sm">Afzalliklari</a>
          <a className="block text-sm">Xizmatlar</a>
          <a className="block text-sm">Fikrlar</a>

          <input
            type="text"
            placeholder="Qidirish..."
            className="w-full h-10 border rounded px-3 text-sm"
          />

          <button
            onClick={() => setModal(true)}
            className="w-full h-12 bg-[#FD665E] text-white rounded text-sm"
          >
            So’rov jo’nating
          </button>
        </div>
      )}

      {modal && <Modal onClose={() => setModal(false)} />}
    </header>
  )
}
