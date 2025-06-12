import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTreasureChest, faShoppingCart } from '@fortawesome/pro-solid-svg-icons';
import 'swiper/css';
import { IMAGE_DELIVERY_URL } from '../../consts';

const ProductCarousel = () => {
  const products = [
    { name: 'Garrett AT Pro Metal Detector', link: '/affiliate/garrett-at-pro', image: `${IMAGE_DELIVERY_URL}detector-id/default` },
    { name: 'Nokta Pinpointer', link: '/affiliate/nokta-pinpointer', image: `${IMAGE_DELIVERY_URL}pinpointer-id/default` },
    { name: 'Digging Trowel', link: '/affiliate/digging-trowel', image: `${IMAGE_DELIVERY_URL}trowel-id/default` },
  ];
  return (
    <section className="py-20">
      <h2 className="text-4xl font-semibold text-heading text-center mb-10 flex items-center gap-4">
        <FontAwesomeIcon icon={faTreasureChest} size="2x" className="text-accent animate-bounce" />
        Top Metal Detecting Gear
      </h2>
      <Swiper spaceBetween={40} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="px-6">
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <motion.div className="bg-gray-dark rounded-2xl p-6 shadow-lg" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.3 }}>
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-xl" />
              <h3 className="text-2xl text-accent mt-6 flex items-center gap-3"><FontAwesomeIcon icon={faTreasureChest} size="lg" />{product.name}</h3>
              <motion.a href={product.link} className="text-heading underline hover:text-accent-hover flex items-center gap-3 mt-4 font-semibold" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />Buy Now
              </motion.a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;