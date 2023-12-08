import React from 'react'
import CityCard from '../CityCard'

function CitySection() {
    return (
        <div>
            <div className=" my-5 mx-auto w-[1200px]">
                <h2 className="border-b-2 border-[#7f1657] pb-4 my-10 text-3xl text-[#7f1657] font-semibold">
                    Top Cities In India
                    <p className="text-sm">Best places to live in India</p>
                </h2>
                <div className="w-full relative">
                    <CityCard />
                </div>
            </div>
        </div>
    )
}

export default CitySection