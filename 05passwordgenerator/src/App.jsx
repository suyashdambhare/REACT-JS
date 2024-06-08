import { useCallback, useState ,useEffect,useRef } from 'react'



function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className='w-full  max-w-md mx-auto py-8 shadow-md rounded-3xl text-orange-500 '>
       <h1 className='text-4xl text-teal-300 text-center px-8 mb-8  top-8 font-serif'>Password Generator</h1>
       <div className='flex shadow overflow-hidden rounded-lg mb-4 text-black font-bold'>
         <input type="text"
        value={password}
        className='outline-none px-16 py-1'
        placeholder='Password'
        ref={passwordRef}
        readOnly
        />
        <button className='center flex px-12 py-2 text-white font-serif font-bold shrink-0 bg-orange-600 rounded-lg' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-start gap-x-2'> 
      <div className='flex text-sm gap-x-1'>
        <input type="range" min={6} max={100} value={length} onChange={(s)=>{ setLength(s.target.value)} }
        className='px-2 cursor-pointer' />
        <label className='text-white'>Length of Password ={length}</label></div> 
      
       </div>
       <div className='px-8 py-4 text-white font-bold'>
       <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{
        setNumberAllowed((prev) =>!prev)}}/>   Number <br />
        <input type="checkbox" id='characterInput'  defaultChecked={charAllowed} onChange={()=>{
        setCharAllowed((prev) =>!prev)}} /> Symbols </div>
     </div>
    
  )
}

export default App
