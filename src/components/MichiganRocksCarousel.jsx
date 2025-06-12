import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTreasureChest } from '@fortawesome/pro-solid-svg-icons';
import 'swiper/css';
import { IMAGE_DELIVERY_URL } from '../../consts';

const MichiganRocksCarousel = () => {
  const rocks = [
    { name: 'Petoskey Stone', image: `${IMAGE_DELIVERY_URL}petoskey-stone-id/default` },
    { name: 'Lake Superior Agate', image: `${IMAGE_DELIVERY_URL}agate-id/default` },
    { name: 'Native Copper Nugget', image: `${IMAGE_DELIVERY_URL}copper-nugget-id/default` },
  ];
  return (
    <section className="py-20">
      <h2 className="text-4xl font-semibold text-heading text-center mb-10 flex items-center gap-4">
        <FontAwesomeIcon icon={faTreasureChest} size="2x" className="text-accent animate-pulse-slow" />
        Michigan’s Rock Treasures
      </h2>
      <Swiper spaceBetween={40} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="px-6">
        {rocks.map((rock, index) => (
          <SwiperSlide key={index}>
            <motion.div className="bg-gray-dark rounded-2xl p-6 shadow-lg" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.3 }}>
              <img src={rock.image} alt={rock.name} className="w-full h-56 object-cover rounded-xl" />
              <h3 className="text-2xl text-accent mt-6 flex items-center gap-3"><FontAwesomeIcon icon={faTreasureChest} size="lg" />{rock.name}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MichiganRocksCarousel;