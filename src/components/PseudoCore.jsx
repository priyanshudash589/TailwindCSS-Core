import React from 'react'

const PseudoCore = () => {
  return (
    <>
        <div className='w-full h-[150px] bg-black flex flex-row gap-5 justify-center items-center'>   
                <button className='w-[15rem] h-[2.5rem] cursor-pointer active:bg-red-600 hover:bg-yellow-400 hover:text-black bg-blue-400 rounded-xl px-4 py-2 text-white font-light'>Click me to focus</button>
                <button className='w-[15rem] h-[2.5rem] cursor-pointer bg-blue-400 rounded-xl px-4 py-2 text-white font-light'>Click me to shadow</button>
                <button className='w-[15rem] h-[2.5rem] cursor-pointer bg-blue-400 rounded-xl px-4 py-2 text-white font-light'>Click me to hover</button>
                <button className='w-[15rem] h-[2.5rem] cursor-pointer bg-blue-400 rounded-xl px-4 py-2 text-white font-light'>Click me to shadow hover</button>
        </div>

        <div className='w-full h-screen bg-black flex flex-col gap-5 border-t-2 border-b-2 border-red-400 items-center'>   
                <h1 className='text-white font-medium text-3xl'>Pseudo Class</h1>
            <button className='w-[15rem] h-[3rem] bg-blue-300 rounded-full hover:bg-amber-400'>Hover</button>

            <button className='w-[15rem] h-[3rem] bg-blue-300 rounded-full hover:bg-blue-600 active:bg-red-950'>Active</button>

            <button className='w-[15rem] h-[3rem] bg-blue-300 rounded-full focus:bg-green-400'>Focus</button>

            <form className='bg-slate-50 w-[20rem] h-[80px] focus-within:bg-yellow-800 px-5 gap-2 flex items-center justify-center'>
                <label htmlFor="">Focus Within ( only works when there is an element inside an element )</label>
                <input type="text" name="" id="" className='w-2/3 h-[2rem] bg-blue-300 focus:bg-red-50 focus:outline-none' />
                <input type="text" name="" id="" className='w-2/3 h-[2rem] bg-blue-300 focus:bg-red-50 focus:outline-none' />
            </form>

            <form className='bg-slate-50 w-[20rem] h-[80px] focus:bg-yellow-200 flex px-5 items-center justify-center'>
                <label htmlFor="">Focus( only works on single element and not this type of components )</label>
                <input type="text" name="" id="" className='focus:outline-none w-2/3 h-[2rem] bg-blue-300 focus:bg-red-200' />
            </form>

            {/* <form className='bg-slate-50 w-[20rem] h-[80px] focus:bg-red-200 focus-visible:ring px-5 gap-2 flex items-center justify-center'>
                <label htmlFor="">Focus Within ( only works when there is an element inside an element )</label>
                <input type="text" name="" id="" className='w-2/3 h-[2rem] bg-blue-300 focus:bg-red-50 focus:outline-none' />
            </form> */}

            <a href="https://www.google.com" className="text-blue-600 visited:text-purple-600 ...">
            Inspiration ( Visited is pnly for the links that have been visited )
            </a>

                <h3 className='text-white'>....More to come</h3>
        </div>

        <div className='bg-slate-400 h-[200px] w-full  flex justify-center items-center'>
        <form>
        <label className="block">
        <span className="block text-sm font-medium text-slate-700">Username</span>
        <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none 
      invalid:text-pink-600
      focus:invalid:border-pink-500 
        "/>

        {/*mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:ring-1  disabled:bg-red-100 disabled:text-yellow-800 disabled:border-yellow-800 disabled:shadow-xl */}

<span className="block text-sm font-medium text-slate-700">Username</span>
        <input type="email" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:ring-1  disabled:bg-red-100 disabled:text-yellow-800 disabled:border-yellow-800 disabled:shadow-xl
        "/>
            </label>
        </form>
    </div>
    <div className='h-[250px] w-full flex justify-center items-center bg-black'>   
    <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
      <div class="flex items-center space-x-3">
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project with using Group in class and group-hover </h3>
  </div>
  <p class="text-slate-500 group-hover:text-red-200 text-sm">Create a new project from a variety of starting templates.</p>
</a>
    </div>
    </>
  )
}

export default PseudoCore