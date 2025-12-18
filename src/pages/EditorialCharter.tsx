import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Shield, CheckCircle, AlertCircle, Users, Database, BookOpen, Scale } from "lucide-react";
import editorialLegal from "@/assets/editorial-legal.jpg";
import editorialStandards from "@/assets/editorial-standards.jpg";
import editorialTeam from "@/assets/editorial-team.jpg";
import editorialWorkflow from "@/assets/editorial-workflow.jpg";
import editorialVerification from "@/assets/editorial-verification.jpg";
import editorialQuality from "@/assets/editorial-quality.jpg";

const EditorialCharter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Quy định chính thức</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Quy chế biên tập
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Chính xác – Kịp thời – Minh bạch – Hành động được
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4" />
              <span>Cập nhật lần cuối: 29/10/2025</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AdBanner type="leaderboard-top" variant={1} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Section I: Legal Basis */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">I. Căn cứ pháp lý – Phạm vi áp dụng</CardTitle>
                    <CardDescription>Khung tham chiếu khi biên tập nội dung</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src={editorialLegal} 
                    alt="Căn cứ pháp lý và quy định" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    Hệ thống văn bản pháp lý làm nền tảng cho hoạt động biên tập. Nguồn: Unsplash, 29/10/2025
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    1. Căn cứ pháp lý chủ đạo
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Luật Báo chí năm 2016</strong> – quy định nguyên tắc thông tin công khai, minh bạch; quyền phản hồi, cải chính</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Luật Tiếp cận Thông tin năm 2016</strong> – quy định về cung cấp, trích dẫn, công bố thông tin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Luật An ninh mạng năm 2018</strong> – bảo đảm an ninh thông tin trên môi trường số</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Nghị định về quản lý, cung cấp, sử dụng dịch vụ Internet</strong> & thông tin trên mạng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Nghị định 13/2023/NĐ-CP</strong> về bảo vệ dữ liệu cá nhân – nguyên tắc thu thập, xử lý, công bố</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Luật Bảo vệ quyền lợi người tiêu dùng</strong> (có hiệu lực từ 2024) – nghĩa vụ minh bạch thông tin sản phẩm, dịch vụ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Luật Sở hữu trí tuệ</strong> (sửa đổi) – bản quyền nội dung, hình ảnh, trích dẫn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Các quy định chuyên ngành liên quan chống buôn lậu, gian lận thương mại, hàng giả, chỉ đạo/khuyến nghị của <strong>VATAP</strong> và <strong>Ban Chỉ đạo 389</strong></span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">2. Phạm vi áp dụng</h3>
                  <p className="text-muted-foreground mb-3">
                    Quy chế này áp dụng cho toàn bộ nội dung đăng tải trên QSAC.vn và các kênh số trực thuộc (bài viết, dữ liệu mở, video, đồ họa chữ, biểu mẫu điện tử), bao gồm:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Tin & Cảnh báo", "Tiêu chuẩn & Pháp lý", "Phân tích & Hồ sơ", "Công nghệ & Giải pháp", "Doanh nghiệp tuân thủ", "Sự kiện", "Thư viện", "Dữ liệu", "Video"].map((item) => (
                      <Badge key={item} variant="outline" className="justify-center py-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section II: Editorial Standards */}
            <Card className="border-secondary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">II. Tôn chỉ – Chuẩn mực biên tập</CardTitle>
                    <CardDescription>Nguyên tắc cốt lõi trong mọi hoạt động biên tập</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src={editorialStandards} 
                    alt="Chuẩn mực biên tập chuyên nghiệp" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    Tuân thủ chuẩn mực nghiệp vụ cao nhất trong biên tập nội dung. Nguồn: Unsplash, 29/10/2025
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">Chính xác – Kịp thời</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Thông tin được xác minh kỹ lưỡng và cập nhật nhanh chóng
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-secondary/5 border-secondary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">Minh bạch – Hành động được</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Công khai nguồn tin và cung cấp hướng dẫn thực tế
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Trung lập – Không thương mại hóa</p>
                      <p className="text-sm text-muted-foreground">
                        Tách bạch rõ ràng giữa nội dung biên tập và nội dung dịch vụ, tài trợ, quảng bá
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Dựa trên tài liệu gốc</p>
                      <p className="text-sm text-muted-foreground">
                        Văn bản chính thức, công văn, tiêu chuẩn, thông cáo được trích dẫn đầy đủ, ghi ngày trích xuất
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Tôn trọng quyền cá nhân</p>
                      <p className="text-sm text-muted-foreground">
                        Bảo vệ quyền riêng tư, bí mật kinh doanh, dữ liệu cá nhân theo quy định
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Không quy kết khi chưa đủ chứng cứ</p>
                      <p className="text-sm text-muted-foreground">
                        Nội dung đang thẩm tra phải gắn trạng thái "Đang xác minh"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AdBanner type="inline" variant={1} className="my-8" />

            {/* Section III: Content Classification */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">III. Phân loại nội dung & tiêu chí tối thiểu</CardTitle>
                    <CardDescription>Chuẩn hóa theo từng loại nội dung</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">1. Tin & Cảnh báo / Thu hồi</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Tối thiểu gồm: Ngày công bố; Sản phẩm – nhãn hiệu; Mã lô (nếu có); Nhóm rủi ro – mức rủi ro; Trạng thái (Thu hồi/Khuyến cáo/Đang xác minh/Đã đính chính); Cơ quan phát hành; Tài liệu gốc (liên kết chữ); Khuyến nghị hành động cho DN/NTD.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">2. Tiêu chuẩn & Pháp lý</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Trình bày loại văn bản, phạm vi áp dụng, tình trạng hiệu lực, ngày hiệu lực, cơ quan ban hành, điểm mới/chuyển tiếp; có box "Làm gì ngay?".
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">3. Phân tích & Hồ sơ</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Bắt buộc có dòng thời gian (timeline) bằng chữ; bảng dữ liệu có thể tải; tách rõ bằng chứng – phân tích – khuyến nghị.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">4. Công nghệ & Giải pháp</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Nêu mục đích áp dụng; mức sẵn sàng (thí điểm / triển khai rộng); rủi ro – giới hạn; không PR thương mại; có so sánh tiêu chí nếu giới thiệu giải pháp.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">5. Doanh nghiệp tuân thủ</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Hồ sơ gồm: tiêu chuẩn áp dụng – phạm vi – thời hạn hiệu lực; chỉ số đo lường; bài học áp dụng rộng; trạng thái hồ sơ (Đạt/Đang thẩm định/Đã hết hiệu lực/Tạm dừng).
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">6. Sự kiện – Video – Thư viện – Dữ liệu</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Theo khung đã công bố trên QSAC (tiêu đề, sapô, tóm tắt nhanh, tệp tải, nhật ký phiên bản, nguồn).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section IV: Workflow */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">IV. Quy trình tác nghiệp & kiểm soát chất lượng</CardTitle>
                    <CardDescription>6 bước đảm bảo chất lượng nội dung</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src={editorialWorkflow} 
                    alt="Quy trình biên tập chuyên nghiệp" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    Quy trình làm việc đồng bộ với các bước kiểm soát chặt chẽ. Nguồn: Unsplash, 29/10/2025
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: "Bước 1",
                      title: "Tiếp nhận đề tài/nguồn tin",
                      content: "Ghi nhận đầu mối – thời điểm – loại nguồn (cơ quan, hiệp hội, DN, cộng tác viên). Phân loại Tin chính sách / Cảnh báo / Phân tích / Dữ liệu / Video / Thư viện."
                    },
                    {
                      step: "Bước 2",
                      title: "Xác minh & đối chiếu",
                      content: "Tối thiểu 02 nguồn độc lập đối với thông tin ảnh hưởng rộng; bắt buộc tài liệu gốc nếu nêu tên tổ chức/cá nhân/sản phẩm. Kiểm tra tình trạng hiệu lực của văn bản/tiêu chuẩn."
                    },
                    {
                      step: "Bước 3",
                      title: "Biên tập & chuẩn hóa dữ liệu",
                      content: "Viết theo tam giác ngược; sapô 40–60 từ; hộp dữ liệu chuẩn; \"Cập nhật lần cuối: ...\". Chuẩn hóa bảng dữ liệu theo từ điển dữ liệu QSAC (CSV/JSON)."
                    },
                    {
                      step: "Bước 4",
                      title: "Rà soát pháp chế",
                      content: "Đối chiếu căn cứ pháp lý; loại bỏ ngôn từ suy đoán; đánh giá rủi ro pháp lý, dữ liệu cá nhân, bí mật kinh doanh."
                    },
                    {
                      step: "Bước 5",
                      title: "Phê duyệt xuất bản",
                      content: "RACI: Chủ biên (owner) – Pháp chế (review) – Dữ liệu/Kỹ thuật (check schema) – Tổng biên tập (approve). Gắn trạng thái: Đã xuất bản / Đang xác minh / Đã đính chính / Đã ẩn theo yêu cầu chính đáng."
                    },
                    {
                      step: "Bước 6",
                      title: "Theo dõi & đính chính",
                      content: "Mở kênh phản hồi; thời gian mục tiêu phản hồi ≤ 72 giờ làm việc; công bố công khai biên bản đính chính."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-accent/30 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Section V: Sources & Citations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">V. Nguồn tin – Trích dẫn – Bản quyền hình ảnh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src={editorialVerification} 
                    alt="Xác minh nguồn tin chính xác" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    Kiểm chứng và xác minh nguồn tin từ nhiều kênh độc lập. Nguồn: Unsplash, 29/10/2025
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Thứ bậc nguồn tin</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Văn bản pháp quy, thông cáo chính thức</li>
                    <li>Cơ sở dữ liệu nhà nước/hiệp hội (VATAP, 389)</li>
                    <li>Kết quả kiểm tra/thu hồi, tiêu chuẩn (TCVN/ISO)</li>
                    <li>Báo cáo kiểm định, tài liệu doanh nghiệp</li>
                  </ol>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Nguyên tắc trích dẫn</h4>
                  <p className="text-muted-foreground mb-2">
                    Ghi đầy đủ tên văn bản/số/ký hiệu/ngày/cơ quan; đường dẫn tới nguồn (nếu công khai).
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Hình ảnh – tư liệu trên mạng</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Chỉ dùng ảnh cho phép sử dụng/nhúng; ưu tiên nguồn chính thống/cơ quan/hiệp hội</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Ghi nguồn, tác giả, ngày trích dẫn dưới ảnh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Không nhận diện cá nhân khi không có căn cứ/cho phép; làm mờ thông tin nhạy cảm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Mỗi ảnh kèm chú thích 1–2 câu liên quan nội dung; tránh suy đoán</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <AdBanner type="inline" variant={2} className="my-8" />

            {/* Section VI: Corrections & Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">VI. Chỉnh sửa – Cải chính – Quyền phản hồi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src={editorialQuality} 
                    alt="Kiểm soát chất lượng và đính chính" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    Cam kết minh bạch và quyền phản hồi của các bên liên quan. Nguồn: Unsplash, 29/10/2025
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-accent/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Chỉnh sửa kỹ thuật</h4>
                      <p className="text-sm text-muted-foreground">
                        Chính tả, trình bày, siêu dữ liệu — không thay đổi nội dung cốt lõi
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Đính chính nội dung</h4>
                      <p className="text-sm text-muted-foreground">
                        Khi có tài liệu chính thức mới; thêm mục "Lịch sử cập nhật"
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Quyền phản hồi</h4>
                      <p className="text-sm text-muted-foreground">
                        Xử lý trong ≤ 72 giờ làm việc với tài liệu chứng minh
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Gỡ/ẩn theo yêu cầu chính đáng
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Khi có quyết định cơ quan có thẩm quyền hoặc dấu hiệu xâm phạm quyền riêng tư, bí mật kinh doanh; QSAC lập biên bản gỡ/ẩn và cập nhật dấu vết.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section VII: Cooperation with VATAP & 389 */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">VII. Phối hợp thông tin với VATAP & Ban Chỉ đạo 389</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src={editorialTeam} 
                    alt="Hợp tác liên ngành phòng chống hàng giả" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    Phối hợp chặt chẽ với các cơ quan chức năng và hiệp hội. Nguồn: Unsplash, 29/10/2025
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Điểm tin chỉ đạo</h4>
                    <p className="text-sm text-muted-foreground">
                      Biên tập trích yếu chỉ đạo/khuyến nghị; ghi nguồn & ngày; liên kết tới văn bản gốc.
                    </p>
                  </div>

                  <div className="p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Kết quả kiểm tra – xử lý hàng giả</h4>
                    <p className="text-sm text-muted-foreground">
                      Đăng bảng tóm tắt (ngày – địa bàn – nhóm hàng – hành vi – kết quả xử lý – nguồn); không nêu chi tiết vượt quá công bố chính thức.
                    </p>
                  </div>

                  <div className="p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Điểm tin thị trường</h4>
                    <p className="text-sm text-muted-foreground">
                      Tổng hợp theo ngành/kênh (offline, TMĐT); nêu xu hướng – dấu hiệu rủi ro – khuyến nghị; liên kết Dữ liệu tháng.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Services Section */}
            <Card className="border-secondary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Database className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">XI. Khối tương tác – Dịch vụ số</CardTitle>
                    <CardDescription>Các biểu mẫu và dịch vụ trực tuyến</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-accent/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">1. Cổng tiếp nhận phản ánh</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Biểu mẫu điện tử với mã hồ sơ & theo dõi tiến độ
                      </p>
                      <Badge variant="outline">Phản hồi ≤ 72h</Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">2. Tố cáo hàng giả</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Biểu mẫu điện tử với bảo mật danh tính
                      </p>
                      <Badge variant="outline">Bảo mật thông tin</Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">3. Tra cứu chứng nhận</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Kiểm tra doanh nghiệp, sản phẩm tuân thủ
                      </p>
                      <Badge variant="outline">Công khai minh bạch</Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">4. Đăng ký thành viên</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Hội viên QSAC với quyền lợi đặc biệt
                      </p>
                      <Badge variant="outline">Tài liệu nâng cao</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Form */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Gửi phản hồi về Quy chế biên tập</CardTitle>
                <CardDescription>
                  Ý kiến của bạn giúp chúng tôi hoàn thiện quy trình biên tập
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên</Label>
                      <Input id="name" placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Tổ chức / Đơn vị</Label>
                    <Input id="organization" placeholder="Tên công ty hoặc tổ chức" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedback">Nội dung phản hồi</Label>
                    <Textarea 
                      id="feedback" 
                      placeholder="Chia sẻ ý kiến, đề xuất hoặc thắc mắc của bạn về quy chế biên tập..."
                      rows={5}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tôi đồng ý với điều khoản xử lý dữ liệu cá nhân
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Gửi phản hồi
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Implementation Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">XIV. Tổ chức thực hiện – Hiệu lực</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Quy chế này có hiệu lực kể từ ngày công bố trên QSAC.vn; được rà soát định kỳ ít nhất 06 tháng/lần hoặc khi có quy định mới.
                </p>
                
                <p className="text-muted-foreground">
                  Mọi thành viên tham gia biên tập – dữ liệu – kỹ thuật – truyền thông – sự kiện có trách nhiệm tuân thủ, ghi nhận nhật ký thay đổi khi cập nhật nội dung.
                </p>

                <p className="text-muted-foreground">
                  Trường hợp đặc thù, Tổng biên tập (hoặc người được ủy quyền) quyết định sau khi tham vấn pháp chế.
                </p>

                <div className="pt-4 mt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Cập nhật lần cuối: 29/10/2025</span>
                    <span>Phiên bản: 1.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-4 space-y-6">
              <AdBanner type="sidebar-rect" variant={2} />
              
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thao tác nhanh</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Tải PDF
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Gửi đính chính
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Database className="w-4 h-4 mr-2" />
                    Biểu mẫu điện tử
                  </Button>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mục lục</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm">
                    {[
                      "I. Căn cứ pháp lý",
                      "II. Tôn chỉ biên tập",
                      "III. Phân loại nội dung",
                      "IV. Quy trình tác nghiệp",
                      "V. Nguồn tin & Trích dẫn",
                      "VI. Chỉnh sửa & Phản hồi",
                      "VII. Phối hợp VATAP & 389",
                      "XI. Dịch vụ số",
                      "XIV. Tổ chức thực hiện"
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className="block text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Gửi câu hỏi về quy chế biên tập
                  </p>
                  <Button size="sm" className="w-full">
                    Liên hệ ngay
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <AdBanner type="bottom" variant={3} className="mt-8" />
      </div>

      <Footer />
    </div>
  );
};

export default EditorialCharter;
