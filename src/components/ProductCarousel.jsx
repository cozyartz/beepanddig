import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Gem, ShoppingCart } from 'lucide-react';
import 'swiper/css';
import { IMAGE_DELIVERY_URL } from '../../consts';

const ProductCarousel = () => {
  const products = [
    { name: 'Garrett AT Pro Metal Detector', link: 'https://amzn.to/3XYZ123', image: `${IMAGE_DELIVERY_URL}/detector.jpg` },
    { name: 'Nokta Pinpointer', link: 'https://amzn.to/3ABC456', image: `${IMAGE_DELIVERY_URL}/pinpointer.jpg` },
    { name: 'Digging Trowel', link: 'https://amzn.to/3DEF789', image: `${IMAGE_DELIVERY_URL}/trowel.jpg` },
  ];
  return (
    <section className="py-20">
      <h2 className="text-4xl font-semibold text-heading text-center mb-10 flex items-center gap-4">
        <Gem size={32} className="text-accent animate-bounce" />
        Top Metal Detecting Gear
      </h2>
      <Swiper spaceBetween={40} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="px-6">
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <motion.div className="bg-gray-dark rounded-2xl p-6 shadow-lg" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.3 }}>
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-xl" />
              <h3 className="text-2xl text-accent mt-6 flex items-center gap-3"><Gem size={24} />{product.name}</h3>
              <motion.a href={product.link} className="text-heading underline hover:text-accent-hover flex items-center gap-3 mt-4 font-semibold" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <ShoppingCart size={24} />Buy Now
              </motion.a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;