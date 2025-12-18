import { useState } from "react";
import { Link } from "react-router-dom";
import { useWebsiteSettings } from "@/contexts/WebsiteSettingsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AdBanner from "@/components/AdBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Play } from "lucide-react";
import directiveInspection from "@/assets/directive-inspection-action.jpg";
import directiveConference from "@/assets/directive-conference.jpg";
import directiveDataMonitoring from "@/assets/directive-data-monitoring.jpg";
import directiveCustoms from "@/assets/directive-customs-check.jpg";
import directivePress from "@/assets/directive-press-conference.jpg";
import directiveTraining from "@/assets/directive-training.jpg";

const Directive389 = () => {
  const { getCategoryBySlug } = useWebsiteSettings();
  const categorySettings = getCategoryBySlug("alo-389");
  const [activeTab, setActiveTab] = useState("thong-tin");

  // Apply settings from admin if available
  const pageTitle = categorySettings?.name || "Alo 389";
  const pageDescription = categorySettings?.description || "Tổng hợp chỉ đạo, kết quả kiểm tra – xử lý, dữ liệu cảnh báo từ hệ thống Ban Chỉ đạo 389 và lực lượng chức năng trên cả nước.";
  const layoutSettings = categorySettings?.layout || {
    displayType: "list",
    articlesPerRow: 1,
    showImages: true,
    showExcerpt: true,
    showCategory: true,
    showDate: true,
    maxArticles: 10
  };

  const featuredNews = [
    {
      title: "Cao điểm chống buôn lậu cuối năm: tăng cường kiểm tra nguồn gốc trên kênh TMĐT",
      summary: "Ban Chỉ đạo 389 yêu cầu các lực lượng chức năng tập trung kiểm soát hàng hóa trên các sàn thương mại điện tử trong đợt 11-12/2025.",
      date: "15/11/2025",
      source: "Ban Chỉ đạo 389 Trung ương",
      status: "Mới"
    },
    {
      title: "Tổng hợp kết quả xử lý hàng giả tại Hà Nội - TP.HCM tuần 2 tháng 11",
      summary: "Lực lượng chức năng hai thành phố đã kiểm tra và xử lý 47 trường hợp vi phạm về ghi nhãn và nguồn gốc hàng hóa.",
      date: "13/11/2025",
      source: "Cục Quản lý thị trường",
      status: "Cập nhật"
    },
    {
      title: "Phối hợp liên ngành xử lý hàng giả trên các tuyến biên giới phía Bắc",
      summary: "Các lực lượng Hải quan, Biên phòng và Quản lý thị trường đã bắt giữ 12 vụ vận chuyển hàng lậu và hàng giả qua biên giới.",
      date: "10/11/2025",
      source: "Ban Chỉ đạo 389 vùng biên",
      status: "Mới"
    },
    {
      title: "Hướng dẫn triển khai công tác chống buôn lậu dịp Tết Nguyên đán 2026",
      summary: "Ban Chỉ đạo 389 ban hành kế hoạch cao điểm kiểm tra hàng hóa thiết yếu phục vụ Tết Nguyên đán.",
      date: "08/11/2025",
      source: "Ban Chỉ đạo 389 Trung ương",
      status: "Mới"
    }
  ];

  const inspectionResults = [
    { date: "12/11/2025", location: "Hà Nội", category: "Mỹ phẩm", violation: "Ghi nhãn sai, không đủ hồ sơ", result: "Thu hồi lô – đính chính", source: "Cục QLTT" },
    { date: "12/11/2025", location: "TP.HCM", category: "Linh kiện xe máy", violation: "Trộn lô, thay bao bì", result: "Tạm giữ, xử phạt hành chính", source: "Cục QLTT" },
    { date: "11/11/2025", location: "Đà Nẵng", category: "Thực phẩm chức năng", violation: "Quảng cáo sai sự thật", result: "Đình chỉ kinh doanh 3 tháng", source: "Sở Y tế" },
    { date: "10/11/2025", location: "Hải Phòng", category: "Hàng điện tử", violation: "Không tem phụ tiếng Việt", result: "Cảnh cáo và phạt tiền", source: "Chi cục QLTT" },
    { date: "09/11/2025", location: "Cần Thơ", category: "Nông sản", violation: "Nguồn gốc không rõ ràng", result: "Thu hồi toàn bộ lô hàng", source: "Sở NN&PTNT" },
    { date: "08/11/2025", location: "Nghệ An", category: "Dược phẩm", violation: "Buôn lậu qua biên giới", result: "Chuyển cơ quan điều tra", source: "Hải quan" }
  ];

  const timelineEvents = [
    { period: "Tháng 11/2025", summary: "Chỉ thị tăng cường kiểm soát TMĐT dịp cuối năm", link: "#" },
    { period: "Tháng 10/2025", summary: "Kế hoạch cao điểm chống buôn lậu quý IV", link: "#" },
    { period: "Tháng 9/2025", summary: "Tổng kết 9 tháng công tác chống hàng giả toàn quốc", link: "#" },
    { period: "Tháng 8/2025", summary: "Hướng dẫn phối hợp liên ngành xử lý vi phạm ghi nhãn", link: "#" }
  ];

  const videos = [
    { title: "Họp báo kết quả chống buôn lậu tháng 11/2025", duration: "15:30", date: "14/11/2025" },
    { title: "Chuyên đề: Xử lý hàng giả trên kênh TMĐT", duration: "22:45", date: "10/11/2025" },
    { title: "Hội thảo phối hợp 389 liên ngành tại miền Trung", duration: "18:20", date: "05/11/2025" }
  ];

  const talkList = [
    {
      title: "Talk 389: Quy trình tiếp nhận và xử lý tố giác hàng giả trên TMĐT",
      summary: "Trao đổi về cách thức phối hợp giữa lực lượng chức năng và sàn TMĐT trong xử lý hàng giả.",
      speaker: "Ông Nguyễn Văn A - Chi cục trưởng Chi cục QLTT",
      date: "12/11/2025"
    },
    {
      title: "Kinh nghiệm phối hợp liên ngành khi xử lý tem, nhãn phụ sai quy định",
      summary: "Chia sẻ thực tiễn và giải pháp trong công tác kiểm tra, xử lý vi phạm về tem nhãn.",
      speaker: "Bà Trần Thị B - Phó Cục trưởng Cục Quản lý Chất lượng",
      date: "08/11/2025"
    },
    {
      title: "Talk 389: Quyền và nghĩa vụ của doanh nghiệp khi bị kiểm tra",
      summary: "Hướng dẫn chi tiết về quy trình kiểm tra và các quyền lợi của doanh nghiệp.",
      speaker: "Luật sư Lê Văn C - Hiệp hội Doanh nghiệp",
      date: "05/11/2025"
    }
  ];

  const documents = [
    { title: "SOP tiếp nhận tố giác hàng giả", type: "PDF", size: "2.3 MB" },
    { title: "Biểu mẫu báo cáo vi phạm TMĐT", type: "DOC", size: "0.8 MB" },
    { title: "Checklist kiểm tra nguồn gốc hàng hóa", type: "PDF", size: "1.5 MB" },
    { title: "Hướng dẫn ghi nhãn theo quy định", type: "PDF", size: "3.2 MB" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{pageTitle}</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {pageDescription}
            </p>
            {categorySettings && (
              <div className="mt-4 text-sm text-muted-foreground">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                  📝 Nội dung này được quản lý từ Admin
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent h-auto p-0">
              <TabsTrigger 
                value="thong-tin" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Thông tin 389
              </TabsTrigger>
              <TabsTrigger 
                value="talk" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Talk 389
              </TabsTrigger>
              <TabsTrigger 
                value="data" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Dữ liệu & Cảnh báo 389
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} className="w-full">
              {/* Thông tin 389 Tab */}
              <TabsContent value="thong-tin" className="space-y-12 mt-0">
                {/* Featured Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={directiveInspection} 
                    alt="Lực lượng chức năng kiểm tra hàng hóa"
                    className="w-full h-[400px] object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Lực lượng chức năng kiểm tra nguồn gốc hàng hóa tại kho trung chuyển.
                  </p>
                </div>

                {/* Featured News */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    Tin nổi bật trong tuần
                  </h2>
                  <div className="space-y-6">
                    {featuredNews.map((news, index) => (
                      <article key={index} className="border-l-4 border-primary pl-6 py-2 hover:bg-accent/5 transition-colors">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                            {news.title}
                          </h3>
                          {news.status && (
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded whitespace-nowrap">
                              {news.status}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-2">{news.summary}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{news.date}</span>
                          <span>•</span>
                          <span>Nguồn: {news.source}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Inspection Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={directiveCustoms} 
                    alt="Kiểm tra hàng hóa tại cửa khẩu"
                    className="w-full h-[350px] object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Lực lượng Hải quan kiểm tra container hàng nhập khẩu tại cảng.
                  </p>
                </div>

                {/* Timeline */}
                <div className="bg-accent/5 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Dòng thời gian chỉ đạo</h2>
                  <div className="space-y-4">
                    {timelineEvents.map((event, index) => (
                      <div key={index} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-32 text-sm font-medium text-primary">
                          {event.period}
                        </div>
                        <div className="flex-1 border-l-2 border-border pl-4 pb-4">
                          <a href={event.link} className="text-foreground hover:text-primary transition-colors group-hover:underline">
                            {event.summary}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conference Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={directiveConference} 
                    alt="Hội nghị Ban Chỉ đạo 389"
                    className="w-full h-[350px] object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Hội nghị triển khai nhiệm vụ chống buôn lậu, hàng giả của Ban Chỉ đạo 389.
                  </p>
                </div>

                {/* Videos */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Video & Họp báo</h2>
                  <div className="grid gap-4">
                    {videos.map((video, index) => (
                      <div key={index} className="flex gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer group">
                        <div className="flex-shrink-0 w-24 h-16 bg-accent rounded flex items-center justify-center">
                          <Play className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{video.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{video.duration}</span>
                            <span>•</span>
                            <span>{video.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Talk 389 Tab */}
              <TabsContent value="talk" className="space-y-12 mt-0">
                {/* Talk Hero Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={directivePress} 
                    alt="Họp báo công bố kết quả chống hàng giả"
                    className="w-full h-[400px] object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Họp báo công bố kết quả hoạt động chống hàng giả, buôn lậu.
                  </p>
                </div>

                {/* Talk List */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Danh sách Talk 389</h2>
                  <div className="space-y-6">
                    {talkList.map((talk, index) => (
                      <article key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                          {talk.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{talk.summary}</p>
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Diễn giả:</span>
                            <span className="text-muted-foreground">{talk.speaker}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Ngày:</span>
                            <span className="text-muted-foreground">{talk.date}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Training Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={directiveTraining} 
                    alt="Đào tạo nghiệp vụ kiểm tra thị trường"
                    className="w-full h-[350px] object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Khóa đào tạo nghiệp vụ kiểm tra, xử lý vi phạm cho lực lượng chức năng.
                  </p>
                </div>

                {/* Related Documents */}
                <div className="bg-accent/5 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Tài liệu kèm Talk</h2>
                  <div className="grid gap-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-background rounded border hover:shadow-sm transition-shadow">
                        <div>
                          <h4 className="font-medium mb-1">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Dữ liệu & Cảnh báo 389 Tab */}
              <TabsContent value="data" className="space-y-12 mt-0">
                {/* Data Hero Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={directiveDataMonitoring} 
                    alt="Hệ thống giám sát dữ liệu thị trường"
                    className="w-full h-[400px] object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Hệ thống giám sát và phân tích dữ liệu vi phạm trên thị trường.
                  </p>
                </div>

                {/* Data Table */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Bảng cảnh báo & Thu hồi (Tháng 11/2025)</h2>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Tải CSV
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-accent/50">
                          <TableHead className="font-bold">Ngày</TableHead>
                          <TableHead className="font-bold">Địa bàn</TableHead>
                          <TableHead className="font-bold">Nhóm hàng</TableHead>
                          <TableHead className="font-bold">Hành vi</TableHead>
                          <TableHead className="font-bold">Kết quả</TableHead>
                          <TableHead className="font-bold">Nguồn</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inspectionResults.map((result, index) => (
                          <TableRow key={index} className="hover:bg-accent/5">
                            <TableCell className="whitespace-nowrap">{result.date}</TableCell>
                            <TableCell>{result.location}</TableCell>
                            <TableCell>{result.category}</TableCell>
                            <TableCell className="max-w-xs">{result.violation}</TableCell>
                            <TableCell className="max-w-xs">{result.result}</TableCell>
                            <TableCell className="whitespace-nowrap">{result.source}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Số liệu dựa trên nguồn công bố chính thức; có thể được hiệu chỉnh khi có cập nhật.
                  </p>
                </div>

                {/* Risk Map */}
                <div className="bg-accent/5 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Bản đồ rủi ro theo địa bàn</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-background rounded border">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Hà Nội</h4>
                        <span className="text-sm px-2 py-1 bg-destructive/10 text-destructive rounded">Rủi ro cao</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Mỹ phẩm, linh kiện điện tử: 23 vụ vi phạm</p>
                    </div>
                    <div className="p-4 bg-background rounded border">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">TP. Hồ Chí Minh</h4>
                        <span className="text-sm px-2 py-1 bg-destructive/10 text-destructive rounded">Rủi ro cao</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Hàng tiêu dùng, TMĐT: 31 vụ vi phạm</p>
                    </div>
                    <div className="p-4 bg-background rounded border">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Hải Phòng</h4>
                        <span className="text-sm px-2 py-1 bg-orange-500/10 text-orange-600 rounded">Rủi ro trung bình</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Hàng điện tử nhập khẩu: 12 vụ vi phạm</p>
                    </div>
                  </div>
                </div>

                {/* Data Usage Guide */}
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Hướng dẫn sử dụng dữ liệu</h2>
                  <div className="space-y-3 text-sm">
                    <p><strong>Phương pháp:</strong> Dữ liệu được tổng hợp từ các nguồn chính thức của Ban Chỉ đạo 389, Cục Quản lý thị trường, và các cơ quan chức năng địa phương.</p>
                    <p><strong>Điều kiện trích dẫn:</strong> Khi sử dụng dữ liệu, vui lòng ghi rõ nguồn "Qsac.vn - Chỉ đạo 389" và thời điểm trích xuất.</p>
                    <p><strong>Cập nhật:</strong> Dữ liệu được cập nhật hàng tuần. Cập nhật lần cuối: 15/11/2025</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <AdBanner type="sidebar-rect" variant={1} />
            
            {/* Quick Links */}
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
              <div className="space-y-2">
                <Link to="/tieu-chuan-phap-ly" className="block p-3 rounded hover:bg-accent transition-colors">
                  Tiêu chuẩn & Pháp lý
                </Link>
                <Link to="/thu-vien" className="block p-3 rounded hover:bg-accent transition-colors">
                  Thư viện tài liệu
                </Link>
                <Link to="/du-lieu" className="block p-3 rounded hover:bg-accent transition-colors">
                  Trung tâm dữ liệu
                </Link>
              </div>
            </div>

            {/* Inspection Results Widget */}
            <div className="border rounded-lg p-6 bg-accent/5">
              <h3 className="font-bold text-lg mb-4">Kết quả kiểm tra - Xử lý</h3>
              <div className="space-y-3">
                {inspectionResults.slice(0, 5).map((result, index) => (
                  <div key={index} className="text-sm pb-3 border-b last:border-0">
                    <p className="font-medium mb-1">{result.location} - {result.category}</p>
                    <p className="text-xs text-muted-foreground">{result.date}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Xem toàn bộ
              </Button>
            </div>

            <AdBanner type="sidebar-rect" variant={2} />
          </aside>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <AdBanner type="leaderboard-top" variant={2} />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Directive389;
