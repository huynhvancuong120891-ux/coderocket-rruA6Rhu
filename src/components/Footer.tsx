const footerLinks = {
  'So sánh vay tiền nhanh': [
    'So sánh vay tiền nhanh',
    'So sánh vay tiêu dùng',
    'So sánh vay tiền online',
    'Blog'
  ],
  'Về Jeff': [
    'Công ty',
    'Chính sách bảo mật',
    'Điều khoản sử dụng',
    'Affiliate',
    'Global',
    'Sitemap'
  ]
};
const products = [
  'So sánh vay tiền nhanh',
  'So sánh vay tiền hỗ trợ nợ xấu',
  'So sánh vay tiền nóng',
  'So sánh cho vay tiền siêu nhanh',
  'So sánh vay 500k đồng',
  'So sánh vay tiền online',
  'H5 vay tiền',
  'Vay tiền bằng CCCD',
  'Không Chứng Minh',
  'Vay tiền iCloud',
  'Vay tiền online 24/24',
  'Vay tiền 18 tuổi',
  'Vay tiền bằng cavet xe',
  'Ví điện tử'
];
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/61c0d1264935ee173ea20df9_Jeff-logo-blue.svg" 
              alt="Jeff logo"
              className="h-8 mb-6"
            />
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80">
                <img 
                  src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/67e6b1aa9b30971409af938a_facebook.webp" 
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img 
                  src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/67e6b1aad13c198edf2f4afa_instagram.webp" 
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img 
                  src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/67e6b1aa64486bbbb4a9dce1_linkedin.webp" 
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img 
                  src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/67e6b1aa3ae41c5aaf0b59da_youtube.webp" 
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-[#333d54] mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href={link === 'Công ty' ? '/cong-ty' : '#'} className="text-sm text-gray-600 hover:text-blue-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold text-[#333d54] mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              {products.slice(0, 6).map((product) => (
                <li key={product}>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-600 leading-relaxed">
            Jeff không phải đơn vị cung cấp cho vay và không phát hành các khoản vay. Dịch vụ của Jeff giúp đánh giá các đối tác vay uy tín với các sản phẩm tài chính đa dạng, thời gian trả nợ linh hoạt từ 91 đến 180 ngày, với lãi suất APR tối thiểu là 0% và tối đa là 20%.
          </p>
          <p className="text-xs text-gray-600 mt-4">
            Bản quyền © Jeff. Đơn vị chủ quản: Jeff Estonia OU. Địa chỉ: F. R. Kreutzwaldi tn 43b, 65610 Võru linn, Võru maakond, số điện thoại: +84 9018 157 66. Email: info@jeff.vn, Mã số doanh nghiệp: 16372962.
          </p>
        </div>
      </div>
    </footer>
  );
}