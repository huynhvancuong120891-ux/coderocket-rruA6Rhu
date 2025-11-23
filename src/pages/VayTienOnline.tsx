import { Button } from '@/components/ui/button';
import { Check, Smartphone, Clock, Shield, Zap, CreditCard, FileCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const loanProducts = [
  {
    name: 'Tima',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8513c8b3ba8f8e1cf2_tima.avif',
    amount: '1,000,000 - 50,000,000 VNĐ',
    term: '3 - 12 tháng',
    apr: '20% - 30%',
    rating: 5,
    reviews: 234,
    approvalTime: '5 phút',
    disbursementTime: '15 phút',
    features: ['100% online', 'Không cần giấy tờ', 'Duyệt tự động AI']
  },
  {
    name: 'VPBank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85291e2a1a2d7f8e3c_vpbank.avif',
    amount: '5,000,000 - 500,000,000 VNĐ',
    term: '12 - 60 tháng',
    apr: '18% - 28%',
    rating: 5,
    reviews: 456,
    approvalTime: '2 giờ',
    disbursementTime: '24 giờ',
    features: ['Thủ tục online', 'Lãi suất ưu đãi', 'Hạn mức cao']
  },
  {
    name: 'Mcredit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8522e5fa3d32c52db2_mcredit.avif',
    amount: '3,000,000 - 300,000,000 VNĐ',
    term: '6 - 48 tháng',
    apr: '25% - 35%',
    rating: 4,
    reviews: 389,
    approvalTime: '30 phút',
    disbursementTime: '2 giờ',
    features: ['Giải ngân nhanh', 'Không thế chấp', 'App đơn giản']
  },
  {
    name: 'FE CREDIT',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85c6c85b54ec81d5a4_fe-credit.avif',
    amount: '4,000,000 - 500,000,000 VNĐ',
    term: '6 - 60 tháng',
    apr: '24% - 36%',
    rating: 4,
    reviews: 312,
    approvalTime: '1 giờ',
    disbursementTime: '24 giờ',
    features: ['Duyệt online', 'Linh hoạt kỳ hạn', 'Uy tín lâu năm']
  },
  {
    name: 'Home Credit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85f94f60d4e3b6e7a2_home-credit.avif',
    amount: '2,000,000 - 100,000,000 VNĐ',
    term: '6 - 36 tháng',
    apr: '22% - 32%',
    rating: 4,
    reviews: 267,
    approvalTime: '20 phút',
    disbursementTime: '1 giờ',
    features: ['Trả góp 0%', 'Đăng ký dễ dàng', 'Phê duyệt nhanh']
  },
  {
    name: 'Shinhan Bank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85b3a7c1e5d29f4a1b_shinhan.avif',
    amount: '10,000,000 - 1,000,000,000 VNĐ',
    term: '12 - 84 tháng',
    apr: '16% - 26%',
    rating: 5,
    reviews: 198,
    approvalTime: '3 giờ',
    disbursementTime: '24 giờ',
    features: ['Lãi suất thấp', 'Hạn mức lớn', 'Bảo mật cao']
  }
];
const benefits = [
  {
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    title: '100% Online',
    description: 'Đăng ký hoàn toàn qua điện thoại hoặc máy tính, không cần đến chi nhánh'
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: 'Duyệt Siêu Nhanh',
    description: 'Kết quả duyệt trong vài phút với công nghệ AI hiện đại'
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: 'Giải Ngân 24/7',
    description: 'Nhận tiền mọi lúc mọi nơi, kể cả cuối tuần và ngày lễ'
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: 'An Toàn Bảo Mật',
    description: 'Thông tin được mã hóa theo tiêu chuẩn ngân hàng quốc tế'
  }
];
const steps = [
  {
    number: '1',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Tải App hoặc Truy cập Website',
    description: 'Download ứng dụng hoặc truy cập trang web của đối tác'
  },
  {
    number: '2',
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Điền Thông Tin',
    description: 'Cung cấp thông tin cá nhân và chụp ảnh CMND/CCCD'
  },
  {
    number: '3',
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Xác Thực Tài Khoản',
    description: 'Liên kết tài khoản ngân hàng để nhận tiền'
  },
  {
    number: '4',
    icon: <Zap className="w-8 h-8" />,
    title: 'Nhận Tiền Ngay',
    description: 'Tiền sẽ được chuyển về tài khoản trong vài phút'
  }
];
const loanAmounts = [
  { amount: '1-5 triệu', purpose: 'Chi phí đột xuất, mua sắm nhỏ', duration: '1-3 tháng' },
  { amount: '5-10 triệu', purpose: 'Trả tiền học phí, sửa chữa nhà cửa', duration: '3-6 tháng' },
  { amount: '10-30 triệu', purpose: 'Mua điện thoại, laptop, nội thất', duration: '6-12 tháng' },
  { amount: '30-50 triệu', purpose: 'Du lịch, trang trí nhà, đám cưới', duration: '12-24 tháng' },
  { amount: '50-100 triệu', purpose: 'Mua xe máy, thiết bị cao cấp', duration: '12-36 tháng' },
  { amount: 'Trên 100 triệu', purpose: 'Kinh doanh, đầu tư, mua ô tô', duration: '24-60 tháng' }
];
const requirements = [
  'Công dân Việt Nam từ 18-60 tuổi',
  'Có CMND/CCCD còn hiệu lực',
  'Có điện thoại di động và email',
  'Có tài khoản ngân hàng đứng tên',
  'Thu nhập từ 3,000,000 VNĐ/tháng',
  'Không nằm trong danh sách đen CIC'
];
const faqs = [
  {
    question: 'Vay tiền online là gì?',
    answer: 'Vay tiền online là hình thức vay vốn hoàn toàn qua internet, từ khâu đăng ký, xét duyệt đến giải ngân đều thực hiện trực tuyến không cần đến chi nhánh. Bạn chỉ cần một chiếc điện thoại có kết nối internet để hoàn tất toàn bộ quy trình.'
  },
  {
    question: 'Vay online có an toàn không?',
    answer: 'Có, các đối tác của Jeff đều là ngân hàng và công ty tài chính được cấp phép hoạt động hợp pháp tại Việt Nam. Thông tin của bạn được bảo mật theo tiêu chuẩn quốc tế. Tuy nhiên, chỉ nên vay từ các tổ chức uy tín và tránh các app vay không rõ nguồn gốc.'
  },
  {
    question: 'Tôi cần giấy tờ gì để vay online?',
    answer: 'Thông thường bạn chỉ cần: 1) CMND/CCCD (chụp ảnh), 2) Ảnh selfie xác thực khuôn mặt, 3) Thông tin tài khoản ngân hàng. Một số đơn vị có thể yêu cầu thêm bảng lương hoặc sao kê thu nhập cho các khoản vay lớn.'
  },
  {
    question: 'Mất bao lâu để nhận được tiền?',
    answer: 'Thời gian giải ngân phụ thuộc vào từng đơn vị: 1) Vay nhanh (1-50 triệu): 5-30 phút, 2) Vay tiêu dùng (10-100 triệu): 2-24 giờ, 3) Vay hạn mức lớn (trên 100 triệu): 1-3 ngày làm việc. Thời gian nhanh nhất là các app cho vay ngang hàng.'
  },
  {
    question: 'Lãi suất vay online là bao nhiêu?',
    answer: 'Lãi suất dao động từ 16%-50%/năm tùy vào: 1) Số tiền vay, 2) Thời gian vay, 3) Hình thức vay (tín chấp hay có thế chấp), 4) Lịch sử tín dụng của bạn. Các khoản vay ngắn hạn nhỏ thường có lãi suất cao hơn, trong khi vay dài hạn từ ngân hàng có lãi thấp hơn.'
  },
  {
    question: 'Tôi có thể vay bao nhiêu tiền?',
    answer: 'Hạn mức vay phụ thuộc vào thu nhập và điểm tín dụng của bạn. Thông thường: 1) Lần vay đầu: 1-10 triệu, 2) Khách hàng tốt: 10-50 triệu, 3) Thu nhập cao + lịch sử tốt: 50-500 triệu, 4) Có tài sản thế chấp: lên đến vài tỷ đồng.'
  }
];
export default function VayTienOnline() {
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-800/50 text-white px-4 py-2 rounded-full mb-6">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">Giải ngân trong 5 phút</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Vay Tiền Online - Nhanh Chóng, Tiện Lợi, An Toàn
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Đăng ký vay hoàn toàn online, duyệt tự động trong vài phút. 
                So sánh lãi suất từ nhiều ngân hàng và tổ chức tài chính uy tín để chọn khoản vay tốt nhất.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">5 phút</div>
                  <div className="text-white text-sm">Duyệt khoản vay</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-white text-sm">Giải ngân mọi lúc</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
                  <div className="text-white text-sm">Online</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">1M-1B</div>
                  <div className="text-white text-sm">Hạn mức vay</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-10 py-6 text-lg rounded-full shadow-lg">
                  Vay ngay
                </Button>
                <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 px-10 py-6 text-lg rounded-full">
                  So sánh lãi suất
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601cb9ba9aa2e76614cef7_hero.svg" 
                alt="Vay tiền online"
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
              Tại sao nên chọn vay tiền online?
            </h2>
            <p className="text-lg text-gray-600">
              Tiết kiệm thời gian và công sức với giải pháp tài chính hiện đại
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-blue-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-md">
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
              Top ứng dụng vay tiền online uy tín
            </h2>
            <p className="text-lg text-gray-600">
              So sánh và chọn khoản vay phù hợp nhất với bạn
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
                <div className="space-y-3 mb-6 bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Số tiền:</span>
                    <span className="text-sm font-bold text-[#333d54]">{product.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Thời hạn:</span>
                    <span className="text-sm font-bold text-[#333d54]">{product.term}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lãi suất:</span>
                    <span className="text-sm font-bold text-blue-600">{product.apr}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center bg-green-50 rounded-lg p-3">
                    <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Duyệt trong</div>
                    <div className="text-sm font-bold text-green-600">{product.approvalTime}</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-3">
                    <Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Giải ngân</div>
                    <div className="text-sm font-bold text-blue-600">{product.disbursementTime}</div>
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
                  Vay ngay
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Quy trình vay tiền online chỉ 4 bước
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6 shadow-lg">
                  {step.icon}
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 text-blue-900 text-xl font-bold rounded-full mb-4 -mt-3">
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
      {/* Loan Amounts Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Nên vay bao nhiêu tiền?
            </h2>
            <p className="text-lg text-gray-600">
              Tham khảo mức vay phù hợp theo nhu cầu của bạn
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanAmounts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {item.amount}
                </div>
                <div className="text-[#333d54] font-semibold mb-2">
                  {item.purpose}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Thời hạn: {item.duration}
                </div>
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
              Điều kiện vay tiền online
            </h2>
            <p className="text-xl text-white/90">
              Đáp ứng các yêu cầu cơ bản để vay tiền nhanh chóng
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
                Đủ điều kiện? Đăng ký ngay để nhận khoản vay trong vài phút!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-lg">
                Kiểm tra ngay
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Câu hỏi thường gặp về vay tiền online
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-blue-50 rounded-xl border border-blue-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#333d54] mb-3 text-lg flex items-start gap-2">
                  <Smartphone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Cần tiền gấp? Vay ngay trong 5 phút!
          </h2>
          <p className="text-xl text-blue-800 mb-8">
            So sánh hàng trăm khoản vay online và chọn lãi suất tốt nhất cho bạn
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
              Vay tiền ngay
            </Button>
            <Button variant="outline" className="border-2 border-blue-900 text-blue-900 bg-white hover:bg-blue-50 px-12 py-6 text-lg rounded-full">
              Tính khoản vay
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}