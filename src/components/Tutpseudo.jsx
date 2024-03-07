import React from 'react'

const Tutpseudo = () => {
  return (
   <>
        <form className='bg-black w-full h-screen flex justify-center items-center'>
        <label class="bg-white w-1/2 flex justify-center gap-3 items-center">
        <span class="block text-sm font-medium text-slate-700">Email</span>
        <input type="email" class="peer focus:ring-2 bg-slate-50 valid:ring-green-400 invalid:ring-pink-500 focus:outline-none"/>
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        Please provide a valid email address.
        </p>
        </label>
        </form>
   </>
  )
}

export default Tutpseudo