
import { FaBed } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Project({ data }) {
    const navigate = useNavigate();

    return (
        <div
            className='border border-border bg-dry'
        >
            <div className="h-[200px]">
                <img className="w-full h-full object-cover border-b-2" src={data?.gallery[0]?.secure_url || "https://www.homznspace.com/wp-content/uploads/2023/11/Main-Elevation-Brigade-Sanctuary-324x235.jpg"} alt="" />
            </div>
            <div className="p-4 mt-2">
                <div className="flex justify-between">
                    <span className="font-medium text-[#7f1657] text-lg">₹ {data.pricing.startingFrom} Cr</span>
                    <button onClick={() => navigate(`/project/${data._id}`, {state: data})} className="px-2 py-1 rounded-sm  border-2">Details</button>
                </div>
                <h3 className="project_name text-xl font-medium my-2">{data.name}</h3>
                <p className="project_description text-sm">3,4 BHK Apartment in Dhul Siras, Dwarka Delhi</p>
            </div>
        </div>
    )
}

export default Project