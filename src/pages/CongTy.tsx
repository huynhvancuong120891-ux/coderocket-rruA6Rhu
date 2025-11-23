import { Button } from '@/components/ui/button';
import { Users, Target, Award, TrendingUp, Heart, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const stats = [
  { number: '5M+', label: 'Người dùng', icon: <Users className="w-8 h-8" /> },
  { number: '10K+', label: 'Đánh giá', icon: <Award className="w-8 h-8" /> },
  { number: '100+', label: 'Đối tác', icon: <Target className="w-8 h-8" /> },
  { number: '99%', label: 'Hài lòng', icon: <Heart className="w-8 h-8" /> }
];
const values = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Minh bạch',
    description: 'Cung cấp thông tin rõ ràng, chính xác về lãi suất, phí và điều khoản cho khách hàng'
  },
  {
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    title: 'Khách hàng là trọng tâm',
    description: 'Luôn đặt lợi ích và trải nghiệm của khách hàng lên hàng đầu trong mọi quyết định'
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
    title: 'Đổi mới sáng tạo',
    description: 'Không ngừng cải tiến công nghệ và dịch vụ để mang đến giải pháp tốt nhất'
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Chuyên nghiệp',
    description: 'Đội ngũ chuyên gia tài chính giàu kinh nghiệm, tận tâm hỗ trợ khách hàng'
  }
];
const milestones = [
  {
    year: '2018',
    title: 'Thành lập Jeff Estonia',
    description: 'Khởi đầu tại Estonia với sứ mệnh đơn giản hóa việc tiếp cận dịch vụ tài chính'
  },
  {
    year: '2020',
    title: 'Mở rộng sang Việt Nam',
    description: 'Ra mắt tại thị trường Việt Nam với nền tảng so sánh vay tiền online đầu tiên'
  },
  {
    year: '2021',
    title: '1 triệu người dùng',
    description: 'Đạt mốc 1 triệu người dùng và trở thành nền tảng so sánh tài chính hàng đầu'
  },
  {
    year: '2022',
    title: 'Mở rộng dịch vụ',
    description: 'Thêm dịch vụ so sánh thẻ tín dụng, bảo hiểm và các sản phẩm tài chính khác'
  },
  {
    year: '2023',
    title: '5 triệu người dùng',
    description: 'Phục vụ hơn 5 triệu người dùng với hơn 100 đối tác tài chính uy tín'
  },
  {
    year: '2024',
    title: 'Tích hợp AI',
    description: 'Ra mắt công nghệ AI giúp gợi ý khoản vay phù hợp với từng khách hàng'
  }
];
const team = [
  {
    name: 'Nguyễn Văn A',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Hơn 15 năm kinh nghiệm trong lĩnh vực fintech và ngân hàng'
  },
  {
    name: 'Trần Thị B',
    position: 'CFO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    bio: 'Chuyên gia tài chính với bằng MBA từ Harvard Business School'
  },
  {
    name: 'Lê Văn C',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Kỹ sư phần mềm giàu kinh nghiệm, chuyên về AI và machine learning'
  },
  {
    name: 'Phạm Thị D',
    position: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Chuyên gia marketing số với hơn 10 năm kinh nghiệm trong ngành fintech'
  }
];
const partners = [
  { name: 'VPBank', logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85291e2a1a2d7f8e3c_vpbank.avif' },
  { name: 'Shinhan Bank', logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85b3a7c1e5d29f4a1b_shinhan.avif' },
  { name: 'FE CREDIT', logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85c6c85b54ec81d5a4_fe-credit.avif' },
  { name: 'Home Credit', logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba85f94f60d4e3b6e7a2_home-credit.avif' },
  { name: 'Mcredit', logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8522e5fa3d32c52db2_mcredit.avif' },
  { name: 'Tima', logo: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/6764ba8513c8b3ba8f8e1cf2_tima.avif' }
];
export default function CongTy() {
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Về Jeff - Nền Tảng So Sánh Tài Chính Hàng Đầu Việt Nam
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Jeff là nền tảng công nghệ tài chính (fintech) giúp người Việt Nam 
                dễ dàng so sánh, lựa chọn và tiếp cận các sản phẩm tài chính tốt nhất 
                từ hàng trăm ngân hàng và tổ chức tín dụng uy tín.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-10 py-6 text-lg rounded-full shadow-lg">
                  Liên hệ với chúng tôi
                </Button>
                <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 px-10 py-6 text-lg rounded-full">
                  Xem cơ hội nghề nghiệp
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601cb9ba9aa2e76614cef7_hero.svg" 
                alt="About Jeff"
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center border border-blue-100 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Giúp mọi người Việt Nam dễ dàng tiếp cận và lựa chọn các sản phẩm tài chính 
              phù hợp nhất, minh bạch và công bằng
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Trở thành nền tảng so sánh tài chính số 1 Đông Nam Á, 
                  nơi mọi người có thể đưa ra quyết định tài chính thông minh 
                  với sự tự tin và minh bạch tuyệt đối.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Giá trị cốt lõi</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Chúng tôi tin vào sự minh bạch, đơn giản và hiệu quả. 
                  Mỗi sản phẩm và dịch vụ của Jeff được thiết kế với mục tiêu 
                  mang lại giá trị tối đa cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Giá trị của chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Những nguyên tắc định hướng mọi hành động của Jeff
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-blue-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333d54] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Hành trình phát triển
            </h2>
            <p className="text-lg text-gray-600">
              Từ khởi đầu đến hiện tại
            </p>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 text-right md:text-left">
                    {index % 2 === 0 ? (
                      <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#333d54] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    ) : (
                      <div className="md:hidden bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#333d54] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-blue-600 rounded-full items-center justify-center z-10 shadow-lg flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    {index % 2 === 1 && (
                      <div className="hidden md:block bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#333d54] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Đội ngũ lãnh đạo
            </h2>
            <p className="text-lg text-gray-600">
              Những người đứng sau thành công của Jeff
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-blue-100">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#333d54] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333d54] mb-4">
              Đối tác của chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Hợp tác với hơn 100 ngân hàng và tổ chức tài chính uy tín
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all border border-gray-200">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tham gia cùng chúng tôi
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Chúng tôi luôn tìm kiếm những tài năng xuất sắc để cùng xây dựng 
            tương lai tài chính tốt đẹp hơn cho người Việt Nam
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-12 py-6 text-lg rounded-full shadow-2xl">
              Xem vị trí tuyển dụng
            </Button>
            <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 px-12 py-6 text-lg rounded-full">
              Liên hệ với chúng tôi
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}