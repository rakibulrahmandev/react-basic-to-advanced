import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    
    let number = "0123456789"
    let character = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`

    if (numberAllowed) str += number;
    if (character) str += character;

    for (let i = 1; i <= length; i++) {
      let passGen = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(passGen)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-[450px] min-h-[90px] bg-slate-900 rounded-md p-4">
          <div className="w-full flex items-center justify-center gap-2">
            <input type="text" value={password} placeholder="password" readOnly autoComplete="off" ref={passRef} className="outline-none border border-slate-400 py-2 px-3 text-white rounded-md flex-1"/>
            <button onClick={copyPassword} className="bg-emerald-700 text-white py-2.5 px-3 rounded-md cursor-pointer hover:bg-emerald-800">Copy</button>
          </div>
          <div className="w-full flex items-center justify-between mt-5">
            <div className="text-white text-sm flex items-center justify-center gap-2">
              <input type="range" className="w-[80px] mt-0.5" onChange={(e) => setLength(e.target.value)} min={8} max={20} value={length} />
              <label>Length: ({length})</label>
            </div>
            <div className="text-white text-sm flex items-center justify-center gap-2">
              <input type="checkbox" className="mt-0.5" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
              <label>Include Number</label>
            </div>
            <div className="text-white text-sm flex items-center justify-center gap-2">
              <input type="checkbox" className="mt-0.5" defaultChecked={characterAllowed} onChange={() => setCharacterAllowed((prev) => !prev)} />
              <label>Include Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
