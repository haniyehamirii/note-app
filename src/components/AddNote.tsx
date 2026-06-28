
const AddNote = () => {
  return (
    <div className="bg-white w-52 p-4  rounded-3xl">
     <div className="flex items-center justify-center flex-col gap-2">
         <input type="text" placeholder="title"  className="bg-[#eee] rounded-[0.85rem] text-[13px] p-2 focus:outline-0 pl-2 w-[98%]"  />
         <textarea name="note" placeholder="note" className="bg-[#eee] text-[13px] w-[98%] focus:outline-0 rounded-[0.85rem] p-1 pl-2" />
     </div>
       
      <button className="w-22 ml-1 rounded-[0.65rem] bg-[#2bff0036] p-1 text-[12px] font-sans mt-2">Add</button>
     
    </div>
  )
}

export default AddNote
