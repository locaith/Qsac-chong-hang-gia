import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/standards-legal-hero.jpg";
import tcvnImage from "@/assets/legal-standards-tcvn.jpg";
import labelingImage from "@/assets/legal-labeling.jpg";
import complianceImage from "@/assets/legal-compliance.jpg";
import ecommerceImage from "@/assets/legal-ecommerce.jpg";
import inspectionImage from "@/assets/legal-inspection.jpg";
import faqImage from "@/assets/legal-faq.jpg";
import checklistImage from "@/assets/legal-checklist.jpg";

interface LegalArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  documentType: string;
  status: string;
  date: string;
  image: string;
  source?: string;
}

const StandardsLegal = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedDocType, setSelectedDocType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  const articles: LegalArticle[] = [
    {
      id: "1",
      title: "Ghi nhãn hàng hóa: 8 thành phần bắt buộc và cách trình bày đúng",
      excerpt: "Bài viết diễn giải các thành phần bắt buộc trên nhãn hàng hóa, cách sắp xếp thông tin rõ ràng để doanh nghiệp áp dụng thống nhất.",
      category: "Nhãn - Tem - TMĐT",
      documentType: "Hướng dẫn kỹ thuật",
      status: "Còn hiệu lực",
      date: "2 giờ trước",
      image: labelingImage,
      source: "Bộ Công Thương"
    },
    {
      id: "2",
      title: "Cập nhật văn bản về ghi nhãn hàng hóa theo nhóm thực phẩm đóng gói",
      excerpt: "Nghị định mới quy định chi tiết về yêu cầu ghi nhãn đối với thực phẩm đóng gói, có hiệu lực từ 01/01/2025.",
      category: "Tin chính sách",
      documentType: "Nghị định",
      status: "Còn hiệu lực",
      date: "4 giờ trước",
      image: labelingImage,
      source: "Chính phủ"
    },
    {
      id: "3",
      title: "Lộ trình áp dụng hệ thống quản lý chất lượng ISO trong SME",
      excerpt: "Hướng dẫn chi tiết các bước triển khai ISO 9001 cho doanh nghiệp vừa và nhỏ, từ chuẩn bị hồ sơ đến chứng nhận.",
      category: "Tiêu chuẩn TCVN/ISO",
      documentType: "Tiêu chuẩn",
      status: "Còn hiệu lực",
      date: "5 giờ trước",
      image: tcvnImage,
      source: "Tổng cục TCĐLCL"
    },
    {
      id: "4",
      title: "Yêu cầu hiển thị thông tin người bán trên sàn TMĐT: những điểm bắt buộc",
      excerpt: "Quy định mới về nghĩa vụ công khai thông tin của người bán trên sàn thương mại điện tử, tránh vi phạm pháp luật.",
      category: "Nhãn - Tem - TMĐT",
      documentType: "Quy chuẩn",
      status: "Còn hiệu lực",
      date: "8 giờ trước",
      image: ecommerceImage,
      source: "Bộ Công Thương"
    },
    {
      id: "5",
      title: "Quy định về thu hồi tự nguyện và nghĩa vụ thông báo người tiêu dùng",
      excerpt: "Hướng dẫn quy trình thu hồi sản phẩm có vấn đề về chất lượng, cách thông báo công khai và xử lý khiếu nại.",
      category: "Thực thi & Chế tài",
      documentType: "Nghị định",
      status: "Còn hiệu lực",
      date: "10 giờ trước",
      image: inspectionImage,
      source: "Bộ Công Thương"
    },
    {
      id: "6",
      title: "Tuyên bố chất lượng và trách nhiệm pháp lý trong tài liệu quảng cáo",
      excerpt: "Phân tích chi tiết trách nhiệm pháp lý khi tuyên bố công dụng sản phẩm trong quảng cáo và cách chứng minh.",
      category: "Giải thích – Diễn giải",
      documentType: "Hướng dẫn kỹ thuật",
      status: "Còn hiệu lực",
      date: "1 ngày trước",
      image: complianceImage,
      source: "Cục QLCL"
    },
    {
      id: "7",
      title: "Quản lý lô hàng nhập khẩu: hồ sơ, kiểm tra nhà nước, lưu chứng từ",
      excerpt: "Quy trình chi tiết về việc chuẩn bị hồ sơ nhập khẩu, kiểm tra hải quan và lưu trữ chứng từ theo quy định.",
      category: "Giải thích – Diễn giải",
      documentType: "Hướng dẫn kỹ thuật",
      status: "Còn hiệu lực",
      date: "1 ngày trước",
      image: inspectionImage,
      source: "Tổng cục Hải quan"
    },
    {
      id: "8",
      title: "Năm lỗi ghi nhãn phổ biến dẫn tới xử phạt; cách phòng tránh",
      excerpt: "Tổng hợp các sai sót thường gặp về ghi nhãn từ thực tế xử phạt, kèm giải pháp khắc phục cụ thể.",
      category: "Thực thi & Chế tài",
      documentType: "Hướng dẫn kỹ thuật",
      status: "Còn hiệu lực",
      date: "2 ngày trước",
      image: labelingImage,
      source: "Thanh tra Chất lượng"
    },
    {
      id: "9",
      title: "Hỏi đáp: Khi nào bắt buộc có nhãn phụ tiếng Việt?",
      excerpt: "Giải đáp chi tiết về trường hợp bắt buộc dán nhãn phụ tiếng Việt đối với hàng nhập khẩu.",
      category: "Hỏi đáp pháp lý",
      documentType: "FAQ",
      status: "Còn hiệu lực",
      date: "3 ngày trước",
      image: faqImage,
      source: "QSAC"
    },
    {
      id: "10",
      title: "Checklist ghi nhãn trước khi xuất xưởng - Tải miễn phí",
      excerpt: "Danh sách kiểm tra đầy đủ các yếu tố cần có trên nhãn sản phẩm trước khi xuất xưởng, có thể tải về CSV/PDF.",
      category: "Mẫu biểu – Checklist",
      documentType: "Checklist",
      status: "Mới cập nhật",
      date: "4 ngày trước",
      image: checklistImage,
      source: "QSAC"
    }
  ];

  const popularArticles = [
    "Ghi nhãn bắt buộc: thành phần, xuất xứ, ngày sản xuất",
    "Tuyên bố chất lượng và trách nhiệm pháp lý trong quảng cáo",
    "Quản lý lô hàng nhập khẩu: hồ sơ và kiểm tra",
    "Hướng dẫn xây dựng Quy trình Thu hồi nội bộ",
    "Quản trị nhà cung cấp: hợp đồng, kiểm tra nguồn gốc",
    "Quản lý quảng cáo trực tuyến: các hành vi bị cấm",
    "So sánh hai chuẩn truy xuất nguồn gốc điển hình",
    "Tem truy xuất và nhãn phụ tiếng Việt: khác nhau ở đâu",
    "Hiển thị thông tin sản phẩm trên sàn TMĐT",
    "Hướng dẫn lập hồ sơ giải trình khi bị kiểm tra"
  ];

  const templates = [
    { name: "Quy trình thu hồi tự nguyện", desc: "Mẫu quy trình xử lý thu hồi sản phẩm", format: "DOC/PDF" },
    { name: "Checklist ghi nhãn xuất xưởng", desc: "Danh sách kiểm tra nhãn trước xuất hàng", format: "CSV" },
    { name: "Phiếu công bố thông tin sản phẩm", desc: "Biểu mẫu công bố nội bộ", format: "PDF" },
    { name: "Biên bản tiếp nhận khiếu nại", desc: "Mẫu xử lý khiếu nại về chất lượng", format: "DOC" },
    { name: "Nhật ký thay đổi nhãn", desc: "Theo dõi các phiên bản nhãn", format: "Excel" },
    { name: "Checklist trước niêm yết TMĐT", desc: "Kiểm tra thông tin trước khi đăng bán", format: "PDF" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Tiêu chuẩn và Pháp lý" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tiêu chuẩn & Pháp lý
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Diễn giải tiêu chuẩn – quy chuẩn – quy định liên quan tới chất lượng và phòng chống hàng giả theo cách dễ hiểu, có thể áp dụng ngay
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Ngành hàng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả ngành hàng</SelectItem>
                <SelectItem value="food">Thực phẩm</SelectItem>
                <SelectItem value="cosmetics">Mỹ phẩm</SelectItem>
                <SelectItem value="electronics">Điện tử</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDocType} onValueChange={setSelectedDocType}>
              <SelectTrigger>
                <SelectValue placeholder="Loại văn bản" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                <SelectItem value="standard">Tiêu chuẩn</SelectItem>
                <SelectItem value="decree">Nghị định</SelectItem>
                <SelectItem value="guideline">Hướng dẫn kỹ thuật</SelectItem>
                <SelectItem value="regulation">Quy chuẩn</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="active">Còn hiệu lực</SelectItem>
                <SelectItem value="draft">Dự thảo</SelectItem>
                <SelectItem value="expired">Hết hiệu lực</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="relevant">Liên quan</SelectItem>
                <SelectItem value="industry">Theo ngành</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {articles.map((article) => (
                <article key={article.id} className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-64 h-48 sm:h-auto flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <Badge variant="outline">{article.documentType}</Badge>
                        <Badge 
                          variant={article.status === "Còn hiệu lực" ? "default" : "secondary"}
                          className={article.status === "Còn hiệu lực" ? "bg-success" : ""}
                        >
                          {article.status}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        {article.source && (
                          <>
                            <span>•</span>
                            <span>Nguồn: {article.source}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <Button variant="default" size="lg" className="rounded-full">
                BẤM ĐỂ XEM THÊM
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sidebar Ad */}
            <AdBanner type="sidebar-rect" variant={1} />
            
            {/* Popular Articles */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">
                ĐỌC NHIỀU
              </h3>
              <ol className="space-y-3">
                {popularArticles.map((title, index) => (
                  <li key={index} className="text-sm hover:text-primary cursor-pointer">
                    <span className="font-semibold text-primary mr-2">{index + 1}.</span>
                    {title}
                  </li>
                ))}
              </ol>
            </div>

            {/* Templates & Checklists */}
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-center justify-between mb-4 border-b pb-2">
                <h3 className="text-lg font-bold">
                  MẪU BIỂU & CHECKLIST MỚI
                </h3>
                <a href="#" className="text-sm text-primary hover:underline">
                  Được Tải Toàn bộ
                </a>
              </div>
              <div className="space-y-4">
                {templates.map((template, index) => (
                  <div key={index} className="pb-3 border-b last:border-0">
                    <h4 className="font-semibold text-sm mb-1 hover:text-primary cursor-pointer">
                      {template.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {template.desc}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {template.format}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StandardsLegal;
