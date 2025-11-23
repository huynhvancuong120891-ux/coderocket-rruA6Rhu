import { Button } from '@/components/ui/button';
import { Check, Shield, Clock, Zap, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
const benefits = [
  'So sánh hơn 100 sản phẩm vay từ các ngân hàng uy tín',
  'Nhận kết quả duyệt trong vòng 24 giờ',
  'Hoàn toàn miễn phí, không phí ẩn',
  'Thông tin được bảo mật 100%'
];
const steps = [
  {
    number: '1',
    title: 'Điền thông tin cơ bản',
    time: '2 phút'
  },
  {
    number: '2',
    title: 'So sánh các đề xuất',
    time: '1 phút'
  },
  {
    number: '3',
    title: 'Chọn khoản vay phù hợp',
    time: '1 phút'
  },
  {
    number: '4',
    title: 'Nhận tiền trong 24h',
    time: '24 giờ'
  }
];
export default function Registration() {
  const [formData, setFormData] = useState({
    loanAmount: '',
    loanPurpose: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    monthlyIncome: '',
    employmentStatus: '',
    agreeTerms: false
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Đăng ký so sánh khoản vay
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Chỉ mất 2 phút để tìm khoản vay tốt nhất cho bạn
          </p>
        </div>
      </section>
      {/* Progress Steps */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#333d54]">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-[#333d54] mb-6">
                  Thông tin đăng ký
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Loan Amount */}
                  <div>
                    <label htmlFor="loanAmount" className="block text-sm font-semibold text-[#333d54] mb-2">
                      Số tiền cần vay <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    >
                      <option value="">Chọn số tiền</option>
                      <option value="1-5">1 - 5 triệu VNĐ</option>
                      <option value="5-10">5 - 10 triệu VNĐ</option>
                      <option value="10-30">10 - 30 triệu VNĐ</option>
                      <option value="30-50">30 - 50 triệu VNĐ</option>
                      <option value="50-100">50 - 100 triệu VNĐ</option>
                      <option value="100+">Trên 100 triệu VNĐ</option>
                    </select>
                  </div>
                  {/* Loan Purpose */}
                  <div>
                    <label htmlFor="loanPurpose" className="block text-sm font-semibold text-[#333d54] mb-2">
                      Mục đích vay <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="loanPurpose"
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    >
                      <option value="">Chọn mục đích</option>
                      <option value="tieu-dung">Tiêu dùng cá nhân</option>
                      <option value="sua-nha">Sửa chữa nhà cửa</option>
                      <option value="giao-duc">Giáo dục</option>
                      <option value="y-te">Y tế</option>
                      <option value="du-lich">Du lịch</option>
                      <option value="kinh-doanh">Kinh doanh</option>
                      <option value="khac">Khác</option>
                    </select>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-bold text-[#333d54] mb-4">
                      Thông tin cá nhân
                    </h3>
                  </div>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-[#333d54] mb-2">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên đầy đủ"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#333d54] mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Nhập số điện thoại"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#333d54] mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Nhập địa chỉ email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                  {/* Monthly Income */}
                  <div>
                    <label htmlFor="monthlyIncome" className="block text-sm font-semibold text-[#333d54] mb-2">
                      Thu nhập hàng tháng <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    >
                      <option value="">Chọn mức thu nhập</option>
                      <option value="3-5">3 - 5 triệu VNĐ</option>
                      <option value="5-10">5 - 10 triệu VNĐ</option>
                      <option value="10-20">10 - 20 triệu VNĐ</option>
                      <option value="20-30">20 - 30 triệu VNĐ</option>
                      <option value="30+">Trên 30 triệu VNĐ</option>
                    </select>
                  </div>
                  {/* Employment Status */}
                  <div>
                    <label htmlFor="employmentStatus" className="block text-sm font-semibold text-[#333d54] mb-2">
                      Tình trạng công việc <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="employmentStatus"
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    >
                      <option value="">Chọn tình trạng</option>
                      <option value="nhan-vien">Nhân viên văn phòng</option>
                      <option value="cong-nhan">Công nhân</option>
                      <option value="tu-do">Tự do/Freelance</option>
                      <option value="kinh-doanh">Kinh doanh</option>
                      <option value="khac">Khác</option>
                    </select>
                  </div>
                  {/* Terms Agreement */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-600"
                      required
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                      Tôi đồng ý với{' '}
                      <a href="#" className="text-blue-600 hover:underline">Điều khoản sử dụng</a>
                      {' '}và{' '}
                      <a href="#" className="text-blue-600 hover:underline">Chính sách bảo mật</a>
                      {' '}của Jeff
                    </label>
                  </div>
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg rounded-lg shadow-lg"
                  >
                    Tiếp tục <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Bằng cách đăng ký, thông tin của bạn sẽ được chia sẻ với các đối tác tài chính phù hợp
                  </p>
                </form>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Benefits Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Tại sao chọn Jeff?</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Security Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                    <h3 className="text-lg font-bold text-[#333d54]">Bảo mật thông tin</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Thông tin của bạn được mã hóa và bảo vệ theo tiêu chuẩn ngân hàng quốc tế. 
                    Chúng tôi cam kết không chia sẻ thông tin với bất kỳ bên thứ ba nào ngoài đối tác tài chính.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Hỗ trợ 24/7</span>
                  </div>
                </div>
                {/* Fast Process Card */}
                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-lg font-bold text-[#333d54]">Xử lý nhanh chóng</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Sau khi đăng ký, bạn sẽ nhận được các đề xuất khoản vay phù hợp trong vòng vài phút. 
                    Chọn khoản vay tốt nhất và bắt đầu quy trình duyệt ngay lập tức.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5M+</div>
              <div className="text-sm text-gray-600">Người dùng tin tưởng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Đối tác tài chính</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Thời gian duyệt</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}