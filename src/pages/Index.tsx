import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import UtilitiesSection from "@/components/UtilitiesSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import cosmeticsImage from "@/assets/news-cosmetics-inspection.jpg";
import foodSafetyImage from "@/assets/news-food-safety.jpg";
import floodImage from "@/assets/news-flood-disaster.jpg";
import legalImage from "@/assets/news-legal-standards.jpg";
import qrImage from "@/assets/news-qr-traceability.jpg";
import gamblingImage from "@/assets/news-gambling-raid.jpg";
const Index = () => {
  const alertArticles = [{
    title: "Thu hồi 3 sản phẩm mỹ phẩm Vinamake bị cơ quan công an kết luận là hàng giả",
    excerpt: "Cục Quản lý dược, Bộ Y tế vừa có quyết định thu hồi 3 sản phẩm mỹ phẩm bao gồm dầu gội đầu, dung dịch vệ sinh phụ nữ.",
    time: "18 phút trước",
    category: "Cảnh báo",
    riskLevel: "Cao",
    image: cosmeticsImage
  }, {
    title: "NÓNG: Phát hiện yến sào giả mạo, chất lượng kém - Công ty bị phạt gần 1 tỷ đồng",
    excerpt: "Công ty TNHH Yến Trí Việt vừa bị xử phạt hành chính với số tiền 961,1 triệu đồng do hàng loạt hành vi vi phạm.",
    time: "25 phút trước",
    category: "An toàn thực phẩm",
    riskLevel: "Cao",
    image: foodSafetyImage
  }, {
    title: "Ca sĩ Vũ Hà bị đưa ra xét xử trong vụ án đánh bạc tại khách sạn Pullman",
    excerpt: "Cơ quan tổ tụng đánh giá Vũ Ngọc Hà (ca sĩ Vũ Hà) tích cực tham gia các hoạt động thiện nguyện.",
    time: "32 phút trước",
    category: "Pháp lý",
    image: gamblingImage
  }, {
    title: "Thương lâm cảnh tượng ở Di tích Cố đô Huế sau siêu bão",
    excerpt: "Những hình ảnh từ trên cao ghi lại trong ngày 28/10 cho thấy toàn bộ khu vực Đại Nội và các làng lăng ở Huế chìm trong biển nước.",
    time: "45 phút trước",
    category: "Xã hội",
    image: floodImage
  }];
  const standardsArticles = [{
    title: "Công văn 790/ATTP-SP năm 2025 tăng cường kiểm tra thực phẩm giả, kém chất lượng",
    excerpt: "Cục an toàn thực phẩm ban hành công văn yêu cầu tăng cường kiểm tra, hậu kiểm các sản phẩm thực phẩm vi phạm.",
    time: "1 giờ trước",
    category: "Tiêu chuẩn",
    image: foodSafetyImage
  }, {
    title: "Hướng dẫn áp dụng quy chuẩn kỹ thuật quốc gia QCVN mới nhất về an toàn sản phẩm",
    excerpt: "Các doanh nghiệp cần nắm rõ và tuân thủ nghiêm túc các quy định mới về chất lượng sản phẩm.",
    time: "1 giờ trước",
    category: "Pháp lý",
    image: legalImage
  }, {
    title: "Xử phạt hành chính công ty có 16 mỹ phẩm vi phạm cùng hành vi",
    excerpt: "Công ty cổ phần chăm sóc sức khỏe và sắc đẹp Phú Thái bị phạt do kinh doanh mỹ phẩm không có hồ sơ thông tin sản phẩm.",
    time: "2 giờ trước",
    category: "Pháp lý",
    image: cosmeticsImage
  }, {
    title: "Quy định mới về ghi nhãn hàng hóa có hiệu lực từ tháng 11/2025",
    excerpt: "Các doanh nghiệp cần điều chỉnh nhãn mác sản phẩm theo quy định mới của Bộ Công Thương.",
    time: "2 giờ trước",
    category: "Tiêu chuẩn",
    image: legalImage
  }];
  const technologyArticles = [{
    title: "Blockchain và QR Code: Giải pháp chống hàng giả hiệu quả cho doanh nghiệp",
    time: "17 phút trước",
    image: qrImage
  }, {
    title: "Ứng dụng AI trong kiểm tra chất lượng sản phẩm: Xu hướng công nghệ mới",
    time: "21 phút trước",
    image: foodSafetyImage
  }, {
    title: "Hệ thống truy xuất nguồn gốc thông minh giúp bảo vệ thương hiệu",
    time: "5 giờ trước",
    image: qrImage
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <BreakingNews />
      
      {/* Top Leaderboard Ad */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner type="leaderboard-top" variant={1} />
      </div>
      
      <HeroSection />
      
      <CategorySection title="CẢNH BÁO & THU HỒI" color="alert" articles={alertArticles} showImages={true} />
      
      {/* Inline Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner type="inline" variant={1} />
      </div>
      
      <CategorySection title="TIÊU CHUẨN & PHÁP LÝ" color="primary" articles={standardsArticles} showImages={true} />
      
      <UtilitiesSection />
      
      <CategorySection title="TMĐT-AI" color="success" articles={technologyArticles} showImages={true} />
      
      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner type="bottom" variant={2} />
      </div>
      
      <Footer />
    </div>;
};
export default Index;