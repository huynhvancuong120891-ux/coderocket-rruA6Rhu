import { Button } from './ui/button';
export default function Hero() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333d54] leading-tight mb-6">
              Tìm kiếm, so sánh và trải nghiệm: Tối ưu hóa tài chính của bạn với những lựa chọn thông thái!
            </h1>
            <p className="text-lg text-[#333d54] mb-8">
              Khám phá top thẻ tín dụng với lãi suất và ưu đãi hấp dẫn. Tham khảo đánh giá thực tế từ cộng đồng người dùng để đưa ra quyết định sáng suốt nhất!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <img 
                  src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601ae233501b05ecc452fb_badge.svg" 
                  alt="Bullet point" 
                  className="h-6 w-6 mt-1 flex-shrink-0"
                />
                <p className="text-[#333d54]">
                  5 triệu người dùng hài lòng: Đừng ngần ngại, hãy trở thành khách hàng tiếp theo của chúng tôi!
                </p>
              </div>
              <div className="flex items-start gap-3">
                <img 
                  src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601ae233501b05ecc452fb_badge.svg" 
                  alt="Bullet point" 
                  className="h-6 w-6 mt-1 flex-shrink-0"
                />
                <p className="text-[#333d54]">
                  Hơn 10,000 lượt đánh giá dựa trên trải nghiệm thực tế: Tham khảo từ các khách hàng đã sử dụng sản phẩm và đưa ra lựa chọn sáng suốt!
                </p>
              </div>
              <div className="flex items-start gap-3">
                <img 
                  src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601ae233501b05ecc452fb_badge.svg" 
                  alt="Bullet point" 
                  className="h-6 w-6 mt-1 flex-shrink-0"
                />
                <p className="text-[#333d54]">
                  100 dịch vụ tài chính đa dạng: Khám phá nhiều đề nghị hấp dẫn để chọn cho mình sản phẩm tối ưu nhất.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#333d54] mb-3">
                Trải nghiệm ngay giải pháp tài chính thông thái dành riêng cho bạn!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
                Đăng ký ngay
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601cb9ba9aa2e76614cef7_hero.svg" 
              alt="Hero illustration" 
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}