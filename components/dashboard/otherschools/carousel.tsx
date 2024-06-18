"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { OtherSchoolsCard } from "../../basecomponents/cards";

let OtherSchools = [{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20190128114624518.png",
  star: 5,
  title: "Santo Antonio College",
  position: "Iririu",
  at: "Joinville - SC",
  secure: "PRIVATE SCHOOL"
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20220202203102288.jpg",
  star: 5,
  title: "Intergenius College",
  position: "Juliao Ramos",
  at: "Macapa - AP",
  secure: "PRIVATE SCHOOL"
}, {
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20221214132343404.jpg",
  star: 5,
  title: "Djanira Tavares College",
  position: "cruise",
  at: "Campina Grande - PB",
  secure: "PRIVATE SCHOOL"
}, {
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20210921124838626.jpg",
  star: 5,
  title: "Colegio Rumo Initial",
  position: "Sao, Joao Climaco",
  at: "Sao Paulo - SP",
  secure: "PRIVATE SCHOOL"
}, {
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230612201001704.png",
  star: 5,
  title: "Filomena De Marco College",
  position: "Guarani Park",
  at: "Sao Paulo - SP",
  secure: "PRIVATE SCHOOL"
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20191126021330631.png",
  star: 4,
  title: "Caragua Goal",
  position: "Sumare",
  at: "Caraguatatuba - SP",
  secure: "PRIVATE SHCOOL"
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20221027192739266.jpg",
  star: 4,
  title: "Colegio Objective Hortolandia",
  position: "Remanso Campineiro",
  at: "Hortolandia - SP",
  secure: "PRIVATE SCHOOL"
}];

const CarouselComponent: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center p-[10px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{ clickable: true }}
        >
          {OtherSchools.map((school: any, index: number) => (
            <SwiperSlide key={index}>
              <OtherSchoolsCard
                key={index}
                star={school.star}
                mark={school.mark}
                title={school.title}
                position={school.position}
                at={school.at}
                secure={school.secure}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselComponent;
