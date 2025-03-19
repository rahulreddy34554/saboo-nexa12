// const ColorSlider = ({ colors, handleSlideChange, activeIndex }) => {
//   const navigationPrevRef = useRef(null);
//   const navigationNextRef = useRef(null);
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   useEffect(() => {
//     if (swiperInstance) {
//       swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
//       swiperInstance.params.navigation.nextEl = navigationNextRef.current;
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance]);

//   return (
//     <Swiper
//       modules={[Navigation]}
//       onSwiper={setSwiperInstance}
//       onBeforeInit={(swiper) => {
//         swiper.params.navigation.prevEl = navigationPrevRef.current;
//         swiper.params.navigation.nextEl = navigationNextRef.current;
//       }}
//       slidesPerView={5}
//       className="relative max-w-xs"
//       onSlideChange={handleSlideChange}
//     >
//       {colors.map((color, index) => (
//         <SwiperSlide key={index} className="relative">
//           <div
//             style={{
//               background: color.background,
//             }}
//             className="w-8 h-8 cursor-pointer"
//           ></div>
//           {activeIndex === index && (
//             <div className="absolute">
//               <img
//                 src={require("../../../assets/cars/e-vitara/check-icon.png")}
//                 alt=""
//               />
//             </div>
//           )}
//         </SwiperSlide>
//       ))}

//       {/* Previous Button */}
//       <div
//         ref={navigationPrevRef}
//         className="absolute  !z-10 text-primary bg-red-500 rounded-full p-2 cursor-pointer"
//       >
//         <LuMoveRight className="text-xl rotate-180" />
//       </div>

//       {/* Next Button */}
//       <div
//         ref={navigationNextRef}
//         className="absolute  !z-10 text-primary bg-red-500 rounded-full p-2 cursor-pointer"
//       >
//         <LuMoveRight className="text-xl" />
//       </div>
//     </Swiper>
//   );
// };
