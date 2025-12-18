import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Shield, Lock, FileText, Users, AlertCircle, Database } from "lucide-react";
import securityInfrastructure from "@/assets/security-infrastructure.jpg";
import securityLegalDocs from "@/assets/security-legal-docs.jpg";
import securityTeam from "@/assets/security-team.jpg";
import securityEncryption from "@/assets/security-encryption.jpg";
import securityPrivacy from "@/assets/security-privacy.jpg";
import securityIncident from "@/assets/security-incident.jpg";

const DataSecurity = () => {
  const [formData, setFormData] = useState({
    requestType: "",
    fullName: "",
    contact: "",
    scope: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data request submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={securityInfrastructure} 
            alt="Hệ thống bảo mật dữ liệu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Bảo mật dữ liệu</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Chính sách Bảo mật Dữ liệu
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Tổng hợp quy định, nguyên tắc và quy trình bảo vệ dữ liệu cá nhân tại QSAC.vn theo pháp luật Việt Nam
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Quick Navigation */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Nội dung chính</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <a href="#legal-basis" className="text-sm text-primary hover:underline">I. Căn cứ pháp lý</a>
              <a href="#data-collection" className="text-sm text-primary hover:underline">II. Thu thập dữ liệu</a>
              <a href="#processing" className="text-sm text-primary hover:underline">III. Mục đích xử lý</a>
              <a href="#principles" className="text-sm text-primary hover:underline">IV. Nguyên tắc</a>
              <a href="#rights" className="text-sm text-primary hover:underline">V. Quyền chủ thể</a>
              <a href="#consent" className="text-sm text-primary hover:underline">VI. Đồng ý</a>
              <a href="#disclosure" className="text-sm text-primary hover:underline">VII. Công bố</a>
              <a href="#storage" className="text-sm text-primary hover:underline">VIII. Lưu trữ</a>
              <a href="#sharing" className="text-sm text-primary hover:underline">IX. Chia sẻ</a>
              <a href="#security" className="text-sm text-primary hover:underline">X. An ninh</a>
              <a href="#incident" className="text-sm text-primary hover:underline">XI. Sự cố</a>
              <a href="#cookies" className="text-sm text-primary hover:underline">XII. Cookie</a>
              <a href="#children" className="text-sm text-primary hover:underline">XIII. Trẻ em</a>
              <a href="#contact" className="text-sm text-primary hover:underline">XIV. Liên hệ</a>
              <a href="#updates" className="text-sm text-primary hover:underline">XV. Cập nhật</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* I. Legal Basis */}
              <section id="legal-basis">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">I. Căn cứ pháp lý – Phạm vi áp dụng</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 mt-6">1. Căn cứ pháp lý chủ đạo</h3>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li>• Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân</li>
                      <li>• Luật An ninh mạng 2018; Luật An toàn thông tin mạng 2015</li>
                      <li>• Luật Tiếp cận thông tin 2016</li>
                      <li>• Luật Bảo vệ quyền lợi người tiêu dùng (sửa đổi, hiệu lực 2024)</li>
                      <li>• Luật Sở hữu trí tuệ (sửa đổi) về quyền tác giả, quyền liên quan</li>
                      <li>• Các nghị định về quản lý, cung cấp, sử dụng dịch vụ Internet và thông tin trên mạng</li>
                      <li>• Quy định chuyên ngành về chống buôn lậu, gian lận thương mại, hàng giả</li>
                    </ul>

                    <img 
                      src={securityLegalDocs} 
                      alt="Căn cứ pháp lý về bảo mật dữ liệu" 
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />

                    <h3 className="text-xl font-semibold mb-3 mt-6">2. Phạm vi áp dụng</h3>
                    <p className="text-muted-foreground mb-4">
                      Áp dụng cho mọi hoạt động thu thập – xử lý – lưu trữ – công bố – chia sẻ – xoá dữ liệu tại QSAC.vn và kênh số trực thuộc, 
                      bao gồm: biểu mẫu điện tử (phản ánh/tố cáo, đính chính), hồ sơ doanh nghiệp tuân thủ, dữ liệu mở (CSV/JSON), 
                      video/nhúng, bản tin, kết quả kiểm tra – xử lý, nhật ký kiểm chứng TraceID, thông tin đối tác – hội viên.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3. Vai trò pháp lý</h3>
                    <p className="text-muted-foreground">
                      QSAC là đơn vị quyết định mục đích & phương tiện xử lý (vai trò "bên xử lý có trách nhiệm"). 
                      Với dữ liệu do cơ quan/hiệp hội/đối tác cung cấp, QSAC xử lý theo uỷ quyền hoặc đồng kiểm soát, 
                      tuân thủ điều khoản, phạm vi và trách nhiệm riêng từng thỏa thuận.
                    </p>
                  </div>
                </div>
              </section>

              {/* II. Data Collection */}
              <section id="data-collection">
                <div className="flex items-start gap-4 mb-6">
                  <Database className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">II. Thu thập & loại dữ liệu</h2>
                    
                    <h3 className="text-xl font-semibold mb-3">1. Nhóm dữ liệu xử lý</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <strong className="text-foreground">a) Dữ liệu nhận diện cơ bản:</strong> họ tên, tổ chức, chức danh, liên hệ (email/điện thoại) khi gửi biểu mẫu.
                      </div>
                      <div>
                        <strong className="text-foreground">b) Dữ liệu vụ việc:</strong> mô tả hành vi nghi ngờ, địa điểm – thời gian, đường link sản phẩm, ảnh/video/bằng chứng do người gửi cung cấp.
                      </div>
                      <div>
                        <strong className="text-foreground">c) Dữ liệu vận hành:</strong> nhật ký truy cập, cookie cần thiết, thông số trình duyệt, địa chỉ IP (phục vụ an ninh hệ thống).
                      </div>
                      <div>
                        <strong className="text-foreground">d) Dữ liệu công bố công khai:</strong> trích yếu văn bản, cảnh báo – thu hồi, bảng kết quả kiểm tra – xử lý (không gắn định danh cá nhân trừ khi là thông tin đã công bố chính thức).
                      </div>
                      <div>
                        <strong className="text-foreground">e) Nhật ký kiểm chứng TraceID/tra cứu:</strong> thời điểm, kênh quét, kết quả (khớp/không khớp/đang cập nhật), vùng địa lý gần đúng (nếu có).
                      </div>
                      <div>
                        <strong className="text-foreground">f) Dữ liệu đối tác – hội viên:</strong> pháp nhân, mã số thuế, phạm vi hợp tác; hồ sơ tuân thủ (khi có).
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2. Nguồn dữ liệu</h3>
                    <p className="text-muted-foreground">
                      Người dùng/đơn vị gửi biểu mẫu; cơ quan/hiệp hội (ví dụ VATAP, 389); doanh nghiệp; 
                      nguồn công khai chính thống; hệ thống QSAC (log kỹ thuật).
                    </p>
                  </div>
                </div>
              </section>

              {/* III. Processing Purpose */}
              <section id="processing">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">III. Mục đích & cơ sở xử lý</h2>
                    
                    <h3 className="text-xl font-semibold mb-3">1. Mục đích</h3>
                    <p className="text-muted-foreground mb-6">
                      Tiếp nhận – xác minh – phối hợp xử lý phản ánh/tố cáo hàng giả; biên tập cảnh báo – thu hồi – kết quả kiểm tra; 
                      công bố dữ liệu chuẩn hoá; vận hành tra cứu chứng nhận; phát hành bản tin – video – sự kiện; 
                      quản trị an ninh hệ thống; thống kê, cải tiến chất lượng dịch vụ.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">2. Cơ sở xử lý</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Sự đồng ý của chủ thể dữ liệu qua biểu mẫu/đăng ký</li>
                      <li>• Thực hiện nghĩa vụ pháp lý/đáp ứng yêu cầu cơ quan có thẩm quyền</li>
                      <li>• Phục vụ lợi ích công cộng về an toàn sản phẩm, bảo vệ người tiêu dùng</li>
                      <li>• Thực hiện hợp đồng/hợp tác (đối tác, hội viên, dịch vụ QSAC)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* IV. Principles */}
              <section id="principles">
                <div className="flex items-start gap-4 mb-6">
                  <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">IV. Nguyên tắc bảo vệ dữ liệu</h2>
                    
                    <img 
                      src={securityEncryption} 
                      alt="Mã hóa và bảo mật dữ liệu" 
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong className="text-foreground">Hợp pháp – Minh bạch – Có mục đích cụ thể;</strong> không xử lý vượt phạm vi</li>
                      <li>• <strong className="text-foreground">Tối thiểu hoá dữ liệu;</strong> ưu tiên ẩn danh/pseudonym hoá khi biên tập công khai</li>
                      <li>• <strong className="text-foreground">Chính xác – Cập nhật;</strong> có cơ chế đính chính</li>
                      <li>• <strong className="text-foreground">Bảo mật theo rủi ro:</strong> mã hoá – kiểm soát truy cập – ghi vết – sao lưu</li>
                      <li>• <strong className="text-foreground">Giới hạn lưu trữ;</strong> xóa/ẩn dữ liệu khi hết mục đích/hết thời hạn</li>
                      <li>• <strong className="text-foreground">Trách nhiệm giải trình:</strong> lưu hồ sơ xử lý, lịch sử chỉnh sửa; kiểm toán định kỳ</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* V. Data Subject Rights */}
              <section id="rights">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">V. Quyền của chủ thể dữ liệu</h2>
                    
                    <img 
                      src={securityPrivacy} 
                      alt="Bảo vệ quyền riêng tư" 
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <p className="text-muted-foreground mb-4">
                      Chủ thể dữ liệu có quyền <strong className="text-foreground">biết – truy cập – đính chính – rút consent – xoá – hạn chế xử lý – phản đối – khiếu nại</strong> theo Nghị định 13/2023/NĐ-CP.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Kênh thực hiện:</strong> biểu mẫu "Yêu cầu về dữ liệu cá nhân" trên QSAC.vn hoặc email chuyên trách. 
                      QSAC phản hồi trong <strong className="text-foreground">≤ 72 giờ làm việc</strong> cho yêu cầu cơ bản; 
                      yêu cầu phức tạp được thông báo thời hạn xử lý dự kiến và căn cứ pháp lý liên quan.
                    </p>
                  </div>
                </div>
              </section>

              {/* VI. Consent */}
              <section id="consent">
                <h2 className="text-2xl font-bold mb-4">VI. Quy trình đồng ý (consent) & rút consent</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Biểu mẫu điện tử hiển thị rõ mục đích – loại dữ liệu – thời hạn lưu trữ – chia sẻ; ô chọn "Tôi đồng ý…".
                  </p>
                  <p>
                    <strong className="text-foreground">Rút consent:</strong> qua liên kết trong email xác nhận hoặc biểu mẫu "Quản lý consent". 
                    Việc rút consent không ảnh hưởng tính hợp pháp của xử lý đã thực hiện trước thời điểm rút.
                  </p>
                  <p>
                    Trường hợp pháp luật yêu cầu lưu giữ/đáp ứng điều tra, QSAC có thể từ chối xoá và nêu rõ căn cứ.
                  </p>
                </div>
              </section>

              {/* VII. Public Disclosure */}
              <section id="disclosure">
                <h2 className="text-2xl font-bold mb-4">VII. Công bố công khai & khử định danh</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    QSAC không công bố định danh cá nhân từ phản ánh/tố cáo, trừ khi: (i) đã có công bố chính thức của cơ quan có thẩm quyền; 
                    hoặc (ii) có sự đồng ý rõ ràng của chủ thể dữ liệu.
                  </p>
                  <p>
                    Mọi bảng dữ liệu mở (CSV/JSON) được khử định danh; chỉ thể hiện trường cần thiết: ngày, địa bàn, nhóm hàng, hành vi, kết quả, nguồn.
                  </p>
                  <p>
                    Ảnh/clip từ mạng: sử dụng nguồn cho phép; che mờ thông tin nhạy cảm; luôn ghi Nguồn – Tác giả – Ngày trích dẫn.
                  </p>
                </div>
              </section>

              {/* VIII. Storage */}
              <section id="storage">
                <h2 className="text-2xl font-bold mb-4">VIII. Lưu trữ, thời hạn & vị trí dữ liệu</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Thời hạn tiêu chuẩn</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• <strong className="text-foreground">Hồ sơ phản ánh/tố cáo:</strong> 24 tháng kể từ ngày đóng vụ hoặc theo yêu cầu pháp luật</li>
                  <li>• <strong className="text-foreground">Log hệ thống:</strong> 06–24 tháng tuỳ tầng bảo mật</li>
                  <li>• <strong className="text-foreground">Dữ liệu mở/bản tin:</strong> lưu trữ lịch sử (có phiên bản)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Vị trí lưu trữ</h3>
                <p className="text-muted-foreground">
                  Ưu tiên máy chủ đặt tại Việt Nam. Trường hợp dùng hạ tầng đám mây ở ngoài lãnh thổ, QSAC đánh giá tác động (DPIA), 
                  ký thoả thuận bảo vệ dữ liệu với nhà cung cấp, và tuân thủ yêu cầu lưu trữ/định danh tại Việt Nam theo pháp luật hiện hành.
                </p>
              </section>

              {/* IX. Sharing */}
              <section id="sharing">
                <h2 className="text-2xl font-bold mb-4">IX. Chia sẻ dữ liệu với bên thứ ba</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    • <strong className="text-foreground">Cơ quan có thẩm quyền:</strong> theo yêu cầu bằng văn bản/điện tử hợp lệ
                  </li>
                  <li>
                    • <strong className="text-foreground">Đối tác xử lý theo uỷ quyền:</strong> dịch vụ lưu trữ đám mây, gửi email, nền tảng hội thảo – 
                    ràng buộc hợp đồng bảo vệ dữ liệu, chỉ xử lý theo mục đích QSAC
                  </li>
                  <li>
                    • <strong className="text-foreground">Cơ quan/hiệp hội (VATAP, 389):</strong> chia sẻ trích yếu – dữ liệu khử định danh 
                    phục vụ lợi ích công cộng và minh bạch thị trường
                  </li>
                </ul>
              </section>

              {/* X. Security */}
              <section id="security">
                <h2 className="text-2xl font-bold mb-4">X. An ninh kỹ thuật & tổ chức</h2>
                
                <img 
                  src={securityTeam} 
                  alt="Đội ngũ an ninh mạng" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h3 className="text-xl font-semibold mb-3">1. Biện pháp kỹ thuật</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Mã hoá dữ liệu nhạy cảm khi truyền & khi lưu (TLS, at-rest)</li>
                  <li>• Kiểm soát truy cập theo vai trò; nguyên tắc tối thiểu (least privilege)</li>
                  <li>• Ghi vết – nhật ký truy cập/sửa đổi; cảnh báo hành vi bất thường</li>
                  <li>• Sao lưu – phục hồi; phân tách môi trường (prod/staging/dev)</li>
                  <li>• Quét lỗ hổng – cập nhật bản vá định kỳ; kiểm thử bảo mật khi nâng cấp lớn</li>
                  <li>• Hash kiểm toàn vẹn cho tệp dữ liệu công bố (SHA256)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2. Biện pháp tổ chức</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Quy chế phân quyền rõ ràng (Biên tập – Pháp chế – Dữ liệu – Kỹ thuật)</li>
                  <li>• Đào tạo định kỳ về bảo vệ dữ liệu – truyền thông có trách nhiệm</li>
                  <li>• Rà soát nhà cung cấp theo checklist an ninh – dữ liệu</li>
                  <li>• Đánh giá tác động bảo vệ dữ liệu (DPIA) trước khi triển khai module mới có rủi ro cao</li>
                </ul>
              </section>

              {/* XI. Incident Response */}
              <section id="incident">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">XI. Ứng phó sự cố & thông báo</h2>
                    
                    <img 
                      src={securityIncident} 
                      alt="Ứng phó sự cố bảo mật" 
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">Kích hoạt quy trình 4 bước:</strong>
                    </p>
                    <ol className="space-y-2 text-muted-foreground mb-6 list-decimal list-inside">
                      <li>Khoanh vùng – cô lập</li>
                      <li>Điều tra – ghi nhận</li>
                      <li>Khắc phục – giảm thiểu</li>
                      <li>Báo cáo – thông báo</li>
                    </ol>

                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">Thời hạn nội bộ:</strong> ghi nhận ban đầu ≤ 24 giờ; 
                      thông báo cơ quan có thẩm quyền/chủ thể dữ liệu trong thời gian sớm nhất có thể, mục tiêu ≤ 72 giờ 
                      kể từ khi xác định sự cố ảnh hưởng cá nhân.
                    </p>

                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Nội dung thông báo:</strong> bản chất sự cố, loại dữ liệu, mức rủi ro, 
                      biện pháp đã áp dụng, khuyến nghị cho người bị ảnh hưởng, đầu mối liên hệ.
                    </p>
                  </div>
                </div>
              </section>

              {/* XII. Cookies */}
              <section id="cookies">
                <h2 className="text-2xl font-bold mb-4">XII. Cookie, nhúng & đo lường</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    • <strong className="text-foreground">Cookie bắt buộc:</strong> phiên đăng nhập, chống spam/bot, cân bằng tải
                  </li>
                  <li>
                    • <strong className="text-foreground">Phân tích truy cập:</strong> chỉ thu thập ẩn danh/giả danh, phục vụ tối ưu nội dung; 
                    không theo dõi hành vi đa trang để quảng cáo
                  </li>
                  <li>
                    • <strong className="text-foreground">Nhúng YouTube/Facebook/TikTok:</strong> dùng trình nhúng chính thức, tắt tự phát nếu có thể; 
                    người dùng có thể từ chối cookie bên thứ ba
                  </li>
                </ul>
              </section>

              {/* XIII. Children Data */}
              <section id="children">
                <h2 className="text-2xl font-bold mb-4">XIII. Dữ liệu trẻ em & nhóm dễ tổn thương</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    QSAC không chủ đích thu thập dữ liệu trẻ em. Nếu phát sinh (ví dụ hình ảnh/clip hiện trường), 
                    QSAC ẩn danh – che mờ – xin đồng ý người giám hộ trước khi xử lý/công bố.
                  </p>
                  <p>
                    Đảm bảo bảo mật nguồn tin cho người tố giác khi có yêu cầu chính đáng.
                  </p>
                </div>
              </section>

              {/* XIV. Contact */}
              <section id="contact">
                <h2 className="text-2xl font-bold mb-4">XIV. Tổ chức thực hiện, liên hệ & khiếu nại</h2>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <strong className="text-foreground">Đầu mối bảo vệ dữ liệu (DPO):</strong>
                    <p className="text-muted-foreground">Bộ phận Pháp chế – Dữ liệu QSAC</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Email:</strong>
                    <p className="text-muted-foreground">privacy@qsac.vn</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Điện thoại:</strong>
                    <p className="text-muted-foreground">(Đang cập nhật)</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Tiếp nhận yêu cầu:</strong>
                    <p className="text-muted-foreground">
                      Biểu mẫu "Yêu cầu về dữ liệu cá nhân" trên QSAC.vn hoặc email nêu trên
                    </p>
                  </div>
                  <div>
                    <strong className="text-foreground">Khiếu nại:</strong>
                    <p className="text-muted-foreground">
                      Chủ thể dữ liệu có quyền gửi khiếu nại đến QSAC; nếu không thoả đáng, 
                      có thể gửi cơ quan có thẩm quyền theo pháp luật.
                    </p>
                  </div>
                </div>
              </section>

              {/* XV. Updates */}
              <section id="updates">
                <h2 className="text-2xl font-bold mb-4">XV. Cập nhật & hiệu lực</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Chính sách này có hiệu lực từ ngày công bố; rà soát tối thiểu 06 tháng/lần hoặc khi pháp luật/hoạt động xử lý thay đổi.
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <strong className="text-foreground">Nhật ký phiên bản:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• V1.0 (01/01/2025): Ban hành lần đầu</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    Cập nhật lần cuối: 01/01/2025
                  </p>
                </div>
              </section>

              {/* Data Request Form */}
              <section className="bg-card border border-border rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-bold mb-6">Biểu mẫu: Yêu cầu về dữ liệu cá nhân</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="requestType">Loại yêu cầu *</Label>
                    <select
                      id="requestType"
                      className="w-full mt-2 rounded-md border border-input bg-background px-3 py-2"
                      value={formData.requestType}
                      onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      required
                    >
                      <option value="">Chọn loại yêu cầu</option>
                      <option value="access">Truy cập</option>
                      <option value="correction">Đính chính</option>
                      <option value="delete">Xoá</option>
                      <option value="restrict">Hạn chế</option>
                      <option value="withdraw">Rút consent</option>
                      <option value="object">Phản đối</option>
                      <option value="complaint">Khiếu nại</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="fullName">Họ tên *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact">Email/Điện thoại *</Label>
                    <Input
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="scope">Phạm vi dữ liệu liên quan</Label>
                    <Input
                      id="scope"
                      placeholder="Đường link bài, mã hồ sơ, thời gian..."
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Mô tả yêu cầu (tối đa 1.000 ký tự) *</Label>
                    <Textarea
                      id="description"
                      rows={4}
                      maxLength={1000}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="confirm" className="mt-1" required />
                    <Label htmlFor="confirm" className="text-sm">
                      Tôi cam kết thông tin là đúng sự thật và đã đọc <a href="#" className="text-primary hover:underline">Chính sách bảo mật dữ liệu</a> của QSAC
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">Gửi yêu cầu</Button>
                </form>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdBanner type="sidebar-rect" variant={1} />
              
              <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
                <h3 className="font-semibold mb-4">Microcopy chuẩn</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>"Cập nhật lần cuối: …"</p>
                  <p>"Tôi đã đọc và đồng ý với Chính sách bảo mật dữ liệu của QSAC"</p>
                  <p>"Yêu cầu về dữ liệu cá nhân"</p>
                  <p>"Chúng tôi khử định danh dữ liệu trước khi công bố"</p>
                </div>
              </div>

              <AdBanner type="sidebar-rect" variant={2} />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-8 max-w-7xl">
          <AdBanner type="inline" variant={1} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataSecurity;
