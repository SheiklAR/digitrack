import { useState, useEffect } from "react";
import { useGetBranchesQuery } from "../../slices/apiSlice";
// import { fapencilAlt } from "@fortawesome/free-regular-svg-icons";
import { faPencilAlt as fapencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


const BranchTable = () => {
  const [data, setData] = useState([]);

  const { data: branches } = useGetBranchesQuery();
  const navigate = useNavigate();

  useEffect(() => {
    setData(branches);
    console.log(branches);
  }, [branches]);

  const handleClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className='border-2 border-gray-300 rounded-md max-w-7xl mx-auto my-10 divide-y-2 divide-gray-300'>
      <div className='text-2xl px-2 py-4 font-bold text-gray-500'>
        Branch
      </div>
      <div className='px-2 py-4'>
        Search here...
      </div>
      <div className='px-2 py-4'>
        <table>
          <thead className='text-md text-sky-500 bg-gray-100 overflow-x-scroll'>
            <tr>
              <th className="border border-gray-200 p-2 w-44">No</th>
              <th className="border border-gray-200 p-2 w-[1000px]">Branch Name</th>
              <th className='border border-gray-200 p-2 w-[1000px]'>Branch Code </th>
              <th className='border border-gray-200 p-2 w-[1000px]'>Short Name </th>
              <th className='border border-gray-200 p-2 w-[1000px]'>Branch Type </th>
              <th className='border border-gray-200 p-2 w-[1000px]'>Vehicle Type </th>
              <th className='border border-gray-200 p-2 w-[1000px]'>PAN Number </th>
              <th className='border border-gray-200 p-2 w-[1000px]'>GSTIN </th>
              <th className='border border-gray-200 p-2 w-[1000px]'>Address</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map(d => (
              
            <tr key={d.id} className='text-md text-gray-500'>
              <td className="border border-gray-200 p-2 w-44">1</td>
                <td className="border border-gray-200 p-2 w-[1000px]">{ d.name.toUpperCase() }</td>
                <td className='border border-gray-200 p-2 w-[1000px]'>{ d.code.toUpperCase()}</td>
                <td className='border border-gray-200 p-2 w-[1000px]'>{ d.short_name.toUpperCase()}</td>
                <td className='border border-gray-200 p-2 w-[1000px]'>{ d.branch_type.toUpperCase()}</td>
                <td className='border border-gray-200 p-2 w-[1000px]'>{ d.vehicle_type}</td>
                <td className='border border-gray-200 p-2 w-[1000px]'>{ d.panNumber}</td>
                <td className='border border-gray-200 p-2 w-[1000px]'>{ d.gstIn}</td>
                <td className='border border-gray-200 p-2 w-[1000px]'>{ `${d.door_no}, ${d.street}, ${d.city}, ${d.locality}, ${d.state} `}</td>
                <td className='border border-gray-200 p-2 w-[1000px] text-blue-400'>
                  <button onClick={() => handleClick(d.id)}>
                      <FontAwesomeIcon className="cursor-pointer hover:text-blue-600 hover:transform hover:transition hover:scale-110" icon={fapencilAlt} />
                  </button>
                </td>
            </tr>
            )) }
          </tbody>
        </table>
      </div>
      <div className='text-2xl px-2 py-2 pb-4 font-bold text-gray-500'>
        hello unga bunga
      </div>
    </div>
  )
}



export default BranchTable