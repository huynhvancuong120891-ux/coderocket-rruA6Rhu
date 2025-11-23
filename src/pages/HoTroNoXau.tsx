import { Button } from '@/components/ui/button';
import { Check, AlertCircle, TrendingDown, FileText, Users, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const loanProducts = [
  {
    name: 'FE CREDIT',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85c6c85b54ec81d5a4_fe-credit.avif',
    amount: '5,000,000 - 200,000,000 VNĐ',
    term: '12 - 48 tháng',
    apr: '28% - 42%',
    rating: 4,
    reviews: 89,
    features: ['Chấp nhận nợ xấu nhóm 3', 'Thủ tục đơn giản', 'Giải ngân trong 48h']
  },
  {
    name: 'Mcredit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8522e5fa3d32c52db2_mcredit.avif',
    amount: '3,000,000 - 150,000,000 VNĐ',
    term: '6 - 36 tháng',
    apr: '30% - 45%',
    rating: 4,
    reviews: 156,
    features: ['Hỗ trợ nợ xấu CIC', 'Không cần thế chấp', 'Tư vấn miễn phí']
  },
  {
    name: 'Home Credit',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85f94f60d4e3b6e7a2_home-credit.avif',
    amount: '2,000,000 - 100,000,000 VNĐ',
    term: '6 - 36 tháng',
    apr: '32% - 48%',
    rating: 3,
    reviews: 134,
    features: ['Xét duyệt linh hoạt', 'Chấp nhận nợ nhóm 2-3', 'Hỗ trợ tái cơ cấu']
  },
  {
    name: 'VPBank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85291e2a1a2d7f8e3c_vpbank.avif',
    amount: '10,000,000 - 300,000,000 VNĐ',
    term: '12 - 60 tháng',
    apr: '26% - 38%',
    rating: 4,
    reviews: 98,
    features: ['Giải pháp tái cấu trúc nợ', 'Lãi suất ưu đãi', 'Tư vấn chuyên nghiệp']
  },
  {
    name: 'Tima',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8513c8b3ba8f8e1cf2_tima.avif',
    amount: '1,000,000 - 30,000,000 VNĐ',
    term: '3 - 12 tháng',
    apr: '35% - 50%',
    rating: 3,
    reviews: 67,
    features: ['Duyệt tự động', 'Chấp nhận nợ xấu', 'Giải ngân 24h']
  },
  {
    name: 'Shinhan Bank',
    logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85b3a7c1e5d29f4a1b_shinhan.avif',
    amount: '20,000,000 - 500,000,000 VNĐ',
    term: '12 - 60 tháng',
    apr: '24% - 36%',
    rating: 4,
    reviews: 112,
    features: ['Chương trình xóa nợ xấu', 'Lãi suất thấp', 'Hỗ trợ dài hạn']
  }
];
const solutions = [
  {
    icon: <TrendingDown className="w-10 h-10 text-blue-600" />,
    title: 'Tái cơ cấu khoản vay',
    description: 'Giúp bạn sắp xếp lại khoản nợ với lãi suất và kỳ hạn phù hợp hơn, giảm áp lực tài chính hàng tháng'
  },
  {
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    title: 'Xóa nợ xấu CIC',
    description: 'Hỗ trợ thanh toán và làm sạch lịch sử tín dụng tại Trung tâm Thông tin tín dụng CIC'
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'Tư vấn pháp lý',
    description: 'Đội ngũ chuyên gia tư vấn về quyền lợi và giải pháp pháp lý cho người có nợ xấu'
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: 'Kéo dài thời gian trả',
    description: 'Đàm phán với tổ chức tín dụng để kéo dài thời gian trả nợ, giảm gánh nặng tài chính'
  }
];
const debtLevels = [
  {
    level: 'Nhóm 1',
    title: 'Nợ đủ tiêu chuẩn',
    description: 'Trả nợ đúng hạn hoặc chậm không quá 10 ngày',
    color: 'bg-green-100 border-green-300 text-green-800'
  },
  {
    level: 'Nhóm 2',
    title: 'Nợ cần chú ý',
    description: 'Chậm trả từ 11 đến 90 ngày',
    color: 'bg-yellow-100 border-yellow-300 text-yellow-800'
  },
  {
    level: 'Nhóm 3',
    title: 'Nợ dưới tiêu chuẩn',
    description: 'Chậm trả từ 91 đến 180 ngày',
    color: 'bg-orange-100 border-orange-300 text-orange-800'
  },
  {
    level: 'Nhóm 4',
    title: 'Nợ nghi ngờ',
    description: 'Chậm trả từ 181 đến 360 ngày',
    color: 'bg-red-100 border-red-300 text-red-800'
  },
  {
    level: 'Nhóm 5',
    title: 'Nợ có khả năng mất vốn',
    description: 'Chậm trả trên 360 ngày',
    color: 'bg-red-200 border-red-400 text-red-900'
  }
];
const steps = [
  {
    number: '1',
    title: 'Đánh giá tình trạng',
    description: 'Kiểm tra mức độ nợ xấu và phân tích khả năng tài chính hiện tại của bạn'
  },
  {
    number: '2',
    title: 'Tư vấn giải pháp',
    description: 'Chuyên gia đề xuất phương án phù hợp nhất với tình hình của bạn'
  },
  {
    number: '3',
    title: 'Chuẩn bị hồ sơ',
    description: 'Hỗ trợ chuẩn bị đầy đủ giấy tờ cần thiết cho hồ sơ vay'
  },
  {
    number: '4',
    title: 'Xử lý & giải ngân',
    description: 'Nộp hồ sơ, xét duyệt và nhận tiền sau khi được phê duyệt'
  }
];
const faqs = [
  {
    question: 'Nợ xấu là gì?',
    answer: 'Nợ xấu là khoản nợ mà người vay không trả đúng hạn theo cam kết. Tại Việt Nam, nợ xấu được phân thành 5 nhóm từ nhóm 1 (đủ tiêu chuẩn) đến nhóm 5 (có khả năng mất vốn). Thông tin nợ xấu được lưu tại Trung tâm Thông tin tín dụng (CIC) và ảnh hưởng đến khả năng vay vốn trong tương lai.'
  },
  {
    question: 'Tôi có nợ xấu, có thể vay được không?',
    answer: 'Có thể. Tùy thuộc vào mức độ nợ xấu (nhóm nợ) và tình hình tài chính hiện tại của bạn. Một số tổ chức tài chính chấp nhận cho vay đối với nợ xấu nhóm 2-3. Tuy nhiên, lãi suất thường cao hơn và điều kiện xét duyệt chặt chẽ hơn.'
  },
  {
    question: 'Làm thế nào để xóa nợ xấu?',
    answer: 'Để xóa nợ xấu, bạn cần: 1) Thanh toán đầy đủ khoản nợ gốc và lãi, 2) Liên hệ với tổ chức tín dụng để xác nhận hoàn thành nghĩa vụ, 3) Đợi CIC cập nhật thông tin (thường từ 1-3 tháng). Một số trường hợp có thể thương lượng giảm nợ hoặc tái cơ cấu khoản vay.'
  },
  {
    question: 'Nợ xấu ảnh hưởng đến tôi như thế nào?',
    answer: 'Nợ xấu ảnh hưởng nghiêm trọng đến: 1) Khả năng vay vốn từ ngân hàng và tổ chức tài chính, 2) Điểm tín dụng cá nhân, 3) Có thể bị kiện ra tòa và kê biên tài sản, 4) Ảnh hưởng đến cơ hội việc làm và kinh doanh. Việc xử lý nợ xấu sớm giúp hạn chế những tác động tiêu cực này.'
  },
  {
    question: 'Chi phí hỗ trợ nợ xấu là bao nhiêu?',
    answer: 'Jeff cung cấp dịch vụ so sánh và tư vấn hoàn toàn miễn phí. Chi phí phát sinh (nếu có) sẽ là từ phía tổ chức tín dụng mà bạn lựa chọn, bao gồm lãi suất vay và các phí liên quan. Chúng tôi cam kết minh bạch 100% về chi phí trước khi bạn đăng ký.'
  },
  {
    question: 'Mất bao lâu để xử lý nợ xấu?',
    answer: 'Thời gian xử lý phụ thuộc vào mức độ nợ xấu và giải pháp được chọn: 1) Vay để trả nợ xấu: 3-7 ngày làm việc, 2) Tái cơ cấu khoản vay: 1-2 tuần, 3) Xóa thông tin nợ xấu tại CIC: 1-3 tháng sau khi thanh toán xong. Chúng tôi sẽ đẩy nhanh tiến độ tối đa có thể.'
  }
];
const requirements = [
  'Có nợ xấu nhóm 2, 3 hoặc 4 tại CIC',
  'Công dân Việt Nam từ 21-55 tuổi',
  'Có thu nhập ổn định tối thiểu 5,000,000 VNĐ/tháng',
  'Có CMND/CCCD và sổ hộ khẩu',
  'Có khả năng trả nợ và chứng minh nguồn thu nhập',
  'Cam kết thực hiện nghĩa vụ trả nợ đúng hạn'
];
export default function HoTroNoXau() {
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-800/50 text-white px-4 py-2 rounded-full mb-6">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Giải pháp cho người có nợ xấu</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Hỗ Trợ Nợ Xấu - Giải Pháp Tài Chính Cho Mọi Tình Huống
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Đừng để nợ xấu cản trở cơ hội tài chính của bạn. Jeff kết nối bạn với các tổ chức tài chính 
                chấp nhận cho vay với điều kiện linh hoạt, hỗ trợ tái cơ cấu nợ và xóa nợ xấu.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-white text-lg">Chấp nhận nợ xấu nhóm 2, 3 và 4</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-white text-lg">Tư vấn miễn phí từ chuyên gia tài chính</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-white text-lg">Giải pháp tái cơ cấu và xóa nợ xấu CIC</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold px-10 py-6 text-lg rounded-full shadow-lg">
                  Nhận tư vấn miễn phí
                </Button>
                <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-900 px-10 py-6 text-lg rounded-full">
                  Kiểm tra nợ xấu
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601cb9ba9aa2e76614cef7_hero.svg" 
                alt="Hỗ trợ nợ xấu"
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Debt Levels Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Hiểu về phân loại nợ xấu tại Việt Nam
            </h2>
            <p className="text-lg text-gray-600">
              Nợ xấu được phân thành 5 nhóm theo quy định của Ngân hàng Nhà nước
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {debtLevels.map((level, index) => (
              <div key={index} className={`${level.color} rounded-xl p-6 border-2`}>
                <div className="font-bold text-2xl mb-2">{level.level}</div>
                <h3 className="font-bold text-lg mb-2">{level.title}</h3>
                <p className="text-sm">{level.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#333d54] font-semibold mb-2">Lưu ý quan trọng:</p>
                <p className="text-gray-600">
                  Jeff hỗ trợ tìm kiếm giải pháp vay cho nợ xấu nhóm 2, 3 và 4. Đối với nợ nhóm 5, 
                  bạn cần ưu tiên giải quyết nợ cũ trước khi có thể tiếp cận các khoản vay mới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Các giải pháp hỗ trợ từ Jeff
            </h2>
            <p className="text-lg text-gray-600">
              Đa dạng phương án giúp bạn vượt qua khó khăn tài chính
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-gray-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d54] mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Loan Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Các sản phẩm vay hỗ trợ nợ xấu
            </h2>
            <p className="text-lg text-gray-600">
              So sánh và chọn khoản vay phù hợp với tình hình nợ của bạn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all p-6 border border-gray-200">
                <div className="flex items-center justify-center h-20 mb-6 bg-white rounded-lg shadow-sm">
                  <img 
                    src={product.logo} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain p-2"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#333d54] text-center mb-6">
                  {product.name}
                </h3>
                <div className="space-y-3 mb-6 bg-white rounded-lg p-4 shadow-sm">
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
                    <span className="text-sm font-bold text-red-600">{product.apr}</span>
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
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md">
                  Đăng ký ngay
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Quy trình hỗ trợ nợ xấu tại Jeff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white text-2xl font-bold rounded-full mb-4 shadow-lg">
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
      {/* Requirements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 to-red-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Điều kiện để được hỗ trợ
            </h2>
            <p className="text-xl text-white/90">
              Đáp ứng các yêu cầu cơ bản để nhận được sự hỗ trợ tốt nhất
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
                Bạn đáp ứng các điều kiện trên? Liên hệ ngay để được tư vấn chi tiết!
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-lg">
                Đăng ký tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] text-center mb-12">
            Câu hỏi thường gặp về nợ xấu
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#333d54] mb-3 text-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6">
            Đừng để nợ xấu kéo dài thêm!
          </h2>
          <p className="text-xl text-red-800 mb-8">
            Liên hệ ngay với chúng tôi để nhận tư vấn miễn phí và tìm giải pháp tốt nhất cho tình hình của bạn
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
              Nhận tư vấn ngay
            </Button>
            <Button variant="outline" className="border-2 border-red-900 text-red-900 bg-white hover:bg-red-50 px-12 py-6 text-lg rounded-full">
              Gọi hotline: 1900-xxxx
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}