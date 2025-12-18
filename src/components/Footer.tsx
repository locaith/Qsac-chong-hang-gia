import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import qsacLogo from "@/assets/qsac-logo-main.jpg";
const Footer = () => {
  const footerLinks = {
    "Về chúng tôi": [{
      name: "Giới thiệu",
      path: "/gioi-thieu"
    }, {
      name: "Quy chế biên tập",
      path: "/quy-che-bien-tap"
    }, {
      name: "Đính chính",
      path: "#"
    }, {
      name: "Bảo mật dữ liệu",
      path: "/bao-mat-du-lieu"
    }, {
      name: "Điều khoản sử dụng",
      path: "#"
    }],
    "Chuyên mục": [{
      name: "Tin & Cảnh báo",
      path: "/"
    }, {
      name: "Alo 389",
      path: "/alo-389"
    }, {
      name: "An ninh số",
      path: "/an-ninh-so"
    }, {
      name: "Giải mã hồ sơ",
      path: "/giai-ma-ho-so"
    }, {
      name: "TMĐT-AI",
      path: "/tmdt-ai"
    }, {
      name: "Doanh nghiệp số",
      path: "/doanh-nghiep-so"
    }],
    "Tiện ích": [{
      name: "Tra cứu TraceID",
      path: "#"
    }, {
      name: "Kiểm tra link TMĐT",
      path: "#"
    }, {
      name: "Báo cáo vi phạm",
      path: "#"
    }, {
      name: "Thư viện tài liệu",
      path: "/thu-vien"
    }, {
      name: "Trung tâm dữ liệu",
      path: "/du-lieu"
    }]
  };
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={qsacLogo} alt="QSAC Logo" className="h-12 w-12 md:h-16 md:w-16 bg-white rounded-lg p-1.5 md:p-2" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">QSAC.VN</h3>
                <p className="text-background/80 text-xs md:text-sm">
              </p>
              </div>
            </div>
            <p className="text-background/80 mb-3 md:mb-4 text-xs md:text-sm">
              Trung tâm Giám sát Chất lượng & Phòng chống Hàng giả
            </p>
            <p className="text-background/80 text-xs md:text-sm mb-4 md:mb-6">Qsac.vn rất hoan nghênh độc giả gửi thông tin và ý kiến cho chúng tôi.</p>
            
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">Số 42 Nguyễn Đình Hoàn,, phường Nghĩa Đô, thành phố Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-background/80">039.635.7779</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-background/80">bandoc@qsac.vn</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => <div key={title}>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">{title}</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {links.map(link => <li key={link.name}>
                    <Link to={link.path}>
                      <Button variant="link" className="text-background/80 hover:text-background p-0 h-auto font-normal text-xs md:text-sm">
                        {link.name}
                      </Button>
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs md:text-sm text-background/60 text-center md:text-left">
            <p>©  TRUNG TÂM GIÁM SÁT CHẤT LƯỢNG VÀ PHÒNG CHỐNG HÀNG GIẢ</p>
            <p className="text-xs">Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số ......./GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày ..... tháng ....năm 2025</p>
          </div>
          
          <div className="mt-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
            <Button variant="link" className="text-background/80 hover:text-background text-xs md:text-sm p-0 h-auto">
              CHAT VỚI TƯ VẤN VIÊN
            </Button>
            <span className="hidden sm:inline mx-2 text-background/40">|</span>
            <Button variant="link" className="text-background/80 hover:text-background text-xs md:text-sm p-0 h-auto">
              XEM CHI TIẾT
            </Button>
            <span className="hidden sm:inline mx-2 text-background/40">|</span>
            <Button variant="link" className="text-background/80 hover:text-background text-xs md:text-sm p-0 h-auto">
              CHÍNH SÁCH BẢO MẬT
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;