const reviews = [
  {
    platform: 'Jeff',
    description: 'Lên đến tốc độ giải ngân như chớp, tôi không thể tin được!',
    rating: 5,
    date: 'about 1 hour ago'
  },
  {
    platform: 'Sacombank Visa',
    description: 'Lãi suất thấp tốt hơn hình, đăng nhập và sử dụng nhanh gọn. Trung thực với khách hàng.',
    rating: 4,
    date: 'about 2 hours ago'
  },
  {
    platform: 'Sacombank Visa',
    description: 'Lãi suất thấp tốt hơn hình, đăng nhập và sử dụng nhanh gọn nên rất tiện lợi.',
    rating: 4,
    date: 'about 2 hours ago'
  },
  {
    platform: 'Sacombank Visa',
    description: 'Lãi suất và một mức chấp nhận đặc biệt dễ dài hạn lại.',
    rating: 4,
    date: 'about 2 hours ago'
  },
  {
    platform: 'Jeff',
    description: 'Lẽ nào hôm nay đặt hàng xong lại là xé phiếu phải duyệt sổ xố lại và nó dễ quá ạ.',
    rating: 5,
    date: 'about 2 hours ago'
  }
];
export default function ReviewsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#333d54] mb-4">
          Kiểm tra những đánh giá dễ được xác minh của người dùng trước khi đưa ra quyết định
        </h2>
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button className="px-4 py-2 font-semibold text-blue-600 border-b-2 border-blue-600">
            Tất cả đánh giá
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
            Khách sạn
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#333d54]">{review.platform}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{review.description}</p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400' : 'fill-gray-300'}`} 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}