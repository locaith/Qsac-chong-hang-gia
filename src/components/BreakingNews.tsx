import { AlertCircle } from "lucide-react";

const BreakingNews = () => {
  const alerts = [
    "Thu hồi sản phẩm mỹ phẩm vi phạm quy định nhãn hàng hóa - Cập nhật: 28/10/2025",
    "Cảnh báo hàng giả tràn lan trên các sàn TMĐT - 142 trường hợp vi phạm",
    "Công bố danh sách doanh nghiệp đạt chuẩn tuân thủ tháng 10/2025",
  ];

  return (
    <div className="bg-alert-light border-l-4 border-alert">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-alert" />
            <span className="font-bold text-alert uppercase text-sm">Thông báo mới</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {alerts.map((alert, index) => (
                <span key={index} className="inline-block text-sm text-foreground mr-12">
                  {alert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
