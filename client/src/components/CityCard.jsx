import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProjects } from "../redux/slices/projectSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';


function CityCard() {
    const dispatch = useDispatch();
    const [city, setCity] = useState([]);
    const { projects } = useSelector((state) => state.project);
    // const cityD = []
    // console.log(projects)
    // const cityData = projects.find((item) => {
    //     return item.city
    // })
    // console.log(city)
    // async function onLoadGetData() {
    //     const response = await dispatch(getAllProjects());
    //     console.log(response?.payload?.data)
    //     const cityData = response?.payload?.data.map((item) => {

    //         return item.city
    //     })
    //     console.log(cityData)
    //     // console.log(response?.payload?.data?.name);
    //     for (let i = 0; i < cityData.length; i++) {
    //         if (!city.includes(cityData[i])) {
    //             setCity(cityData[i])
    //         }
    //     }
    // }
    // useEffect(() => {
    //     onLoadGetData()
    // }, [])

    return (
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
                <SwiperSlide className=" bg-white border min-w-[130px] h-[80px] rounded-md flex items-center justify-center text-center">
                    <h4 className=" text-center text-black">Delhi</h4>
                </SwiperSlide>
            </Swiper>
    )
}


export default CityCard;