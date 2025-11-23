const features = [
  {
    icon: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/666022ebc112af98761680c7_s1.svg',
    title: 'Chất lượng, uy tín và an toàn',
    description: 'Chúng tôi cam kết cung cấp một môi trường an toàn và bảo mật cho khách hàng của mình. Với công nghệ mã hóa tiên tiến và các biện pháp bảo mật chặt chẽ, thông tin cá nhân và tài chính của bạn sẽ được bảo vệ nghiêm ngặt.'
  },
  {
    icon: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/666023a426e9ce0f21850c6f_s2.svg',
    title: 'Sản phẩm đa dạng, được thiết kế riêng cho người dùng',
    description: 'Jeff cung cấp đa dạng các sản phẩm tài chính được thiết kế để phù hợp với mọi nhu cầu của khách hàng. Bạn có thể thoải mái lựa chọn từ nhiều loại thẻ tín dụng với các ưu đãi và tính năng khác nhau.'
  },
  {
    icon: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/666023a4292c2b0ee0e2ca2f_s3.svg',
    title: 'Ứng dụng so sánh tốt nhất tại Việt Nam',
    description: 'Jeff tự hào cung cấp dịch vụ chăm sóc khách hàng tốt nhất, với đội ngũ tư vấn hỗ trợ sẵn sàng giải đáp thắc mắc của khách hàng một cách nhanh chóng và hiệu quả.'
  }
];
export default function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="h-24 w-24"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333d54] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}