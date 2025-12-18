import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Mail className="h-6 w-6 text-primary" />
            Đăng ký nhận bản tin
          </CardTitle>
          <p className="text-muted-foreground">
            Nhận thông tin cảnh báo, tiêu chuẩn mới và sự kiện quan trọng
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Họ và tên" />
            <Input type="email" placeholder="Email" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Lựa chọn bản tin:</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="alerts" defaultChecked />
                <label htmlFor="alerts" className="text-sm cursor-pointer">
                  Cảnh báo & Thu hồi sản phẩm
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="standards" defaultChecked />
                <label htmlFor="standards" className="text-sm cursor-pointer">
                  An ninh số
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="events" />
                <label htmlFor="events" className="text-sm cursor-pointer">
                  Sự kiện & Webinar
                </label>
              </div>
            </div>
          </div>

          <Button className="w-full">Đăng ký nhận tin</Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Bằng việc đăng ký, bạn đồng ý với chính sách bảo mật dữ liệu của chúng tôi
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Newsletter;
