const steps = [
  'Tạo tài khoản tại Jeff',
  'Điền thông tin vào mẫu đăng ký',
  'Tìm và so sánh các đề nghị tài chính',
  'Tham khảo đánh giá của những khách hàng khác',
  'Lựa chọn sản phẩm phù hợp với nhu cầu',
  'Chia sẻ trải nghiệm của bạn để giúp những khách hàng khác tìm được lựa chọn phù hợp'
];
export default function Guide() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Hướng dẫn sử dụng Jeff
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/64afcadbfefbbdb619f6b20e_AdobeStock_504715262%201.webp" 
              alt="Hướng dẫn sử dụng Jeff"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white text-blue-600 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="bg-white rounded-xl p-4 flex-1">
                  <h3 className="font-bold text-[#333d54]">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}