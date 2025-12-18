import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Download, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AdBanner from "@/components/AdBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-tech-solutions.jpg";
import techRoadmap from "@/assets/tech-roadmap.jpg";
import techQR from "@/assets/tech-qr-serialized.jpg";
import techNFC from "@/assets/tech-nfc-rfid.jpg";
import techAI from "@/assets/tech-ai-detection.jpg";
import techBlockchain from "@/assets/tech-blockchain-trace.jpg";
import techIoT from "@/assets/tech-iot-sensors.jpg";
import techTamper from "@/assets/tech-tamper-evident.jpg";
import techAPI from "@/assets/tech-api-integration.jpg";

const TechSolutions = () => {
  const [selectedTech, setSelectedTech] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedPurpose, setSelectedPurpose] = useState("all");

  const featuredArticles = [
    {
      id: 1,
      title: "Bản đồ công nghệ chống hàng giả & truy xuất 2025: từ QR tuần tự đến AI xác thực hình ảnh",
      excerpt: "Tổng quan hệ công nghệ chủ đạo, tiêu chí lựa chọn và bối cảnh áp dụng tại Việt Nam cho doanh nghiệp muốn triển khai giải pháp chống giả.",
      image: techRoadmap,
      category: "Bản đồ công nghệ",
      readiness: "Sẵn sàng triển khai",
      time: "15 phút đọc"
    },
    {
      id: 2,
      title: "Lộ trình 180 ngày triển khai truy xuất nguồn gốc cho FMCG khối lượng lớn",
      excerpt: "Hướng dẫn chi tiết từ mục tiêu đến KPI cho doanh nghiệp FMCG.",
      image: techQR,
      category: "Hướng dẫn triển khai",
      readiness: "Thí điểm",
      time: "12 phút đọc"
    },
    {
      id: 3,
      title: "QR tuần tự, NFC, và RFID: chọn gì cho chuỗi phân phối nhiều tầng?",
      excerpt: "So sánh chi tiết về hiệu quả chống sao chép, chi phí và khả năng triển khai.",
      image: techNFC,
      category: "So sánh giải pháp",
      readiness: "Sẵn sàng triển khai",
      time: "10 phút đọc"
    }
  ];

  const articles = [
    {
      id: 4,
      title: "AI xác thực hình ảnh: phát hiện ảnh tái sử dụng trên TMĐT",
      excerpt: "Hệ thống AI phát hiện hình ảnh giả mạo, tái sử dụng và quảng cáo sai sự thật trên các nền tảng thương mại điện tử.",
      image: techAI,
      category: "AI & Machine Learning",
      industry: "TMĐT",
      purpose: "Chống giả",
      readiness: "Sẵn sàng triển khai",
      tco: "Trung bình",
      time: "8 phút đọc"
    },
    {
      id: 5,
      title: "Blockchain truy xuất nguồn gốc: từ nhà máy đến người tiêu dùng",
      excerpt: "Kiến trúc hệ thống blockchain cho chuỗi cung ứng minh bạch, không thể can thiệp và có thể kiểm chứng.",
      image: techBlockchain,
      category: "Blockchain",
      industry: "Thực phẩm",
      purpose: "Truy xuất",
      readiness: "Thí điểm",
      tco: "Cao",
      time: "14 phút đọc"
    },
    {
      id: 6,
      title: "IoT trong chuỗi lạnh dược phẩm: giám sát nhiệt độ thời gian thực",
      excerpt: "Triển khai cảm biến IoT để đảm bảo chất lượng sản phẩm dược trong suốt quá trình vận chuyển và lưu kho.",
      image: techIoT,
      category: "IoT",
      industry: "Dược phẩm",
      purpose: "Tuân thủ",
      readiness: "Sẵn sàng triển khai",
      tco: "Trung bình",
      time: "11 phút đọc"
    },
    {
      id: 7,
      title: "Tem chống tháo: công nghệ ngăn chặn mở bao bì trái phép",
      excerpt: "Các loại tem tamper-evident và cách tích hợp với hệ thống nhật ký sự kiện để phát hiện can thiệp.",
      image: techTamper,
      category: "Tem & Nhãn số",
      industry: "Tiêu dùng",
      purpose: "Chống giả",
      readiness: "Sẵn sàng triển khai",
      tco: "Thấp",
      time: "7 phút đọc"
    },
    {
      id: 8,
      title: "Mẫu dữ liệu TraceID & webhook xác thực: chuẩn hoá hệ sinh thái",
      excerpt: "Tài liệu kỹ thuật về JSON schema, chữ ký số và tích hợp API cho hệ thống truy xuất nguồn gốc.",
      image: techAPI,
      category: "Tích hợp & API",
      industry: "Công nghệ",
      purpose: "Tích hợp",
      readiness: "Sẵn sàng triển khai",
      tco: "Thấp",
      time: "16 phút đọc"
    }
  ];

  const playbooks = [
    {
      title: "Playbook 01: Triển khai truy xuất cho nông sản",
      description: "0–90–180 ngày, KPI: tỷ lệ quét tại điểm bán",
      icon: FileText
    },
    {
      title: "Playbook 02: Chống giả cho phụ tùng xe máy",
      description: "Kết hợp tem số + kiểm soát đại lý cấp 2",
      icon: FileText
    },
    {
      title: "Playbook 03: Kiểm soát quảng cáo TPCN",
      description: "AI phát hiện nội dung thổi phồng + quy trình gỡ",
      icon: FileText
    }
  ];

  const sidebarCategories = [
    { name: "AI & Machine Learning", count: 12 },
    { name: "Blockchain", count: 8 },
    { name: "IoT & Sensors", count: 15 },
    { name: "QR & Serialization", count: 24 },
    { name: "RFID & NFC", count: 18 },
    { name: "Tem & Nhãn số", count: 20 },
    { name: "API & Tích hợp", count: 10 }
  ];

  const trendingTopics = [
    "AI phát hiện deepfake sản phẩm",
    "QR code động với chữ ký số",
    "Blockchain riêng tư cho chuỗi cung ứng",
    "Edge AI kiểm tra chất lượng",
    "NFC cho hàng xa xỉ"
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
                    {featuredArticles[0].readiness}
                  </Badge>
                </div>
                <CardContent className="p-4 md:p-6">
                  <h2 className="text-xl md:text-3xl font-bold mb-3 text-foreground hover:text-primary transition-colors cursor-pointer">
                    {featuredArticles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
                    <span>{featuredArticles[0].time}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Đọc ngay →
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
                        {article.category}
                      </Badge>
                      <h3 className="font-semibold text-sm mb-2 text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.time}</span>
                        <Badge variant="secondary" className="text-xs">
                          {article.readiness}
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

      {/* Filters Section */}
      <section className="border-b border-border bg-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">Bộ lọc:</span>
            <div className="flex flex-wrap gap-2 md:gap-3 w-full md:w-auto">
              <Select value={selectedTech} onValueChange={setSelectedTech}>
                <SelectTrigger className="w-full sm:w-[180px] h-9 text-sm bg-background">
                  <SelectValue placeholder="Công nghệ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả công nghệ</SelectItem>
                  <SelectItem value="ai">AI & ML</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                  <SelectItem value="iot">IoT</SelectItem>
                  <SelectItem value="qr">QR & Serialization</SelectItem>
                  <SelectItem value="rfid">RFID & NFC</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-full sm:w-[160px] h-9 text-sm bg-background">
                  <SelectValue placeholder="Ngành" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả ngành</SelectItem>
                  <SelectItem value="pharma">Dược phẩm</SelectItem>
                  <SelectItem value="food">Thực phẩm</SelectItem>
                  <SelectItem value="fmcg">FMCG</SelectItem>
                  <SelectItem value="auto">Phụ tùng</SelectItem>
                  <SelectItem value="fashion">Thời trang</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPurpose} onValueChange={setSelectedPurpose}>
                <SelectTrigger className="w-full sm:w-[180px] h-9 text-sm bg-background">
                  <SelectValue placeholder="Mục đích" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả mục đích</SelectItem>
                  <SelectItem value="counterfeit">Chống giả</SelectItem>
                  <SelectItem value="trace">Truy xuất</SelectItem>
                  <SelectItem value="compliance">Tuân thủ</SelectItem>
                  <SelectItem value="integration">Tích hợp</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Articles List */}
            <div className="lg:col-span-2 space-y-8">
              {/* Playbooks Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Playbook triển khai</h2>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Xem tất cả →
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {playbooks.map((playbook, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-primary/5 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <playbook.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-sm mb-2 text-foreground">{playbook.title}</h3>
                        <p className="text-xs text-muted-foreground">{playbook.description}</p>
                        <Button variant="link" size="sm" className="px-0 mt-2 text-primary hover:text-primary/80 text-xs">
                          <Download className="h-3 w-3 mr-1" />
                          Tải về
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Articles Grid */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">Bài viết mới nhất</h2>
                <div className="space-y-6">
                  {articles.map((article) => (
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
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">{article.industry}</Badge>
                            <Badge variant="outline" className="text-xs">{article.purpose}</Badge>
                            <Badge variant="secondary" className="text-xs">{article.readiness}</Badge>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs md:text-sm">
                            <div className="flex items-center gap-4 text-muted-foreground">
                              <span>{article.time}</span>
                              <span>TCO: {article.tco}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                              Chi tiết →
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
              <AdBanner type="sidebar-rect" variant={2} />
              
              {/* Categories */}
              <Card className="border-none bg-card">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Công nghệ
                  </h3>
                  <div className="space-y-2">
                    {sidebarCategories.map((category, index) => (
                      <Link 
                        key={index}
                        to="#"
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary/50 transition-colors text-sm group"
                      >
                        <span className="text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="border-none bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                    Chủ đề nổi bật
                  </h3>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <Link 
                        key={index}
                        to="#"
                        className="block text-sm text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
                      >
                        → {topic}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Download Resources */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-card">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Tài liệu tham khảo</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    So sánh giải pháp, checklist, mẫu RFP
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Download className="h-4 w-4 mr-2" />
                    Tải CSV/PDF
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

export default TechSolutions;
