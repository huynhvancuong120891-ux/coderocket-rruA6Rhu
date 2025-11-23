import { Button } from '@/components/ui/button';
import { Check, Clock, Shield, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const loanProducts = [
  {
    name: 'VPBank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85291e2a1a2d7f8e3c_vpbank.avif',
    amount: '10,000,000 - 500,000,000 VNĐ',
    term: '12 - 60 tháng',
    apr: '18% - 28%',
    rating: 5,
    reviews: 312,
    features: ['Không cần thế chấp', 'Giải ngân nhanh 24h', 'Lãi suất ưu đãi']
  },
  {
    name: 'Shinhan Bank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85b3a7c1e5d29f4a1b_shinhan.avif',
    amount: '10,000,000 - 1,000,000,000 VNĐ',
    term: '12 - 84 tháng',
    apr: '16% - 26%',
    rating: 5,
    reviews: 267,
    features: ['Thủ tục đơn giản', 'Ưu đãi khách hàng mới', 'Hỗ trợ 24/7']
  },
  {
    name: 'FE CREDIT',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85c6c85b54ec81d5a4_fe-credit.avif',
    amount: '4,000,000 - 500,000,000 VNĐ',
    term: '6 - 60 tháng',
    apr: '24% - 36%',
    rating: 4,
    reviews: 156,
    features: ['Duyệt nhanh online', 'Linh hoạt kỳ hạn', 'Không phí ẩn']
  },
  {
    name: 'Home Credit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85f94f60d4e3b6e7a2_home-credit.avif',
    amount: '2,000,000 - 100,000,000 VNĐ',
    term: '6 - 36 tháng',
    apr: '22% - 32%',
    rating: 4,
    reviews: 178,
    features: ['Trả góp linh hoạt', 'Phê duyệt tức thì', 'Miễn phí đăng ký']
  },
  {
    name: 'Mcredit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8522e5fa3d32c52db2_mcredit.avif',
    amount: '3,000,000 - 300,000,000 VNĐ',
    term: '6 - 48 tháng',
    apr: '25% - 35%',
    rating: 4,
    reviews: 234,
    features: ['Vay tín chấp', 'Giải ngân tận nhà', 'Thủ tục nhanh']
  },
  {
    name: 'Tima',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8513c8b3ba8f8e1cf2_tima.avif',
    amount: '1,000,000 - 50,000,000 VNĐ',
    term: '3 - 12 tháng',
    apr: '20% - 30%',
    rating: 5,
    reviews: 89,
    features: ['100% online', 'Duyệt tự động', 'Không cần giấy tờ']
  }
];
const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: 'Lãi suất cạnh tranh',
    description: 'So sánh lãi suất từ nhiều ngân hàng và tổ chức tài chính để chọn mức tốt nhất'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: 'Giải ngân nhanh chóng',
    description: 'Nhận tiền trong vòng 24-48 giờ sau khi hồ sơ được phê duyệt'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: 'An toàn & bảo mật',
    description: 'Thông tin cá nhân được bảo vệ tuyệt đối theo tiêu chuẩn quốc tế'
  }
];
const requirements = [
  'Công dân Việt Nam từ 21-60 tuổi',
  'Có CMND/CCCD còn hiệu lực',
  'Thu nhập ổn định tối thiểu 4,000,000 VNĐ/tháng',
  'Không nằm trong danh sách nợ xấu CIC',
  'Có tài khoản ngân hàng hoạt động',
  'Cung cấp bảng lương hoặc sao kê thu nhập'
];
const loanPurposes = [
  {
    icon: '🏠',
    title: 'Sửa chữa nhà cửa',
    description: 'Cải tạo, sửa chữa và nâng cấp nơi ở'
  },
  {
    icon: '🎓',
    title: 'Chi phí giáo dục',
    description: 'Học phí, đào tạo và phát triển bản thân'
  },
  {
    icon: '🏥',
    title: 'Y tế - Sức khỏe',
    description: 'Chi phí khám chữa bệnh và chăm sóc sức khỏe'
  },
  {
    icon: '✈️',
    title: 'Du lịch - Nghỉ dưỡng',
    description: 'Các chuyến đi và trải nghiệm ý nghĩa'
  },
  {
    icon: '💍',
    title: 'Đám cưới - Sự kiện',
    description: 'Tổ chức các sự kiện quan trọng trong đời'
  },
  {
    icon: '💼',
    title: 'Kinh doanh nhỏ',
    description: 'Khởi nghiệp và mở rộng kinh doanh'
  }
];
export default function VayTieuDung() {
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Vay Tiêu Dùng - Giải pháp tài chính cho mọi nhu cầu
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                So sánh và lựa chọn khoản vay tiêu dùng phù hợp nhất từ các ngân hàng và tổ chức tài chính uy tín. 
                Lãi suất hấp dẫn, thủ tục đơn giản, giải ngân nhanh chóng.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-white text-lg">Lãi suất từ 16%/năm - cạnh tranh nhất thị trường</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-white text-lg">Vay lên đến 1 tỷ đồng không cần thế chấp</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-white text-lg">Giải ngân trong 24 giờ sau khi được duyệt</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-10 py-6 text-lg rounded-full shadow-lg">
                  So sánh khoản vay
                </Button>
                <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 px-10 py-6 text-lg rounded-full">
                  Tính khoản vay
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601cb9ba9aa2e76614cef7_hero.svg" 
                alt="Vay tiêu dùng"
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Tại sao nên chọn vay tiêu dùng qua Jeff?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chúng tôi giúp bạn tìm kiếm và so sánh các khoản vay tốt nhất từ nhiều ngân hàng
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d54] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Loan Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              So sánh các gói vay tiêu dùng hàng đầu
            </h2>
            <p className="text-lg text-gray-600">
              Lựa chọn khoản vay phù hợp nhất với tình hình tài chính của bạn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all p-6 border border-gray-100">
                <div className="flex items-center justify-center h-20 mb-6 bg-gray-50 rounded-lg">
                  <img 
                    src={product.logo} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain p-2"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#333d54] text-center mb-6">
                  {product.name}
                </h3>
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Số tiền vay:</span>
                    <span className="text-sm font-bold text-[#333d54]">{product.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Thời hạn:</span>
                    <span className="text-sm font-bold text-[#333d54]">{product.term}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lãi suất (APR):</span>
                    <span className="text-sm font-bold text-blue-600">{product.apr}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 mb-6 py-3 bg-yellow-50 rounded-lg">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < product.rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">({product.reviews} đánh giá)</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md">
                  Đăng ký ngay
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Loan Purposes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Vay tiêu dùng cho mọi mục đích
            </h2>
            <p className="text-lg text-gray-600">
              Sử dụng khoản vay cho bất kỳ nhu cầu cá nhân nào của bạn
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanPurposes.map((purpose, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{purpose.icon}</div>
                <h3 className="text-lg font-bold text-[#333d54] mb-2">
                  {purpose.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {purpose.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Requirements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Điều kiện để vay tiêu dùng
            </h2>
            <p className="text-xl text-white/90">
              Đáp ứng các yêu cầu cơ bản để đăng ký khoản vay
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-[#333d54] font-medium">{requirement}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                Đáp ứng đủ điều kiện? Đăng ký ngay để nhận ưu đãi tốt nhất!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-lg">
                Kiểm tra điều kiện
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Câu hỏi thường gặp về vay tiêu dùng
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Vay tiêu dùng là gì?',
                answer: 'Vay tiêu dùng là hình thức vay tín chấp không có mục đích sử dụng cụ thể, bạn có thể sử dụng khoản vay cho bất kỳ nhu cầu cá nhân nào như mua sắm, du lịch, sửa nhà, giáo dục...'
              },
              {
                question: 'Tôi có thể vay tối đa bao nhiêu tiền?',
                answer: 'Tùy vào ngân hàng và khả năng tài chính của bạn, mức vay có thể từ vài triệu đến 1 tỷ đồng. Thông thường, mức vay tối đa bằng 15-20 lần thu nhập hàng tháng.'
              },
              {
                question: 'Thời gian vay tối đa là bao lâu?',
                answer: 'Thời hạn vay tiêu dùng thường từ 6 tháng đến 84 tháng (7 năm), tùy thuộc vào chính sách của từng ngân hàng và số tiền bạn vay.'
              },
              {
                question: 'Tôi có cần thế chấp tài sản không?',
                answer: 'Không, vay tiêu dùng là hình thức vay tín chấp không cần thế chấp tài sản. Bạn chỉ cần chứng minh thu nhập ổn định và lịch sử tín dụng tốt.'
              },
              {
                question: 'Lãi suất vay tiêu dùng là bao nhiêu?',
                answer: 'Lãi suất vay tiêu dùng hiện nay dao động từ 16%-36%/năm tùy ngân hàng. Jeff giúp bạn so sánh và tìm được mức lãi suất tốt nhất phù hợp với điều kiện của bạn.'
              },
              {
                question: 'Tôi có thể trả nợ trước hạn không?',
                answer: 'Có, hầu hết các ngân hàng cho phép trả nợ trước hạn. Tuy nhiên, một số ngân hàng có thể thu phí trả trước, bạn nên kiểm tra kỹ điều khoản trước khi ký hợp đồng.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#333d54] mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Bắt đầu so sánh khoản vay ngay hôm nay!
          </h2>
          <p className="text-xl text-blue-800 mb-8">
            Chỉ mất 2 phút để tìm được khoản vay tốt nhất cho nhu cầu của bạn
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
            So sánh ngay
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}