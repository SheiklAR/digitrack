import BranchForm from "../components/BranchForm"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const EditPage = () => {


  const navigate = useNavigate()
  const { id } = useParams()


  return (
    <div>
      <BranchForm id={id} />
    </div>
  )
}

export default EditPage