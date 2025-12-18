import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, Download, Eye } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import heroImage from "@/assets/hero-analysis-investigation.jpg";
import supplyChainImage from "@/assets/analysis-supply-chain.jpg";
import dataReportImage from "@/assets/analysis-data-report.jpg";
import ecommerceImage from "@/assets/analysis-ecommerce.jpg";
import cosmeticsImage from "@/assets/analysis-cosmetics.jpg";
import foodSafetyImage from "@/assets/analysis-food-safety.jpg";
import timelineImage from "@/assets/analysis-timeline.jpg";
import complianceLessonsImage from "@/assets/analysis-compliance-lessons.jpg";

interface DossierArticle {
  id: string;
  title: string;
  excerpt: string;
  industry: string;
  channel: string;
  riskType: string;
  status: "investigating" | "verified" | "resolved" | "corrected";
  date: string;
  image: string;
  source: string;
  type: "dossier" | "data-investigation" | "supply-chain" | "compliance-lesson" | "enterprise-profile";
}

const AnalysisDossier = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedChannel, setSelectedChannel] = useState<string>("all");
  const [selectedRisk, setSelectedRisk] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  const articles: DossierArticle[] = [
    {
      id: "1",
      title: "Chuỗi bán hàng mỹ phẩm nhãn song ngữ sai chuẩn trên TMĐT",
      excerpt: "14 đường link, 3 nhãn hàng; lỗi cố hữu: thiếu địa chỉ pháp lý, sai hạn dùng; 2 sàn gỡ trong 7 ngày. Phát hiện 68% mô tả sản phẩm không khớp nhãn.",
      industry: "Mỹ phẩm",
      channel: "TMĐT",
      riskType: "Ghi nhãn sai",
      status: "resolved",
      date: "3 ngày trước",
      image: cosmeticsImage,
      source: "Cục QLTT TP.HCM",
      type: "dossier"
    },
    {
      id: "2",
      title: "Sản phẩm thực phẩm chức năng – Rủi ro theo mùa",
      excerpt: "Khiếu nại tăng 35% sau các đợt khuyến mãi lớn; nhóm từ khóa 'detox/đốt mỡ' chiếm 52% liên kết bị báo cáo. Dữ liệu từ 1.245 khiếu nại trong Q1/2025.",
      industry: "Thực phẩm",
      channel: "Tất cả kênh",
      riskType: "Tuyên bố sai",
      status: "investigating",
      date: "5 ngày trước",
      image: dataReportImage,
      source: "Phân tích độc lập",
      type: "data-investigation"
    },
    {
      id: "3",
      title: "Linh kiện xe máy – Từ phụ tùng OEM đến hàng giả",
      excerpt: "Điểm đứt gãy: đóng gói tại đại lý cấp 2; trộn lẫn mã lô; thiếu dấu vết giao vận. Kiểm soát: dán tem lô nội bộ; đối soát hóa đơn điện tử.",
      industry: "Phụ tùng ô tô",
      channel: "Cửa hàng",
      riskType: "Nguồn gốc",
      status: "verified",
      date: "1 tuần trước",
      image: supplyChainImage,
      source: "Hiệp hội Ngành Phụ tùng",
      type: "supply-chain"
    },
    {
      id: "4",
      title: "Nhãn phụ tiếng Việt – 10 lỗi kinh điển dẫn đến xử phạt",
      excerpt: "Tác động: trả hàng/thu hồi cục bộ; mất phân phối. Checklist 18 dòng kiểm tra trước khi nhập kho; quy trình dán nhãn theo lô.",
      industry: "Tất cả ngành",
      channel: "Nhập khẩu",
      riskType: "Ghi nhãn sai",
      status: "resolved",
      date: "1 tuần trước",
      image: complianceLessonsImage,
      source: "Tổng cục QLTT",
      type: "compliance-lesson"
    },
    {
      id: "5",
      title: "Giám sát chất lượng sản phẩm trên sàn TMĐT: Phát hiện và xử lý",
      excerpt: "Phân tích 2.500 sản phẩm trên 5 sàn thương mại điện tử lớn. 23% sản phẩm có dấu hiệu vi phạm về thông tin, 15% thiếu giấy tờ chứng minh nguồn gốc.",
      industry: "Đa ngành",
      channel: "TMĐT",
      riskType: "Thiếu giấy tờ",
      status: "investigating",
      date: "2 tuần trước",
      image: ecommerceImage,
      source: "Sở Công Thương",
      type: "data-investigation"
    },
    {
      id: "6",
      title: "Thu hồi thực phẩm: Quy trình và bài học từ 5 vụ việc điển hình",
      excerpt: "Thời gian xử lý trung bình giảm từ 12 ngày xuống 5 ngày khi áp dụng quy trình chuẩn. Phân tích chi tiết các bước từ phát hiện đến hoàn tất thu hồi.",
      industry: "Thực phẩm",
      channel: "Cửa hàng",
      riskType: "An toàn thực phẩm",
      status: "corrected",
      date: "3 tuần trước",
      image: foodSafetyImage,
      source: "Cục ATTP",
      type: "compliance-lesson"
    },
    {
      id: "7",
      title: "Chuỗi sự kiện: Vụ thu hồi mỹ phẩm chứa chất cấm tại Hà Nội",
      excerpt: "Timeline đầy đủ từ 15/01 đến 28/02: phát hiện, xét nghiệm, công bố, thu hồi, xử phạt. 12 cửa hàng bị đóng cửa, 5.000 sản phẩm bị thu giữ.",
      industry: "Mỹ phẩm",
      channel: "Cửa hàng",
      riskType: "Chất cấm",
      status: "resolved",
      date: "1 tháng trước",
      image: timelineImage,
      source: "Sở Y tế Hà Nội",
      type: "dossier"
    },
    {
      id: "8",
      title: "DN X triển khai truy xuất lô sữa bột: Giảm 72% khiếu nại trong 6 tháng",
      excerpt: "Triển khai mã lô + tra cứu bằng chữ; công bố lịch sử kiểm tra chất lượng. Thời gian xử lý khiếu nại từ 5 ngày xuống 48 giờ.",
      industry: "Thực phẩm",
      channel: "Tất cả kênh",
      riskType: "Chất lượng",
      status: "corrected",
      date: "1 tháng trước",
      image: dataReportImage,
      source: "Nghiên cứu trường hợp",
      type: "enterprise-profile"
    }
  ];

  const featuredDossiers = [
    {
      title: "Hồ sơ: Chuỗi phân phối dược phẩm giả qua mạng xã hội",
      summary: "Theo dấu 45 tài khoản bán thuốc không rõ nguồn gốc trên Facebook và Zalo"
    },
    {
      title: "Điều tra: Quảng cáo thực phẩm chức năng trên TikTok",
      summary: "89% video quảng cáo có tuyên bố công dụng vượt quá giấy phép"
    },
    {
      title: "Chuỗi cung ứng: Điểm yếu trong phân phối điện tử gia dụng",
      summary: "Phát hiện 3 điểm chuyển đổi bao bì trong hệ thống đại lý"
    },
    {
      title: "Bài học: Xử lý khủng hoảng khi sản phẩm bị tố cáo",
      summary: "5 bước ứng phó trong 24 giờ đầu để giảm thiểu thiệt hại"
    }
  ];

  const dataInvestigations = [
    {
      title: "Báo cáo: Rủi ro sản phẩm theo địa phương Q1/2025",
      csvLink: "#"
    },
    {
      title: "Phân tích: Tần suất vi phạm theo loại hình kinh doanh",
      csvLink: "#"
    },
    {
      title: "Dữ liệu: Thu hồi sản phẩm 6 tháng đầu năm",
      csvLink: "#"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      investigating: { label: "Đang điều tra", className: "bg-yellow-500 hover:bg-yellow-600" },
      verified: { label: "Đã xác minh", className: "bg-blue-500 hover:bg-blue-600" },
      resolved: { label: "Đã khép lại", className: "bg-green-500 hover:bg-green-600" },
      corrected: { label: "Đã đính chính", className: "bg-purple-500 hover:bg-purple-600" }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={`${config.className} text-white`}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Phân tích & Hồ sơ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              Phân Tích & Hồ Sơ
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Biến thông tin rời rạc thành bức tranh có ngữ cảnh: nguyên nhân – cơ chế – chuỗi sự kiện – tác động – cách phòng ngừa
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-muted/30 border-b sticky top-16 z-10">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="text-xs md:text-sm">
                <SelectValue placeholder="Ngành hàng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả ngành</SelectItem>
                <SelectItem value="cosmetics">Mỹ phẩm</SelectItem>
                <SelectItem value="food">Thực phẩm</SelectItem>
                <SelectItem value="auto-parts">Phụ tùng ô tô</SelectItem>
                <SelectItem value="electronics">Điện tử</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedChannel} onValueChange={setSelectedChannel}>
              <SelectTrigger className="text-xs md:text-sm">
                <SelectValue placeholder="Kênh bán" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả kênh</SelectItem>
                <SelectItem value="store">Cửa hàng</SelectItem>
                <SelectItem value="ecommerce">TMĐT</SelectItem>
                <SelectItem value="social">Mạng xã hội</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedRisk} onValueChange={setSelectedRisk}>
              <SelectTrigger className="text-xs md:text-sm">
                <SelectValue placeholder="Loại rủi ro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả rủi ro</SelectItem>
                <SelectItem value="labeling">Ghi nhãn sai</SelectItem>
                <SelectItem value="quality">Chất lượng</SelectItem>
                <SelectItem value="origin">Nguồn gốc</SelectItem>
                <SelectItem value="false-claims">Tuyên bố sai</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="text-xs md:text-sm">
                <SelectValue placeholder="Tình trạng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="investigating">Đang điều tra</SelectItem>
                <SelectItem value="verified">Đã xác minh</SelectItem>
                <SelectItem value="resolved">Đã khép lại</SelectItem>
                <SelectItem value="corrected">Đã đính chính</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="text-xs md:text-sm col-span-2 md:col-span-1">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="impact">Tác động lớn</SelectItem>
                <SelectItem value="relevant">Liên quan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Articles List */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative aspect-video md:aspect-square">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    {getStatusBadge(article.status)}
                  </div>
                  <CardContent className="md:col-span-2 p-4 md:p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{article.industry}</Badge>
                      <Badge variant="outline" className="text-xs">{article.channel}</Badge>
                      <Badge variant="outline" className="text-xs text-alert border-alert">{article.riskType}</Badge>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 line-clamp-2 md:line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span>Nguồn: {article.source}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1 text-xs md:text-sm h-8">
                        <Eye className="h-3 w-3" />
                        <span className="hidden sm:inline">Xem chi tiết</span>
                        <span className="sm:hidden">Chi tiết</span>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}

            {/* Pagination */}
            <Pagination className="mt-6 md:mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="text-xs md:text-sm" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="text-xs md:text-sm">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-xs md:text-sm">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-xs md:text-sm">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="text-xs md:text-sm" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sidebar Ad */}
            <AdBanner type="sidebar-rect" variant={2} />
            
            {/* Featured Dossiers */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-4 border-l-4 border-primary pl-3">
                  Hồ sơ tiêu biểu
                </h3>
                <div className="space-y-3">
                  {featuredDossiers.map((dossier, index) => (
                    <div key={index} className="pb-3 border-b last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-sm md:text-base mb-1 hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {dossier.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                        {dossier.summary}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4 gap-1 text-xs md:text-sm">
                  Xem tất cả hồ sơ
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Data Investigations */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-4 border-l-4 border-success pl-3">
                  Điều tra dữ liệu mới
                </h3>
                <div className="space-y-3">
                  {dataInvestigations.map((investigation, index) => (
                    <div key={index} className="pb-3 border-b last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-sm md:text-base mb-2 hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {investigation.title}
                      </h4>
                      <Button variant="outline" size="sm" className="gap-1 text-xs h-8">
                        <Download className="h-3 w-3" />
                        Tải CSV
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Box */}
            <Card className="bg-muted/50">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold mb-3">Đóng góp thông tin</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4">
                  Bạn có thông tin bổ sung về các vụ việc đang điều tra? Gửi bằng chứng để chúng tôi xác minh.
                </p>
                <Button className="w-full text-xs md:text-sm h-9">
                  Gửi bằng chứng bổ sung
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalysisDossier;
