import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Download, Award, CheckCircle2, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AdBanner from "@/components/AdBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-compliance-enterprise.jpg";
import foodFactory from "@/assets/compliance-food-factory.jpg";
import pharmaTeam from "@/assets/compliance-pharma-team.jpg";
import cosmeticsTrace from "@/assets/compliance-cosmetics-trace.jpg";
import inspection from "@/assets/compliance-inspection.jpg";
import training from "@/assets/compliance-training.jpg";
import labeling from "@/assets/compliance-labeling.jpg";
import audit from "@/assets/compliance-audit.jpg";
import award from "@/assets/compliance-award.jpg";

const ComplianceEnterprises = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedScale, setSelectedScale] = useState("all");

  const featuredArticles = [
    {
      id: 1,
      title: "Công ty Sữa An Tâm – phạm vi truy xuất lô và kiểm soát nhãn",
      excerpt: "Ngành sữa bột | Trạng thái: Đạt chuẩn | Áp dụng truy xuất lô - đơn vị | Nhãn phụ tiếng Việt chuẩn | KPI 6 tháng: khiếu nại giảm 62%, thời gian phản hồi 48 giờ.",
      image: foodFactory,
      category: "Hồ sơ doanh nghiệp",
      status: "Đạt chuẩn",
      industry: "Thực phẩm",
      time: "12 phút đọc"
    },
    {
      id: 2,
      title: "Dược phẩm Việt triển khai ISO 9001 & GDP toàn hệ thống",
      excerpt: "Quy trình quản lý chất lượng toàn diện từ sản xuất đến phân phối.",
      image: pharmaTeam,
      category: "Thực hành tốt",
      status: "Đạt chuẩn",
      industry: "Dược phẩm",
      time: "10 phút đọc"
    },
    {
      id: 3,
      title: "Mỹ phẩm Thiên Nhiên: giảm 70% khiếu nại nhờ tem số",
      excerpt: "Kết hợp tem số và kiểm chứng ảnh bằng AI để chống hàng giả.",
      image: cosmeticsTrace,
      category: "Case study",
      status: "Đạt chuẩn",
      industry: "Mỹ phẩm",
      time: "8 phút đọc"
    }
  ];

  const newCertified = [
    {
      name: "Công ty Linh Kiện Ô Tô Sài Gòn",
      description: "Truy xuất tem số + kiểm soát đại lý cấp 2",
      industry: "Phụ tùng",
      certDate: "15/03/2025"
    },
    {
      name: "Thực phẩm Hữu Cơ Xanh",
      description: "Chuỗi truy xuất nông sản theo mùa vụ",
      industry: "Nông sản",
      certDate: "12/03/2025"
    },
    {
      name: "Dệt May Xuất Khẩu An Phước",
      description: "Quản lý nguồn gốc nguyên liệu & ESG",
      industry: "Thời trang",
      certDate: "08/03/2025"
    },
    {
      name: "Điện Tử Gia Dụng Việt",
      description: "Tem bảo hành điện tử & truy xuất linh kiện",
      industry: "Điện tử",
      certDate: "05/03/2025"
    },
    {
      name: "Nhựa Sinh Học Miền Nam",
      description: "Chứng nhận bao bì phân hủy sinh học",
      industry: "Bao bì",
      certDate: "01/03/2025"
    },
    {
      name: "Đồ Uống Giải Khát Sạch",
      description: "Kiểm nghiệm định kỳ + công bố minh bạch",
      industry: "Đồ uống",
      certDate: "28/02/2025"
    }
  ];

  const bestPractices = [
    {
      id: 4,
      title: "Quản trị nhãn phụ cho hàng nhập khẩu – quy trình 5 bước không lỗi",
      excerpt: "Ma trận trách nhiệm, checklist dán nhãn theo lô, lưu đồ xử lý khi phát hiện sai, mẫu biên bản đính chính.",
      image: labeling,
      category: "Thực hành tốt",
      downloads: 847,
      time: "6 phút đọc"
    },
    {
      id: 5,
      title: "Lộ trình 180 ngày cho SME mỹ phẩm đạt chuẩn tuân thủ",
      excerpt: "Từ lập sổ chuẩn nhãn, triển khai TraceID đến mở rộng đơn vị sản phẩm với KPI cụ thể.",
      image: inspection,
      category: "Lộ trình cải tiến",
      downloads: 1203,
      time: "14 phút đọc"
    },
    {
      id: 6,
      title: "Đào tạo nội bộ về tuân thủ: kinh nghiệm từ 15 DN",
      excerpt: "Chương trình đào tạo định kỳ giúp duy trì tiêu chuẩn chất lượng và giảm sai sót.",
      image: training,
      category: "Kinh nghiệm",
      downloads: 652,
      time: "9 phút đọc"
    },
    {
      id: 7,
      title: "Chuẩn bị hồ sơ thẩm định ISO: checklist 40 điểm",
      excerpt: "Danh sách kiểm tra toàn diện cho doanh nghiệp chuẩn bị chứng nhận ISO 9001.",
      image: audit,
      category: "Bộ tiêu chí",
      downloads: 1456,
      time: "11 phút đọc"
    }
  ];

  const criteriaDocuments = [
    {
      title: "Bộ tiêu chí đánh giá tuân thủ v1.0 (6 trụ cột)",
      description: "Pháp lý, Nhãn, Truy xuất, Kiểm nghiệm, Khiếu nại, Đào tạo",
      format: "PDF"
    },
    {
      title: "Biểu mẫu tự đánh giá 40 câu hỏi",
      description: "Công cụ tự đánh giá mức độ tuân thủ của doanh nghiệp",
      format: "Excel"
    },
    {
      title: "SOP quản lý nhãn phụ tiếng Việt",
      description: "Quy trình chuẩn cho hàng nhập khẩu",
      format: "DOC"
    },
    {
      title: "Checklist chuẩn bị hồ sơ chứng nhận",
      description: "18 dòng kiểm tra trước khi nộp hồ sơ",
      format: "PDF"
    },
    {
      title: "Mẫu chính sách khiếu nại 48 giờ",
      description: "Template chính sách phản hồi khách hàng",
      format: "DOC"
    },
    {
      title: "Kế hoạch đào tạo tuân thủ hàng quý",
      description: "Lộ trình đào tạo cho đội ngũ QA/QC",
      format: "Excel"
    }
  ];

  const sidebarStats = [
    { label: "DN đạt chuẩn", value: "247", icon: CheckCircle2 },
    { label: "Đang thẩm định", value: "58", icon: Clock },
    { label: "Tổng điểm trung bình", value: "84/100", icon: Award }
  ];

  const industryList = [
    { name: "Thực phẩm & Đồ uống", count: 68 },
    { name: "Dược phẩm", count: 42 },
    { name: "Mỹ phẩm", count: 53 },
    { name: "Phụ tùng ô tô/xe máy", count: 35 },
    { name: "Nông sản", count: 28 },
    { name: "Thời trang", count: 31 },
    { name: "Điện tử", count: 24 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Featured Article */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-card h-full">
                <div className="relative">
                  <img 
                    src={featuredArticles[0].image} 
                    alt={featuredArticles[0].title}
                    className="w-full h-48 md:h-80 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {featuredArticles[0].category}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-success text-success-foreground">
                    {featuredArticles[0].status}
                  </Badge>
                </div>
                <CardContent className="p-4 md:p-6">
                  <Badge variant="outline" className="mb-2">
                    {featuredArticles[0].industry}
                  </Badge>
                  <h2 className="text-xl md:text-3xl font-bold mb-3 text-foreground hover:text-primary transition-colors cursor-pointer">
                    {featuredArticles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
                    <span>{featuredArticles[0].time}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Xem hồ sơ →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Articles */}
            <div className="space-y-4">
              {featuredArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-card">
                  <div className="flex flex-col sm:flex-row">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full sm:w-32 h-32 object-cover flex-shrink-0"
                    />
                    <CardContent className="p-3 flex-1">
                      <Badge className="mb-2 text-xs" variant="outline">
                        {article.industry}
                      </Badge>
                      <h3 className="font-semibold text-sm mb-2 text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.time}</span>
                        <Badge variant="secondary" className="text-xs">
                          {article.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="border-b border-border bg-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Tìm kiếm doanh nghiệp, nhãn hàng..." 
                className="pl-10 h-11 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">Lọc theo:</span>
              <div className="flex flex-wrap gap-2 md:gap-3 w-full md:w-auto">
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full sm:w-[160px] h-9 text-sm bg-background">
                    <SelectValue placeholder="Ngành hàng" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả ngành</SelectItem>
                    <SelectItem value="food">Thực phẩm</SelectItem>
                    <SelectItem value="pharma">Dược phẩm</SelectItem>
                    <SelectItem value="cosmetics">Mỹ phẩm</SelectItem>
                    <SelectItem value="auto">Phụ tùng</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full sm:w-[160px] h-9 text-sm bg-background">
                    <SelectValue placeholder="Trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="certified">Đạt chuẩn</SelectItem>
                    <SelectItem value="pending">Đang thẩm định</SelectItem>
                    <SelectItem value="expired">Đã hết hiệu lực</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedScale} onValueChange={setSelectedScale}>
                  <SelectTrigger className="w-full sm:w-[160px] h-9 text-sm bg-background">
                    <SelectValue placeholder="Quy mô" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả quy mô</SelectItem>
                    <SelectItem value="sme">SME</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* New Certified Enterprises */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Doanh nghiệp mới đạt chuẩn
                  </h2>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Xem tất cả →
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {newCertified.map((company, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-success/20 bg-gradient-to-br from-card to-success/5 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-success/10 flex-shrink-0">
                            <Award className="h-5 w-5 text-success" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-1 text-foreground line-clamp-2">
                              {company.name}
                            </h3>
                            <Badge variant="outline" className="text-xs mb-2">
                              {company.industry}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                          {company.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Đạt chuẩn: {company.certDate}</span>
                          <Button variant="link" size="sm" className="px-0 text-primary hover:text-primary/80 text-xs h-auto">
                            Chi tiết →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Best Practices */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                  Thực hành tốt & Tài liệu hướng dẫn
                </h2>
                <div className="space-y-6">
                  {bestPractices.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-card">
                      <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                        <div className="relative md:w-64 flex-shrink-0">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                          <Badge className="absolute top-3 left-3 text-xs bg-primary/90 text-primary-foreground">
                            {article.category}
                          </Badge>
                        </div>
                        <CardContent className="p-4 md:p-6 flex-1">
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs md:text-sm">
                            <div className="flex items-center gap-4 text-muted-foreground">
                              <span>{article.time}</span>
                              <span className="flex items-center gap-1">
                                <Download className="h-3 w-3" />
                                {article.downloads} tải
                              </span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                              Đọc ngay →
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-8">
                  <Button variant="outline" size="sm">Trang trước</Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Trang sau</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sidebar Ad */}
              <AdBanner type="sidebar-rect" variant={3} />
              
              {/* Statistics */}
              <Card className="border-none bg-card">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Thống kê
                  </h3>
                  <div className="space-y-4">
                    {sidebarStats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <stat.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="text-lg font-bold text-foreground">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Industry List */}
              <Card className="border-none bg-card">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Theo ngành hàng
                  </h3>
                  <div className="space-y-2">
                    {industryList.map((industry, index) => (
                      <Link 
                        key={index}
                        to="#"
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary/50 transition-colors text-sm group"
                      >
                        <span className="text-foreground group-hover:text-primary transition-colors">
                          {industry.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {industry.count}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Criteria Documents */}
              <Card className="border-none bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Bộ tiêu chí & Biểu mẫu
                  </h3>
                  <div className="space-y-3">
                    {criteriaDocuments.slice(0, 4).map((doc, index) => (
                      <div key={index} className="p-3 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {doc.format}
                          </Badge>
                          <h4 className="text-xs font-semibold text-foreground flex-1 line-clamp-2">
                            {doc.title}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                          {doc.description}
                        </p>
                        <Button variant="link" size="sm" className="px-0 text-primary hover:text-primary/80 text-xs h-auto">
                          <Download className="h-3 w-3 mr-1" />
                          Tải về
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Xem tất cả tài liệu
                  </Button>
                </CardContent>
              </Card>

              {/* Self Assessment CTA */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-card">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Tự đánh giá tuân thủ</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hoàn thành 40 câu hỏi để biết điểm tuân thủ của doanh nghiệp
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Bắt đầu đánh giá
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ComplianceEnterprises;
