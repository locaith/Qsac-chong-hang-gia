import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { Target, Shield, Eye, TrendingUp, Users, Database, FileCheck, Newspaper, Calendar } from "lucide-react";
import aboutLeadership from "@/assets/about-leadership.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutInspection from "@/assets/about-inspection.jpg";
import aboutCooperation from "@/assets/about-cooperation.jpg";
import aboutTraining from "@/assets/about-training.jpg";
import aboutData from "@/assets/about-data.jpg";

const About = () => {
  const keyStrengths = [
    {
      icon: Users,
      title: "Chuyên gia đa lĩnh vực",
      description: "Chất lượng – tiêu chuẩn (TCVN/ISO), pháp chế thương mại, an toàn sản phẩm, điều tra dữ liệu thị trường, truyền thông công."
    },
    {
      icon: Database,
      title: "Năng lực dữ liệu & công nghệ",
      description: "Xây dựng Data Hub chuẩn hoá (CSV/JSON), tra cứu TraceID, công cụ kiểm tra đường link TMĐT, quy trình tiếp nhận – xác minh – đính chính."
    },
    {
      icon: Shield,
      title: "Kết nối hệ sinh thái",
      description: "Phối hợp thông tin với VATAP, Ban Chỉ đạo 389, hiệp hội ngành hàng, cơ quan tiêu chuẩn đo lường chất lượng, sàn TMĐT và báo chí."
    },
    {
      icon: FileCheck,
      title: "Quy trình biên tập chuẩn",
      description: "Mọi tin/bài đều qua các bước xác minh nguồn – rà soát pháp lý – cập nhật phiên bản, công bố 'Cập nhật lần cuối'."
    }
  ];

  const methodology = [
    {
      title: "Thu thập & xác minh",
      description: "Tiếp nhận dữ liệu từ cơ quan, hiệp hội, doanh nghiệp; rà soát chéo tối thiểu 02 nguồn độc lập; lưu dấu vết chỉnh sửa."
    },
    {
      title: "Chuẩn hoá & công bố",
      description: "Hợp nhất trường dữ liệu, gắn nhãn trạng thái (Thu hồi/Khuyến cáo/Đang xác minh/Đã đính chính), công bố theo định dạng mở."
    },
    {
      title: "Hướng dẫn áp dụng",
      description: "Bài Giải thích – Diễn giải, Checklist/SOP theo ngành/vai trò; mục 'Làm gì ngay?' cho doanh nghiệp và người tiêu dùng."
    },
    {
      title: "Tương tác & đính chính",
      description: "Biểu mẫu Báo cáo vi phạm và Đề nghị đính chính; thời gian phản hồi mục tiêu ≤ 72 giờ làm việc."
    },
    {
      title: "Giám sát liên tục",
      description: "Bản tin tuần/tháng; dashboard dữ liệu; tái đánh giá hồ sơ doanh nghiệp tuân thủ."
    }
  ];

  const directives = [
    {
      title: "Tăng cường kiểm tra nguồn gốc hàng hoá trên kênh thương mại điện tử",
      summary: "Yêu cầu công bố thông tin bắt buộc.",
      source: "VATAP",
      date: "15/10/2025"
    },
    {
      title: "Tổng hợp chuyên đề chống buôn lậu dịp cao điểm cuối năm",
      summary: "Nhấn mạnh vai trò phối hợp giữa lực lượng chức năng và hiệp hội.",
      source: "Ban Chỉ đạo 389",
      date: "12/10/2025"
    },
    {
      title: "Hướng dẫn rà soát và cập nhật nhãn phụ cho sản phẩm TPCN",
      summary: "Đảm bảo tuân thủ quy định ghi nhãn theo Thông tư mới.",
      source: "VATAP",
      date: "08/10/2025"
    },
    {
      title: "Tăng cường giám sát mỹ phẩm nhập khẩu không rõ nguồn gốc",
      summary: "Kiểm tra hồ sơ công bố và tem truy xuất tại các điểm bán lẻ.",
      source: "Ban Chỉ đạo 389",
      date: "05/10/2025"
    }
  ];

  const marketUpdates = [
    {
      category: "TPCN",
      update: "Nhóm TPCN ghi nhận đợt tăng khuyến mãi; khiếu nại về công dụng tăng theo mùa. Khuyến nghị: kiểm soát tuyên bố và nhãn phụ."
    },
    {
      category: "Linh kiện xe máy",
      update: "Nguy cơ trộn lô tại đại lý cấp 2; cần dán tem theo lô và đối soát hoá đơn điện tử."
    },
    {
      category: "Mỹ phẩm",
      update: "Gia tăng sản phẩm không đăng ký qua kênh livestream; cần rà soát công bố mỹ phẩm và nhãn tiếng Việt."
    },
    {
      category: "Thực phẩm chế biến",
      update: "Phát hiện tình trạng ghi nhãn sai thông tin dinh dưỡng; khuyến nghị kiểm tra lại hồ sơ công bố sản phẩm."
    },
    {
      category: "TMĐT",
      update: "Số vụ khiếu nại về hàng giả trên sàn TMĐT tăng 15% so với tháng trước; cần tăng cường xác minh nguồn gốc."
    }
  ];

  const inspectionResults = [
    {
      date: "22/10/2025",
      location: "Hà Nội",
      category: "Mỹ phẩm",
      violation: "Ghi nhãn sai, không đủ hồ sơ",
      result: "Thu hồi lô – đính chính",
      source: "Thanh tra Bộ Y tế"
    },
    {
      date: "20/10/2025",
      location: "TP.HCM",
      category: "Linh kiện",
      violation: "Trộn lô, thay bao bì",
      result: "Tạm giữ, xử phạt hành chính",
      source: "Đội QLTT Quận 1"
    },
    {
      date: "18/10/2025",
      location: "Đà Nẵng",
      category: "TPCN",
      violation: "Quảng cáo sai sự thật",
      result: "Phạt tiền, rút giấy phép quảng cáo",
      source: "Chi cục QLTT"
    },
    {
      date: "15/10/2025",
      location: "Hải Phòng",
      category: "Thực phẩm",
      violation: "Hết hạn sử dụng",
      result: "Tiêu huỷ toàn bộ lô hàng",
      source: "Ban QLAT TP"
    }
  ];

  const videos = [
    {
      title: "Hướng dẫn tra cứu TraceID - Cách kiểm tra nguồn gốc sản phẩm",
      duration: "5:32",
      date: "25/10/2025",
      platform: "YouTube",
      embedId: "dQw4w9WgXcQ"
    },
    {
      title: "Quy trình xử lý hàng giả - Hội thảo chuyên đề",
      duration: "12:45",
      date: "20/10/2025",
      platform: "Facebook",
      embedId: "sample"
    },
    {
      title: "Tiêu chuẩn ghi nhãn mỹ phẩm 2025 - Những điều cần biết",
      duration: "8:20",
      date: "15/10/2025",
      platform: "YouTube",
      embedId: "sample2"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Top Ad Banner */}
        <div className="mb-8">
          <AdBanner type="leaderboard-top" variant={1} />
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <img 
              src={aboutLeadership} 
              alt="Lãnh đạo Trung tâm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Badge className="mb-4 bg-primary text-primary-foreground">Giới thiệu</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Trung tâm Giám sát Chất lượng<br />& Phòng chống Hàng giả
              </h1>
              <p className="text-xl text-white/90 max-w-4xl">
                Chính xác – Kịp thời – Minh bạch – Hành động được
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Leadership Message */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Thông điệp của Lãnh đạo Trung tâm</h2>
                  <div className="h-1 w-20 bg-primary rounded" />
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Trung tâm Giám sát Chất lượng & Phòng chống Hàng giả (Qsac.vn) là cổng thông tin chuyên sâu, công khai và minh bạch về chất lượng sản phẩm – hàng hoá trên thị trường Việt Nam. Chúng tôi thu thập, xác minh và chuẩn hoá dữ liệu cảnh báo – thu hồi; diễn giải tiêu chuẩn – pháp lý; hướng dẫn thực hành truy xuất và chống hàng giả theo cách dễ áp dụng."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  "Trung tâm phối hợp thường xuyên với hiệp hội, lực lượng chức năng và cộng đồng doanh nghiệp nhằm bảo vệ người tiêu dùng, nâng cao năng lực tuân thủ và xây dựng niềm tin thị trường."
                </p>
              </div>
            </Card>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Sứ mệnh
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bảo vệ người tiêu dùng, hỗ trợ doanh nghiệp tuân thủ tiêu chuẩn – pháp luật, tăng cường niềm tin thị trường thông qua dữ liệu, cảnh báo sớm và hướng dẫn thực hành.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-secondary" />
                  Tầm nhìn
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trở thành cổng tham chiếu quốc gia đáng tin cậy về chất lượng – truy xuất – phòng chống hàng giả với hệ thống dữ liệu mở, bản tin chuyên sâu và mạng lưới cộng tác viên trên toàn quốc.
                </p>
              </Card>
            </div>

            {/* Core Functions */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <FileCheck className="h-6 w-6 text-secondary-foreground" />
                </div>
                Chức năng – Nhiệm vụ trọng tâm
              </h2>
              <div className="grid gap-4">
                <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                  <p className="text-muted-foreground">Tiếp nhận, xác minh và công bố cảnh báo – thu hồi.</p>
                </div>
                <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                  <p className="text-muted-foreground">Xây dựng và vận hành Trung tâm dữ liệu về chất lượng và phòng chống hàng giả.</p>
                </div>
                <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                  <p className="text-muted-foreground">Biên tập Tiêu chuẩn & Pháp lý, Phân tích & Hồ sơ, Công nghệ & Giải pháp cho cộng đồng doanh nghiệp.</p>
                </div>
                <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                  <p className="text-muted-foreground">Phối hợp thông tin với VATAP, Ban Chỉ đạo 389, hiệp hội ngành, cơ quan chức năng.</p>
                </div>
                <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">5</div>
                  <p className="text-muted-foreground">Tổ chức đào tạo – truyền thông – hội thảo, xuất bản SOP – checklist – mẫu biểu.</p>
                </div>
              </div>
            </Card>

            {/* Inline Ad */}
            <AdBanner type="inline" variant={1} className="my-8" />

            {/* Key Strengths */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Điểm mạnh đội ngũ
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {keyStrengths.map((strength, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <strength.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{strength.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Cách làm (Phương pháp)</h2>
              <div className="space-y-4">
                {methodology.map((method, index) => (
                  <div key={index} className="flex gap-4 p-5 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-primary">{method.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img src={aboutInspection} alt="Kiểm tra chất lượng" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Kiểm tra chất lượng hiện trường</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img src={aboutTraining} alt="Đào tạo nghiệp vụ" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Đào tạo truy xuất nguồn gốc</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img src={aboutCooperation} alt="Hợp tác liên ngành" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Hội thảo phối hợp liên ngành</p>
                </div>
              </div>
            </div>

            {/* Directives Section */}
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Newspaper className="h-6 w-6 text-primary" />
                  Điểm tin chỉ đạo tuần
                </h2>
                <Badge variant="outline">VATAP & Ban Chỉ đạo 389</Badge>
              </div>
              <div className="space-y-4">
                {directives.map((directive, index) => (
                  <div key={index} className="p-5 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/5 transition-all">
                    <h3 className="font-bold mb-2 text-primary hover:underline cursor-pointer">
                      {directive.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{directive.summary}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Nguồn: {directive.source}</span>
                      <span>•</span>
                      <span>Ngày: {directive.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6">
                Xem toàn bộ văn bản chỉ đạo
              </Button>
            </Card>

            {/* Market Updates */}
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Điểm tin thị trường</h2>
                <Badge>Diễn biến nổi bật theo ngành</Badge>
              </div>
              <div className="space-y-3">
                {marketUpdates.map((update, index) => (
                  <div key={index} className="p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="flex-shrink-0">{update.category}</Badge>
                      <p className="text-sm text-muted-foreground">{update.update}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="w-full mt-4">
                Xem báo cáo dữ liệu tháng →
              </Button>
            </Card>

            {/* Inspection Results */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Kết quả kiểm tra – xử lý hàng giả</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold text-sm">Ngày</th>
                      <th className="text-left p-3 font-semibold text-sm">Địa bàn</th>
                      <th className="text-left p-3 font-semibold text-sm">Nhóm hàng</th>
                      <th className="text-left p-3 font-semibold text-sm">Hành vi</th>
                      <th className="text-left p-3 font-semibold text-sm">Kết quả</th>
                      <th className="text-left p-3 font-semibold text-sm">Nguồn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inspectionResults.map((result, index) => (
                      <tr key={index} className="border-b border-border hover:bg-secondary/5 transition-colors">
                        <td className="p-3 text-sm">{result.date}</td>
                        <td className="p-3 text-sm">{result.location}</td>
                        <td className="p-3 text-sm">
                          <Badge variant="secondary">{result.category}</Badge>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">{result.violation}</td>
                        <td className="p-3 text-sm font-medium">{result.result}</td>
                        <td className="p-3 text-sm text-muted-foreground">{result.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button variant="outline" className="w-full mt-6">
                Xem toàn bộ kết quả
              </Button>
            </Card>

            {/* Videos Section */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Video chính thống</h2>
              <div className="space-y-6">
                {videos.map((video, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-32 h-20 bg-secondary/20 rounded flex items-center justify-center">
                        <Calendar className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2 hover:text-primary cursor-pointer">{video.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <Badge variant="secondary">{video.platform}</Badge>
                          <span>{video.duration}</span>
                          <span>•</span>
                          <span>{video.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Đăng ký nhận Bản tin</h2>
                <p className="text-muted-foreground mb-6">
                  "Chống hàng giả & Giám sát chất lượng" - Bản tin định kỳ tổng hợp chỉ đạo, thị trường, dữ liệu và hướng dẫn thực hành.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Input placeholder="Họ tên *" />
                  <Input placeholder="Email *" type="email" />
                  <Input placeholder="Đơn vị" />
                  <Input placeholder="Lĩnh vực quan tâm" />
                </div>
                <Button className="w-full md:w-auto px-8">Đăng ký nhận bản tin</Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Cập nhật lần cuối: 25/10/2025
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sidebar Ad */}
            <AdBanner type="sidebar-rect" variant={1} />

            {/* Quick Links */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Liên kết nhanh</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Tra cứu TraceID
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Báo cáo vi phạm
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Đề nghị đính chính
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Tải tài liệu SOP
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Đăng ký sự kiện
                </Button>
              </div>
            </Card>

            {/* Cooperation Partners */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Hệ thống liên kết</h3>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">VATAP</h4>
                  <p className="text-xs text-muted-foreground">
                    Hội Chống hàng giả & Bảo vệ thương hiệu Việt Nam
                  </p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Ban Chỉ đạo 389</h4>
                  <p className="text-xs text-muted-foreground">
                    Chống buôn lậu, gian lận thương mại, hàng giả
                  </p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Hiệp hội ngành hàng</h4>
                  <p className="text-xs text-muted-foreground">
                    Cung cấp thông tin kiểm tra định kỳ
                  </p>
                </div>
              </div>
            </Card>

            {/* Data Hub Banner */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10">
              <img src={aboutData} alt="Data Hub" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="font-bold mb-2">Trung tâm Dữ liệu</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Truy cập dữ liệu mở về cảnh báo, thu hồi và tiêu chuẩn
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Khám phá ngay
              </Button>
            </Card>

            {/* Additional Sidebar Ad */}
            <AdBanner type="sidebar-rect" variant={2} />
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="mt-12">
          <AdBanner type="bottom" variant={2} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
