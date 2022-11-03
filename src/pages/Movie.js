import {useParams,useNavigate} from "react-router-dom";


const Movie = () => {
  const {title}=useParams();
  const value=useNavigate()
  const goBack=useNavigate()
  console.log(value)
  return(
    <>
      <h1>Movie List : {title}</h1>
      <button className='btn' onClick={()=>goBack('/')}>Go back</button>
    </>)
}
export {Movie}