import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  excerpt?: string;
  time: string;
  category?: string;
  image?: string;
  riskLevel?: string;
}

interface CategorySectionProps {
  title: string;
  color?: "alert" | "primary" | "success";
  articles: Article[];
  showImages?: boolean;
}

const CategorySection = ({ title, color = "primary", articles, showImages = true }: CategorySectionProps) => {
  const colorClasses = {
    alert: "border-alert text-alert",
    primary: "border-primary text-primary",
    success: "border-success text-success",
  };

  return (
    <section className="container mx-auto px-4 py-4 md:py-8">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className={`text-lg md:text-2xl font-bold border-l-4 pl-3 md:pl-4 ${colorClasses[color]}`}>
          {title}
        </h2>
        <Button variant="ghost" size="sm" className="gap-1 text-xs md:text-sm">
          <span className="hidden sm:inline">Xem tất cả</span>
          <span className="sm:hidden">Xem thêm</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className={`grid ${showImages ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-3 md:gap-4`}>
        {articles.map((article, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            {showImages && (
              <div className="relative aspect-video bg-muted">
                <img
                  src={article.image || "/api/placeholder/400/225"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                {article.riskLevel && (
                  <Badge className="absolute top-3 right-3 bg-alert hover:bg-alert text-xs">
                    {article.riskLevel}
                  </Badge>
                )}
              </div>
            )}
            <CardContent className="p-3 md:p-4">
              <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2 md:line-clamp-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              {article.excerpt && (
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-2">
                  {article.excerpt}
                </p>
              )}
              <div className="flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-1">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.time}
                </span>
                {article.category && (
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
