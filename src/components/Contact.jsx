import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="text-center text-4xl">Contact</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 ">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <button onClick={() =>  navigator.clipboard.writeText('vzlkff@gmail.com')} className="my-4 border-b" href=""><p>{CONTACT.email}</p></button>
      </div>
    </div>
  )
}

export default Contact
