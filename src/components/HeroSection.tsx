import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import heroImage from "@/assets/hero-counterfeit-investigation.jpg";
import gamblingImage from "@/assets/news-gambling-raid.jpg";
import cosmeticsImage from "@/assets/news-cosmetics-inspection.jpg";

const HeroSection = () => {
  const featuredArticle = {
    title: "Bí ẩn đường dây sản xuất hàng giả quy mô lớn: Phá đường dây 16.3 tỷ đồng",
    excerpt: "Trong số 136 bị can bị truy tố về tội 'Đánh bạc' trong vụ án King Club, người chơi được xác định là thua bạc nhiều nhất với số tiền thua lên tới 1,4 tỷ USD.",
    category: "Tin & Cảnh báo",
    riskLevel: "Cao",
    time: "18 phút trước",
    image: heroImage,
  };

  const sideArticles = [
    {
      title: "Ca sĩ Vũ Hà bị đưa ra xét xử trong vụ án đánh bạc tại khách sạn Pullman",
      time: "25 phút trước",
      image: gamblingImage,
    },
    {
      title: "NÓNG: 'Món quà Thái Quốc dân' - hít mùi thảo dược Hồng Thái bị phát hiện nhiễm vi khuẩn",
      time: "32 phút trước",
      image: cosmeticsImage,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
        {/* Featured Article */}
        <Card className="lg:col-span-2 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
          <div className="relative aspect-video bg-muted">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-alert hover:bg-alert">
              {featuredArticle.category}
            </Badge>
          </div>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
              <Badge variant="outline" className="border-alert text-alert text-xs">
                Mức rủi ro: {featuredArticle.riskLevel}
              </Badge>
              <span className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                {featuredArticle.time}
              </span>
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-3 md:line-clamp-none">
              {featuredArticle.title}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground line-clamp-2 md:line-clamp-3">
              {featuredArticle.excerpt}
            </p>
          </CardContent>
        </Card>

        {/* Side Articles */}
        <div className="space-y-3 md:space-y-4">
          {sideArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex gap-3 md:gap-4 p-3 md:p-4">
                <div className="relative w-24 h-16 md:w-32 md:h-20 bg-muted rounded flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-xs md:text-sm mb-1 md:mb-2 line-clamp-2 md:line-clamp-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.time}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
