import { Button } from './ui/button';
interface CTABannerProps {
  variant?: 'primary' | 'secondary';
}
export default function CTABanner({ variant = 'primary' }: CTABannerProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {variant === 'primary' 
                ? 'Bạn quan tâm đến các giải pháp tài chính khác? Hãy để chúng tôi tìm giúp bạn!'
                : 'Đánh bay nỗi lo tài chính của bạn với giải pháp tối ưu của chúng tôi!'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.prod.website-files.com/6107d6546b656bffc909cd26/66600a826e0747c848d92948_Group%20184.svg" 
              alt="Illustration" 
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-6 rounded-full">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}