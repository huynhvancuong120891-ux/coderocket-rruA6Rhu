import { Button } from '@/components/ui/button';
import { Check, Shield, Clock, Zap, ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
const benefits = [
  'So sánh hơn 100 sản phẩm vay từ các ngân hàng uy tín',
  'Nhận kết quả duyệt trong vòng 24 giờ',
  'Hoàn toàn miễn phí, không phí ẩn',
  'Thông tin được bảo mật 100%'
];
const loanReasons = [
  { icon: '🏠', text: 'Sửa chữa nhà cửa', value: 'sua-nha' },
  { icon: '🎓', text: 'Học phí', value: 'hoc-phi' },
  { icon: '💼', text: 'Kinh doanh', value: 'kinh-doanh' },
  { icon: '🏥', text: 'Y tế', value: 'y-te' },
  { icon: '✈️', text: 'Du lịch', value: 'du-lich' },
  { icon: '💍', text: 'Đám cưới', value: 'dam-cuoi' },
  { icon: '🛍️', text: 'Mua sắm', value: 'mua-sam' },
  { icon: '📱', text: 'Khác', value: 'khac' }
];
export default function Registration() {
  const [step, setStep] = useState(1);
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
  const handleLoanPurposeSelect = (value: string) => {
    setFormData(prev => ({ ...prev, loanPurpose: value }));
  };
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle final submission
  };
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Bước {step} trên 3</span>
            <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% hoàn thành</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Loan Details */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-3">
                  Bạn cần vay bao nhiêu?
                </h1>
                <p className="text-gray-600 text-lg">
                  Chọn số tiền và mục đích vay để tìm khoản vay phù hợp nhất
                </p>
              </div>
              <form onSubmit={handleNext} className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <label className="block text-lg font-bold text-[#333d54] mb-4">
                    Số tiền cần vay
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { label: '1 - 5 triệu', value: '1-5' },
                      { label: '5 - 10 triệu', value: '5-10' },
                      { label: '10 - 30 triệu', value: '10-30' },
                      { label: '30 - 50 triệu', value: '30-50' },
                      { label: '50 - 100 triệu', value: '50-100' },
                      { label: 'Trên 100 triệu', value: '100+' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, loanAmount: option.value }))}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                          formData.loanAmount === option.value
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Loan Purpose */}
                <div>
                  <label className="block text-lg font-bold text-[#333d54] mb-4">
                    Mục đích vay
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {loanReasons.map((reason) => (
                      <button
                        key={reason.value}
                        type="button"
                        onClick={() => handleLoanPurposeSelect(reason.value)}
                        className={`p-4 rounded-xl border-2 font-medium transition-all flex flex-col items-center gap-2 ${
                          formData.loanPurpose === reason.value
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        <span className="text-3xl">{reason.icon}</span>
                        <span className="text-sm">{reason.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    disabled={!formData.loanAmount || !formData.loanPurpose}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-6 text-lg rounded-lg"
                  >
                    Tiếp tục <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          )}
          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-3">
                  Thông tin của bạn
                </h1>
                <p className="text-gray-600 text-lg">
                  Cung cấp thông tin để nhận các đề xuất khoản vay phù hợp
                </p>
              </div>
              <form onSubmit={handleNext} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#333d54] mb-2">
                    Họ và tên đầy đủ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nguyễn Văn A"
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
                    placeholder="0912345678"
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
                    placeholder="email@example.com"
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
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-6 text-lg rounded-lg"
                  >
                    Quay lại
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 text-lg rounded-lg"
                  >
                    Tiếp tục <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          )}
          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-3">
                  Xác nhận thông tin
                </h1>
                <p className="text-gray-600 text-lg">
                  Kiểm tra lại thông tin trước khi gửi
                </p>
              </div>
              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-bold text-[#333d54] mb-4">Thông tin khoản vay</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Số tiền vay</p>
                      <p className="font-semibold text-[#333d54]">
                        {formData.loanAmount === '1-5' && '1 - 5 triệu VNĐ'}
                        {formData.loanAmount === '5-10' && '5 - 10 triệu VNĐ'}
                        {formData.loanAmount === '10-30' && '10 - 30 triệu VNĐ'}
                        {formData.loanAmount === '30-50' && '30 - 50 triệu VNĐ'}
                        {formData.loanAmount === '50-100' && '50 - 100 triệu VNĐ'}
                        {formData.loanAmount === '100+' && 'Trên 100 triệu VNĐ'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Mục đích vay</p>
                      <p className="font-semibold text-[#333d54]">
                        {loanReasons.find(r => r.value === formData.loanPurpose)?.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-[#333d54] mb-4">Thông tin cá nhân</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Họ và tên</p>
                      <p className="font-semibold text-[#333d54]">{formData.fullName}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Số điện thoại</p>
                        <p className="font-semibold text-[#333d54]">{formData.phoneNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-[#333d54]">{formData.email}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Thu nhập hàng tháng</p>
                        <p className="font-semibold text-[#333d54]">
                          {formData.monthlyIncome === '3-5' && '3 - 5 triệu VNĐ'}
                          {formData.monthlyIncome === '5-10' && '5 - 10 triệu VNĐ'}
                          {formData.monthlyIncome === '10-20' && '10 - 20 triệu VNĐ'}
                          {formData.monthlyIncome === '20-30' && '20 - 30 triệu VNĐ'}
                          {formData.monthlyIncome === '30+' && 'Trên 30 triệu VNĐ'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Công việc</p>
                        <p className="font-semibold text-[#333d54]">
                          {formData.employmentStatus === 'nhan-vien' && 'Nhân viên văn phòng'}
                          {formData.employmentStatus === 'cong-nhan' && 'Công nhân'}
                          {formData.employmentStatus === 'tu-do' && 'Tự do/Freelance'}
                          {formData.employmentStatus === 'kinh-doanh' && 'Kinh doanh'}
                          {formData.employmentStatus === 'khac' && 'Khác'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                {/* Terms Agreement */}
                <div className="flex items-start gap-3 mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-600"
                    required
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                    Tôi đồng ý với{' '}
                    <a href="#" className="text-blue-600 hover:underline font-semibold">Điều khoản sử dụng</a>
                    {' '}và{' '}
                    <a href="#" className="text-blue-600 hover:underline font-semibold">Chính sách bảo mật</a>
                    {' '}của Jeff. Tôi đồng ý để thông tin của mình được chia sẻ với các đối tác tài chính phù hợp.
                  </label>
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-6 text-lg rounded-lg"
                  >
                    Quay lại
                  </Button>
                  <Button
                    type="submit"
                    disabled={!formData.agreeTerms}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg rounded-lg"
                  >
                    Hoàn tất đăng ký <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          )}
          {/* Sidebar Benefits - Only show on step 1 */}
          {step === 1 && (
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {/* Security Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h3 className="text-lg font-bold text-[#333d54]">Bảo mật thông tin</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Thông tin của bạn được mã hóa và bảo vệ theo tiêu chuẩn ngân hàng quốc tế
                </p>
              </div>
              {/* Fast Process Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-bold text-[#333d54]">Xử lý nhanh chóng</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Nhận các đề xuất khoản vay phù hợp trong vài phút
                </p>
              </div>
            </div>
          )}
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