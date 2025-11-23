import { Button } from './ui/button';
export default function Newsletter() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4fe]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/666025ae4f8489b2473896e0_s4.svg" 
              alt="Mọi quyết định tài chính quan trọng của bạn đều có sự đồng hành của chúng tôi!"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#333d54] mb-4">
              Mọi quyết định tài chính quan trọng của bạn đều có sự đồng hành của chúng tôi!
            </h2>
            <p className="text-gray-600 mb-8">
              Chúng tôi hiểu rằng mọi quyết định tài chính mà bạn đưa ra đều ảnh hưởng đến tương lai của bạn. Vì vậy, chúng tôi sẽ đồng hành cùng bạn trên hành trình này, đảm bảo bạn luôn có đầy đủ thông tin và hỗ trợ cần thiết để đưa ra những lựa chọn thông thái.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/671bd233e35a2754666d703f_newsletter.svg" 
                alt="Đăng ký ngay!"
                className="w-full max-w-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#333d54] mb-4">
                Các tin tức tài chính mới nhất và bí quyết quản lý khoản vay, thẻ tín dụng đang chờ đón bạn. <span className="text-blue-600">Đăng ký ngay!</span>
              </h2>
              <form className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Email của bạn"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
                  Đăng ký
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}