import { Button } from './ui/button';
const cards = [
  {
    title: 'Muadee by HDBank',
    image: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/67af12d64d589896c67b2443_muadee-cc.avif',
    rating: 5
  },
  {
    title: 'Liobank by OCB',
    image: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/67811012123bc4ee3e76de7d_liobank.avif',
    rating: 5
  },
  {
    title: 'HDBank Petrolimex 4in1',
    image: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/673ef7f97d2d2344dd6c2b4f_66755b0db85d6298a49b9417_cc-image-p-500.png',
    rating: 5
  },
  {
    title: 'Muadee by HDBank',
    image: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6781105f63a9f448862e0233_muadee.avif',
    rating: 5
  }
];
export default function TopCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
          Top thẻ tín dụng được nhiều người lựa chọn nhất
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="font-semibold text-[#333d54] mb-2">{card.title}</h3>
              <div className="flex gap-1 mb-4">
                {[...Array(card.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <Button className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-50">
                Đăng ký ngay
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="link" className="text-blue-600">
            So sánh tất cả các loại thẻ
          </Button>
        </div>
      </div>
    </section>
  );
}