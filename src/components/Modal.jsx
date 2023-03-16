function Modal({children, state, change, title = 'Alert', image = 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'}) {
  return (
    <>
    {state &&
    <div className='fixed text-5xl text-indigo-500 w-full h-full bg-white top-0 left-0 flex justify-center items-center p-10'>
      <div className='w-96 min-h-96 bg-slate-700 relative rounded p-3'>
        <div className='flex items-center justify-between mb-5 pb-5'>
          <h1 className='text-lg'>{title}</h1>
        </div>
          <button className='text-lg absolute right-5 top-2'onClick={() => change(false)}>x</button>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold mb-2.5'>{children}</h1>
          <p className='text-xl mb-2.5'>{children}</p>
          <img className='w-full align-top rounded' src={image} alt='imagen'></img>
          <button onClick={() => change(false)}>enter</button>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default Modal