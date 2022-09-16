import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../firebase'

const style = {
    form:`h-14 w-full max-w-[728px] flex texl-xl absolute bottom-0`,
    input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button:`w-[20%] bg-green-500`
}
function SendMessage({scroll}) {
const [input, setInput ] = useState("")

const sendMessage = async (e) =>{
    e.preventDefault()
    if (input === ""){
        alert("Please enter valid message")
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput("")
    scroll.current.scrollIntoView({behavior: 'smooth'})
}
  return (
    <form onSubmit={sendMessage} className={style.form}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type={'text'} placeholder="Message" className={style.input}></input>
        <button type="submit" className={style.button}>Send</button>
    </form>
  )
}

export default SendMessage