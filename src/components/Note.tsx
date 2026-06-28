import AddNote from "./AddNote"
import ListNote from "./litstNote"


const Note = () => {
  return (
 <div className="flex items-center justify-center h-[75vh]">
  <div className='bg-[#eee] rounded-3xl p-4 w-[58%] h-96 gap-2'>
    <div className="flex gap-9">
     <AddNote />
     <ListNote /> 
    </div>
    
  </div>
</div>
  
  )
}

export default Note
