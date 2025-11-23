import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
const loanProducts = [
  {
    name: 'FE CREDIT',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85c6c85b54ec81d5a4_fe-credit.avif',
    amount: '4,000,000 - 500,000,000 VNĐ',
    term: '6 - 60 tháng',
    apr: '24% - 36%',
    rating: 4,
    reviews: 156
  },
  {
    name: 'Tima',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8513c8b3ba8f8e1cf2_tima.avif',
    amount: '1,000,000 - 50,000,000 VNĐ',
    term: '3 - 12 tháng',
    apr: '20% - 30%',
    rating: 5,
    reviews: 89
  },
  {
    name: 'Mcredit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8522e5fa3d32c52db2_mcredit.avif',
    amount: '3,000,000 - 300,000,000 VNĐ',
    term: '6 - 48 tháng',
    apr: '25% - 35%',
    rating: 4,
    reviews: 234
  },
  {
    name: 'Home Credit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85f94f60d4e3b6e7a2_home-credit.avif',
    amount: '2,000,000 - 100,000,000 VNĐ',
    term: '6 - 36 tháng',
    apr: '22% - 32%',
    rating: 4,
    reviews: 178
  },
  {
    name: 'VPBank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85291e2a1a2d7f8e3c_vpbank.avif',
    amount: '5,000,000 - 500,000,000 VNĐ',
    term: '12 - 60 tháng',
    apr: '18% - 28%',
    rating: 5,
    reviews: 312
  },
  {
    name: 'Shinhan Bank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85b3a7c1e5d29f4a1b_shinhan.avif',
    amount: '10,000,000 - 1,000,000,000 VNĐ',
    term: '12 - 84 tháng',
    apr: '16% - 26%',
    rating: 5,
    reviews: 267
  }
];
const benefits = [
  'Duyệt khoản vay nhanh chóng chỉ trong 24 giờ',
  'Lãi suất cạnh tranh từ nhiều tổ chức tài chính',
  'Không cần thế chấp tài sản',
  'Quy trình đăng ký đơn giản, hoàn toàn trực tuyến',
  'Giải ngân nhanh sau khi được duyệt',
  'So sánh nhiều sản phẩm vay để chọn phương án tốt nhất'
];
const steps = [
  {
    number: '1',
    title: 'Điền thông tin',
    description: 'Hoàn thành form đăng ký với thông tin cơ bản của bạn'
  },
  {
    number: '2',
    title: 'So sánh đề xuất',
    description: 'Xem và so sánh các khoản vay phù hợp từ nhiều ngân hàng'
  },
  {
    number: '3',
    title: 'Chọn khoản vay',
    description: 'Lựa chọn sản phẩm vay tốt nhất cho nhu cầu của bạn'
  },
  {
    number: '4',
    title: 'Nhận tiền',
    description: 'Được giải ngân nhanh chóng sau khi hồ sơ được duyệt'
  }
];
const faqs = [
  {
    question: 'Vay duyệt tự động là gì?',
    answer: 'Vay duyệt tự động là hình thức cho vay sử dụng công nghệ AI và thuật toán để đánh giá hồ sơ và đưa ra quyết định duyệt vay tự động, giúp rút ngắn thời gian xử lý.'
  },
  {
    question: 'Tôi cần điều kiện gì để vay?',
    answer: 'Bạn cần là công dân Việt Nam từ 18-65 tuổi, có CMND/CCCD hợp lệ, có thu nhập ổn định và không nằm trong danh sách nợ xấu.'
  },
  {
    question: 'Thời gian duyệt khoản vay bao lâu?',
    answer: 'Với công nghệ duyệt tự động, hồ sơ của bạn sẽ được xử lý trong vòng 24 giờ. Trong nhiều trường hợp, kết quả có thể có ngay trong vài phút.'
  },
  {
    question: 'Tôi có cần thế chấp tài sản không?',
    answer: 'Không, các khoản vay qua Jeff phần lớn là vay tín chấp không cần thế chấp tài sản.'
  }
];
export default function VayDuyetTuDong() {
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Vay Duyệt Tự Động - Nhanh Chóng & Tiện Lợi
              </h1>
              <p className="text-xl text-white/90 mb-8">
                So sánh và đăng ký khoản vay từ các tổ chức tài chính uy tín. 
                Duyệt tự động trong 24 giờ với lãi suất cạnh tranh.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-6 text-lg rounded-full">
                  Đăng ký ngay
                </Button>
                <Button variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg rounded-full">
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601cb9ba9aa2e76614cef7_hero.svg" 
                alt="Vay duyệt tự động"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Lợi ích khi vay qua Jeff
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-[#333d54] font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Loan Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              So sánh các sản phẩm vay duyệt tự động
            </h2>
            <p className="text-lg text-gray-600">
              Chọn khoản vay phù hợp với nhu cầu của bạn từ các đối tác uy tín
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="flex items-center justify-center h-20 mb-6">
                  <img 
                    src={product.logo} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#333d54] text-center mb-4">
                  {product.name}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Số tiền vay:</span>
                    <span className="text-sm font-semibold text-[#333d54]">{product.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Thời hạn:</span>
                    <span className="text-sm font-semibold text-[#333d54]">{product.term}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lãi suất (APR):</span>
                    <span className="text-sm font-semibold text-[#333d54]">{product.apr}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < product.rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} đánh giá)</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
                  Đăng ký ngay
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Quy trình vay đơn giản chỉ 4 bước
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#333d54] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng để bắt đầu?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Đăng ký ngay để nhận được các đề xuất khoản vay tốt nhất từ nhiều ngân hàng và tổ chức tài chính uy tín
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-12 py-6 text-lg rounded-full">
            Đăng ký vay ngay
          </Button>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-[#333d54] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}