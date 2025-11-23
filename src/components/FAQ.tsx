import { Plus } from 'lucide-react';
const faqs = [
  {
    question: 'Jeff là gì và hoạt động như thế nào?',
    answer: 'Jeff là nền tảng so sánh tài chính trực tuyến tại Việt Nam. Người dùng có thể dễ dàng tìm kiếm, so sánh và lựa chọn các khoản vay lên đến 30 triệu đồng từ nhiều ngân hàng và tổ chức tài chính khác nhau mà không cần thế chấp.'
  },
  {
    question: 'Tôi có cần trả phí để sử dụng Jeff không?',
    answer: 'Không, việc sử dụng Jeff để so sánh các sản phẩm tài chính là hoàn toàn miễn phí.'
  },
  {
    question: 'Tôi cần cung cấp những thông tin gì khi nộp đơn đăng ký với đối tác của Jeff?',
    answer: 'Khi nộp đơn đăng ký với các đối tác của Jeff, bạn cần cung cấp các thông tin cá nhân cơ bản như tên, số điện thoại, địa chỉ email và số CMND/CCCD.'
  },
  {
    question: 'Tôi có thể vay bao nhiêu tiền và thời gian giải ngân là bao lâu?',
    answer: 'Tại Jeff, bạn có thể so sánh và đăng ký các khoản vay lên đến 30 triệu đồng. Thời gian giải ngân từ 24 đến 72 giờ.'
  },
  {
    question: 'Khi so sánh vay và bảo hiểm tại Jeff, tôi sẽ được bảo mật thông tin như thế nào?',
    answer: 'Jeff luôn coi trọng tính an toàn và bảo mật thông tin của khách hàng. Chúng tôi cam kết giữ bí mật thông tin và không chia sẻ với bất kỳ bên thứ ba nào.'
  }
];
export default function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200">
              <button className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold text-[#333d54]">{faq.question}</span>
                <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}