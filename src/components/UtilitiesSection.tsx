import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Link2, AlertTriangle, TrendingUp } from "lucide-react";

const UtilitiesSection = () => {
  return (
    <section className="bg-secondary/30 py-6 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center">Tiện ích nhanh</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-12">
          {/* TraceID Lookup */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Search className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Tra cứu TraceID/Qmac
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 md:space-y-3">
              <Input placeholder="Nhập mã TraceID hoặc GTIN" className="text-sm" />
              <Button className="w-full text-sm md:text-base">Tra cứu</Button>
            </CardContent>
          </Card>

          {/* E-commerce Link Checker */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Link2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Kiểm tra link TMĐT
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 md:space-y-3">
              <Input placeholder="Dán URL sản phẩm" className="text-sm" />
              <Button className="w-full text-sm md:text-base" variant="outline">Phân tích rủi ro</Button>
            </CardContent>
          </Card>

          {/* Report Violation */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-alert" />
                Báo cáo vi phạm
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 md:space-y-3">
              <p className="text-xs md:text-sm text-muted-foreground">
                Gửi báo cáo kèm bằng chứng về sản phẩm vi phạm
              </p>
              <Button className="w-full text-sm md:text-base bg-alert hover:bg-alert/90">
                Gửi báo cáo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <Card>
          <CardContent className="py-4 md:py-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <h3 className="text-base md:text-lg font-semibold">Thống kê tháng 10/2025</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-alert">142</div>
                <div className="text-xs md:text-sm text-muted-foreground">Cảnh báo</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-alert">37</div>
                <div className="text-xs md:text-sm text-muted-foreground">Thu hồi</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-success">18</div>
                <div className="text-xs md:text-sm text-muted-foreground">Ngành chịu ảnh hưởng</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">245</div>
                <div className="text-xs md:text-sm text-muted-foreground">Đơn vị tuân thủ</div>
              </div>
            </div>
            <div className="text-center mt-4 md:mt-6">
              <Button variant="link" className="text-primary text-xs md:text-sm">
                Xem báo cáo dữ liệu đầy đủ →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UtilitiesSection;
