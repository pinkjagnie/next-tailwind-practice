import React, { useState } from "react";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName, enteredEmail, enteredSubject, enteredMessage);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredSubject("");
    setEnteredMessage("")
  };

  return(
    <section className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className='text-2xl font-bold text-center text-fuchsia-600 p-4'>Wanna work together?</h1>
      <h2 className='text-xl font-bold text-center text-fuchsia-600'>Contact me</h2>

      <form className='max-w-[600px] m-auto pt-10' onSubmit={submitHandler}>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3' type="text" placeholder='Name' required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
          <input className='border shadow-lg p-3' type="email" placeholder='Email' required value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)}/>
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' required value={enteredSubject} onChange={event => setEnteredSubject(event.target.value)}/>
        <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' required value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)}></textarea>
        <button className='bg-gray-100 border shadow-lg p-3 w-full mt-2 hover:bg-gray-700 hover:text-[white]'>Submit</button>
      </form>
    </section>
  )
};

export default ContactForm;