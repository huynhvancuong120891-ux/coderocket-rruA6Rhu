import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const featuredPost = {
  id: 1,
  title: 'Hướng dẫn chi tiết cách vay tiền online an toàn và hiệu quả năm 2024',
  excerpt: 'Tìm hiểu cách vay tiền online an toàn, tránh lừa đảo và chọn lãi suất tốt nhất. Hướng dẫn từng bước cho người mới bắt đầu.',
  image: 'https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66601cb9ba9aa2e76614cef7_hero.svg',
  category: 'Hướng dẫn',
  author: 'Nguyễn Minh',
  date: '15/01/2024',
  readTime: '8 phút đọc',
  featured: true
};
const blogPosts = [
  {
    id: 2,
    title: '10 lưu ý quan trọng khi vay tiền qua ứng dụng mobile',
    excerpt: 'Những điều cần biết trước khi vay tiền qua app để tránh rơi vào bẫy lãi suất cao và các khoản phí ẩn.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    category: 'Tài chính cá nhân',
    author: 'Trần Hương',
    date: '12/01/2024',
    readTime: '6 phút đọc'
  },
  {
    id: 3,
    title: 'So sánh lãi suất vay tiêu dùng tại các ngân hàng lớn',
    excerpt: 'Phân tích chi tiết lãi suất vay tiêu dùng của VPBank, Shinhan, TPBank và các ngân hàng khác trong tháng 1/2024.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    category: 'So sánh',
    author: 'Lê Anh',
    date: '10/01/2024',
    readTime: '10 phút đọc'
  },
  {
    id: 4,
    title: 'Cách xử lý nợ xấu hiệu quả và khôi phục điểm tín dụng',
    excerpt: 'Hướng dẫn các bước cụ thể để giải quyết nợ xấu CIC và cải thiện lịch sử tín dụng của bạn.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    category: 'Nợ xấu',
    author: 'Phạm Tuấn',
    date: '08/01/2024',
    readTime: '12 phút đọc'
  },
  {
    id: 5,
    title: 'Top 5 thẻ tín dụng có ưu đãi tốt nhất cho người mới',
    excerpt: 'Danh sách các thẻ tín dụng dành cho người lần đầu sử dụng với nhiều ưu đãi hấp dẫn.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
    category: 'Thẻ tín dụng',
    author: 'Hoàng Mai',
    date: '05/01/2024',
    readTime: '7 phút đọc'
  },
  {
    id: 6,
    title: 'Kinh nghiệm vay mua nhà: Những điều cần chuẩn bị',
    excerpt: 'Tất cả những gì bạn cần biết về vay mua nhà, từ điều kiện, thủ tục đến mẹo đàm phán lãi suất.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    category: 'Vay mua nhà',
    author: 'Đỗ Linh',
    date: '03/01/2024',
    readTime: '15 phút đọc'
  },
  {
    id: 7,
    title: 'Lãi suất vay tín chấp: Cách tính và so sánh chính xác',
    excerpt: 'Hiểu rõ cách tính lãi suất vay tín chấp, APR, và các khoản phí liên quan để chọn khoản vay tối ưu.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
    category: 'Kiến thức tài chính',
    author: 'Vũ Hải',
    date: '01/01/2024',
    readTime: '9 phút đọc'
  },
  {
    id: 8,
    title: 'Vay tiền không thế chấp: Ưu và nhược điểm cần biết',
    excerpt: 'Phân tích ưu nhược điểm của hình thức vay tín chấp không cần tài sản đảm bảo.',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=600&fit=crop',
    category: 'Tài chính cá nhân',
    author: 'Ngô Thảo',
    date: '28/12/2023',
    readTime: '6 phút đọc'
  },
  {
    id: 9,
    title: 'Cách quản lý nhiều khoản vay hiệu quả',
    excerpt: 'Chiến lược quản lý và sắp xếp nhiều khoản vay cùng lúc để tránh nợ chồng chất.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
    category: 'Quản lý tài chính',
    author: 'Bùi Lan',
    date: '25/12/2023',
    readTime: '8 phút đọc'
  }
];
const categories = [
  'Tất cả bài viết',
  'Hướng dẫn',
  'Tài chính cá nhân',
  'So sánh',
  'Nợ xấu',
  'Thẻ tín dụng',
  'Vay mua nhà',
  'Kiến thức tài chính'
];
export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog Tài Chính Jeff
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Cập nhật kiến thức tài chính, mẹo vay vốn thông minh và các bài phân tích chuyên sâu từ chuyên gia
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#333d54] mb-2">Bài viết nổi bật</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg border border-blue-100">
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit mb-4">
                {featuredPost.category}
              </div>
              <h3 className="text-3xl font-bold text-[#333d54] mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg w-fit">
                Đọc ngay <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#333d54] mb-2">Bài viết mới nhất</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#333d54] mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                    Đọc thêm <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-12 py-6 text-lg rounded-full">
              Xem thêm bài viết
            </Button>
          </div>
        </div>
      </section>
      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Đăng ký nhận bài viết mới
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nhận ngay những bài viết hữu ích về tài chính và các mẹo vay vốn thông minh qua email mỗi tuần
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg whitespace-nowrap">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Topics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333d54] mb-4">
              Khám phá theo chủ đề
            </h2>
            <p className="text-lg text-gray-600">
              Tìm hiểu sâu hơn về các lĩnh vực tài chính bạn quan tâm
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Vay tiêu dùng', count: 24, icon: '💳' },
              { name: 'Thẻ tín dụng', count: 18, icon: '💰' },
              { name: 'Nợ xấu', count: 12, icon: '📊' },
              { name: 'Quản lý tài chính', count: 30, icon: '💼' },
              { name: 'Đầu tư', count: 15, icon: '📈' },
              { name: 'Tiết kiệm', count: 20, icon: '🏦' },
              { name: 'Bảo hiểm', count: 10, icon: '🛡️' },
              { name: 'Mẹo vay vốn', count: 28, icon: '💡' }
            ].map((topic, index) => (
              <button
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all text-left group"
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="font-bold text-[#333d54] mb-1 group-hover:text-blue-600 transition-colors">
                  {topic.name}
                </h3>
                <p className="text-sm text-gray-500">{topic.count} bài viết</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}