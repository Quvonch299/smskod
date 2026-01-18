'use client'
import React, { useState } from 'react'

export default function Modal({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    home: '',
    room: '',
    index: '',
  })

  const [toast, setToast] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const isFormValid =
    Object.values(form).every((v) => v.trim() !== '') &&
    isValidEmail(form.email)

  const submitHandler = () => {
    if (!isFormValid) return

    setToast(true)
    setTimeout(() => {
      setToast(false)
      onClose()
    }, 1100)
  }

  return (
    <>
      {toast && (
        <div className="fixed top-6 right-6 z-[999] animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
            ✅ Ma’lumotlar to‘g‘ri yuborildi
          </div>
        </div>
      )}

      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/50"
        />

        <div className="relative bg-white rounded-[20px] p-4 sm:p-[32px] max-h-[90vh] overflow-y-auto w-full max-w-[858px]">

          <h2 className="text-[20px] sm:text-[24px] mb-[24px]">
            Личные данные
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <input name="name" onChange={handleChange} placeholder="Имя"
              className="input" />
            <input name="surname" onChange={handleChange} placeholder="Фамилия"
              className="input" />
            <input name="email" onChange={handleChange} placeholder="Email"
              className="input" />
            <input name="phone" onChange={handleChange} placeholder="Телефон"
              className="input" />
          </div>

          <h2 className="text-[20px] sm:text-[24px] mt-[32px] mb-[24px]">
            Адрес
          </h2>

          <input name="city" onChange={handleChange} placeholder="Город"
            className="input mb-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <input name="street" onChange={handleChange} placeholder="Улица"
              className="input" />
            <input name="home" onChange={handleChange} placeholder="Дом"
              className="input" />
            <input name="room" onChange={handleChange} placeholder="Квартира"
              className="input" />
            <input name="index" onChange={handleChange} placeholder="Индекс"
              className="input" />
          </div>

          <button
            disabled={!isFormValid}
            onClick={submitHandler}
            className={`
              w-full mt-[25px] p-3 rounded-[8px] text-white transition
              ${isFormValid
                ? 'bg-black cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed'}
            `}
          >
            So‘rovni yuborish
          </button>
        </div>
      </div>
      <style jsx>{`
        .input {
          width: 100%;
          height: 50px;
          border-radius: 12px;
          border: 1px solid #ccc;
          padding: 0 16px;
          outline: none;
        }

        .animate-slide-in {
          animation: slideIn 0.4s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
