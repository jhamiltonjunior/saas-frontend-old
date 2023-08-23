export default function Message({ message, levelOfAlert, display }:any) {
  let setComponentColor = ''
  let setSpanColor = ''

  if (levelOfAlert === 'success') {
    setComponentColor = 'bg-green-100 border border-green-400 text-red-700'
    setSpanColor = 'text-red-500'
  } if (levelOfAlert === 'error') {
    setComponentColor = 'bg-red-100 border border-red-400 text-red-700'
    setSpanColor = 'text-red-500'
  } else if (levelOfAlert === 'warning') {
    setComponentColor = 'bg-yellow-100 border border-yellow-400 text-yellow-700'
    setSpanColor = 'text-yellow-500'
  } else if (levelOfAlert === 'info') {
    setComponentColor = 'bg--100 border border-red-400 text-red-700'
    setSpanColor = 'text-red-500'
  } else if (levelOfAlert === 'new') {
    setComponentColor = 'bg-blue-100 border border-blue-400 text-blue-700'
    setSpanColor = 'text-blue-500'
  }

  return <div className={`${setComponentColor} display message-component my-0 mx-auto px-4 py-3 rounded relative`} role="alert">
      {/* <strong className="font-bold">Holy smokes!</strong> */}
      
      <span className="block sm:inline">{ message }</span>
      
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className={`fill-current h-6 w-6 ${setSpanColor}`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
  </div>
  
}