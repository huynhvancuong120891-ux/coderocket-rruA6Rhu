import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/61ca373978cdb708b22fc596_logo-blue.svg" 
                alt="Jeff" 
                className="h-8"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/vay-duyet-tu-dong" className="text-sm font-medium text-[#333d54] hover:text-blue-600">
              Vay duyệt
            </Link>
            <Link to="/vay-tieu-dung" className="text-sm font-medium text-[#333d54] hover:text-blue-600">
              Vay tiêu dùng
            </Link>
            <Link to="/ho-tro-no-xau" className="text-sm font-medium text-[#333d54] hover:text-blue-600">
              Hỗ trợ nợ xấu
            </Link>
            <Link to="/vay-tien-online" className="text-sm font-medium text-[#333d54] hover:text-blue-600">
              Vay tiền online
            </Link>
            <Link to="/blog" className="text-sm font-medium text-[#333d54] hover:text-blue-600">
              Blog
            </Link>
            <a href="/danh-gia" className="flex items-center gap-2 text-sm font-medium text-[#333d54] hover:text-blue-600">
              <img 
                src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66741ad27c015ea75311c965_comment-icon.svg" 
                alt="Review" 
                className="h-5 w-5"
              />
              Đánh giá
            </a>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}