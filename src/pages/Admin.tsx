import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWebsiteSettings, type CategoryPage, type HomepageSection } from "@/contexts/WebsiteSettingsContext";
import { useAuth, type UserRole } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Settings, 
  Plus, 
  Edit, 
  Trash2,
  Save,
  X,
  Home,
  Upload,
  Image as ImageIcon,
  Eye,
  Globe,
  Layout,
  Layers,
  Palette,
  Edit2,
  Users,
  LogOut,
  UserPlus,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  status: string;
  excerpt?: string;
  content?: string;
  featuredImage?: string;
  tags?: string[];
  publishDate?: string;
  slug?: string;
}

interface ArticleFormData {
  title: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  tags: string;
  status: string;
  publishDate: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

interface UserFormData {
  username: string;
  password: string;
  name: string;
  role: UserRole;
}

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  status: string;
}

const Admin = () => {
  const { 
    settings: websiteSettings, 
    updateCategoryPage, 
    addCategoryPage,
    deleteCategoryPage,
    getCategoryBySlug 
  } = useWebsiteSettings();
  
  const { user, users, logout, register, deleteUser } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [showArticleForm, setShowArticleForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [articleForm, setArticleForm] = useState<ArticleFormData>({
    title: "",
    category: "",
    author: user?.name || "",
    excerpt: "",
    content: "",
    featuredImage: "",
    tags: "",
    status: "draft",
    publishDate: new Date().toISOString().split('T')[0],
    slug: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: ""
  });

  const [userForm, setUserForm] = useState<UserFormData>({
    username: "",
    password: "",
    name: "",
    role: "member"
  });

  // Articles state
  const [articles, setArticles] = useState<Article[]>([]);

  // Fetch articles from Supabase
  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          profiles (full_name)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
        toast.error("Lỗi khi tải danh sách bài viết");
        return;
      }

      if (data) {
        const formattedArticles: Article[] = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          category: item.category || "Uncategorized",
          author: item.profiles?.full_name || "Unknown",
          date: new Date(item.created_at).toLocaleDateString('vi-VN'),
          status: item.status === 'published' ? 'Đã xuất bản' : 'Nháp',
          excerpt: item.excerpt,
          content: item.content,
          featuredImage: item.image_url,
          tags: item.tags || [],
          publishDate: item.created_at.split('T')[0],
          slug: item.slug
        }));
        setArticles(formattedArticles);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleRegisterUser = async () => {
    if (!userForm.username || !userForm.password || !userForm.name) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    
    // Note: This might affect current session if not handled carefully in AuthContext
    const success = await register(userForm.username, userForm.password, userForm.name, userForm.role);
    if (success) {
      setShowUserForm(false);
      setUserForm({
        username: "",
        password: "",
        name: "",
        role: "member"
      });
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: UserRole) => {
    try {
        const { error } = await supabase
            .from('profiles')
            .update({ role: newRole })
            .eq('id', userId);
        
        if (error) {
            toast.error("Lỗi cập nhật quyền hạn");
        } else {
            toast.success("Đã cập nhật quyền hạn");
            // Trigger refresh in AuthContext would be ideal, but for now we rely on realtime or reload
            // Or we can manually update the local state if we had one, but users comes from context
             window.location.reload(); // Simple brute force to refresh context
        }
    } catch (e) {
        console.error(e);
        toast.error("Lỗi hệ thống");
    }
  };

  const [events, setEvents] = useState<Event[]>([
    { id: "1", title: "Hội thảo An toàn thực phẩm 2025", date: "2025-02-15", location: "Hà Nội", type: "Hội thảo", status: "Sắp diễn ra" },
    { id: "2", title: "Đào tạo kiểm tra chất lượng sản phẩm", date: "2025-03-20", location: "TP.HCM", type: "Đào tạo", status: "Đang đăng ký" },
  ]);

  const [settings, setSettings] = useState({
    siteName: "QSAC.VN",
    siteDescription: "Trung tâm Giám sát Chất lượng & Phòng chống Hàng giả",
    contactEmail: "contact@qsac.vn",
    contactPhone: "024-xxxx-xxxx",
    address: "Hà Nội, Việt Nam",
    articlesPerPage: "10",
    enableComments: true,
    maintenanceMode: false,
  });

  // Website management states - using context
  const categoryPages = websiteSettings.categoryPages;
  const homepageSections = websiteSettings.homepageSections;

  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sectionSettings, setSectionSettings] = useState({
    articlesPerRow: 3,
    showImages: true,
    showExcerpt: true,
    showCategory: true,
    showDate: true,
    maxArticles: 6,
    backgroundColor: "",
    textColor: "",
  });

  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [categoryForm, setCategoryForm] = useState<Partial<CategoryPage>>({
    name: "",
    slug: "",
    description: "",
    icon: "",
    order: categoryPages.length + 1,
    status: "active",
    layout: {
      displayType: "grid",
      articlesPerRow: 3,
      showImages: true,
      showExcerpt: true,
      showCategory: true,
      showDate: true,
      maxArticles: 12,
    },
    seo: {
      title: "",
      description: "",
      keywords: "",
    }
  });

  // Load category data when editing
  useEffect(() => {
    if (editingCategory) {
      const category = categoryPages.find(c => c.id === editingCategory);
      if (category) {
        setCategoryForm(category);
      }
    }
  }, [editingCategory, categoryPages]);

  const handleSaveCategorySettings = () => {
    if (editingCategory) {
      updateCategoryPage(editingCategory, categoryForm);
      toast.success(`Đã cập nhật danh mục "${categoryForm.name}" thành công! Thay đổi đã được đồng bộ.`);
      setEditingCategory(null);
    } else if (showCategoryForm) {
      // Add new category
      const newCategory: CategoryPage = {
        id: Date.now().toString(),
        name: categoryForm.name || "",
        slug: categoryForm.slug || "",
        description: categoryForm.description || "",
        icon: categoryForm.icon || "Folder",
        order: categoryForm.order || categoryPages.length + 1,
        status: categoryForm.status as "active" | "draft" || "active",
        layout: categoryForm.layout || {
          displayType: "grid",
          articlesPerRow: 3,
          showImages: true,
          showExcerpt: true,
          showCategory: true,
          showDate: true,
          maxArticles: 12,
        },
        seo: categoryForm.seo || {
          title: "",
          description: "",
          keywords: "",
        }
      };
      addCategoryPage(newCategory);
      toast.success(`Đã thêm danh mục "${categoryForm.name}" thành công!`);
      setShowCategoryForm(false);
      setCategoryForm({
        name: "",
        slug: "",
        description: "",
        icon: "",
        order: categoryPages.length + 2,
        status: "active",
        layout: {
          displayType: "grid",
          articlesPerRow: 3,
          showImages: true,
          showExcerpt: true,
          showCategory: true,
          showDate: true,
          maxArticles: 12,
        },
        seo: {
          title: "",
          description: "",
          keywords: "",
        }
      });
    }
  };

  const handleDeleteCategory = (id: string) => {
    const category = categoryPages.find(c => c.id === id);
    if (category && confirm(`Bạn có chắc muốn xóa danh mục "${category.name}"?`)) {
      deleteCategoryPage(id);
      toast.success(`Đã xóa danh mục "${category.name}"`);
      if (editingCategory === id) {
        setEditingCategory(null);
      }
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Kích thước ảnh không được vượt quá 5MB");
        return;
      }
      
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      try {
        const { error: uploadError } = await supabase.storage
            .from('article-images')
            .upload(filePath, file);

        if (uploadError) {
            console.error("Storage upload error:", uploadError);
            // Fallback to Base64 if storage fails (e.g. bucket not created)
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPreviewImage(result);
                setArticleForm({ ...articleForm, featuredImage: result });
            };
            reader.readAsDataURL(file);
            toast.warning("Không thể tải lên Storage, sử dụng Base64 thay thế (Kiểm tra lại cấu hình Supabase)");
            return;
        }

        const { data } = supabase.storage.from('article-images').getPublicUrl(filePath);
        setPreviewImage(data.publicUrl);
        setArticleForm({ ...articleForm, featuredImage: data.publicUrl });
        toast.success("Đã tải ảnh lên");
      } catch (error) {
          console.error(error);
          toast.error("Lỗi khi tải ảnh");
      }
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage("");
    setArticleForm({ ...articleForm, featuredImage: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSaveArticle = async () => {
    if (!articleForm.title || !articleForm.category || !articleForm.author) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    const articleData = {
      title: articleForm.title,
      category: articleForm.category,
      excerpt: articleForm.excerpt,
      content: articleForm.content,
      image_url: articleForm.featuredImage,
      tags: articleForm.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      status: articleForm.status === "Đã xuất bản" || articleForm.status === "published" ? "published" : "draft",
      author_id: user?.id,
      slug: articleForm.slug || articleForm.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    };

    try {
        if (editingArticle) {
            const { error } = await supabase
              .from('articles')
              .update(articleData)
              .eq('id', editingArticle.id);
            
            if (error) throw error;
            toast.success("Đã cập nhật bài viết");
        } else {
            const { error } = await supabase
              .from('articles')
              .insert([articleData]);
            
            if (error) throw error;
            toast.success("Đã tạo bài viết mới");
        }

        fetchArticles();
        setShowArticleForm(false);
        setEditingArticle(null);
        setPreviewImage("");
        setArticleForm({
          title: "",
          category: "",
          author: user?.name || "",
          excerpt: "",
          content: "",
          featuredImage: "",
          tags: "",
          status: "draft",
          publishDate: new Date().toISOString().split('T')[0],
          slug: "",
          seoTitle: "",
          seoDescription: "",
          seoKeywords: ""
        });
    } catch (error: any) {
        console.error("Save error:", error);
        toast.error(`Lỗi: ${error.message}`);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa bài viết này?")) return;
    
    try {
        const { error } = await supabase.from('articles').delete().eq('id', id);
        if (error) throw error;
        
        toast.success("Đã xóa bài viết");
        fetchArticles();
    } catch (error: any) {
        console.error("Delete error:", error);
        toast.error("Lỗi khi xóa bài viết");
    }
  };

  const handleEditArticle = (article: Article) => {
      setEditingArticle(article);
      setArticleForm({
          title: article.title,
          category: article.category,
          author: article.author,
          excerpt: article.excerpt || "",
          content: article.content || "",
          featuredImage: article.featuredImage || "",
          tags: article.tags?.join(", ") || "",
          status: article.status === "Đã xuất bản" ? "published" : "draft",
          publishDate: article.publishDate || new Date().toISOString().split('T')[0],
          slug: article.slug || "",
          seoTitle: "",
          seoDescription: "",
          seoKeywords: ""
      });
      setPreviewImage(article.featuredImage || "");
      setShowArticleForm(true);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(e => e.id !== id));
    toast.success("Đã xóa sự kiện");
  };

  const handleSaveSettings = () => {
    toast.success("Đã lưu cài đặt hệ thống");
  };

  const stats = [
    { label: "Tổng bài viết", value: articles.length, icon: FileText, color: "text-blue-600" },
    { label: "Sự kiện", value: events.length, icon: Calendar, color: "text-green-600" },
    { label: "Đã xuất bản", value: articles.filter(a => a.status === "Đã xuất bản").length, icon: FileText, color: "text-purple-600" },
    { label: "Nháp", value: articles.filter(a => a.status === "Nháp").length, icon: FileText, color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Admin Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">QSAC Admin</h1>
            <span className="text-sm text-muted-foreground">Trang quản trị</span>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm">
              <Home className="h-4 w-4 mr-2" />
              Về trang chủ
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-border min-h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Tổng quan
            </Button>
            <Button
              variant={activeTab === "articles" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("articles")}
            >
              <FileText className="h-4 w-4 mr-2" />
              Quản lý bài viết
            </Button>
            <Button
              variant={activeTab === "events" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("events")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Quản lý sự kiện
            </Button>
            <Button
              variant={activeTab === "website" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("website")}
            >
              <Globe className="h-4 w-4 mr-2" />
              Quản lý Website
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="h-4 w-4 mr-2" />
              Cài đặt hệ thống
            </Button>
            <Button
              variant={activeTab === "users" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("users")}
            >
              <Users className="h-4 w-4 mr-2" />
              Quản lý thành viên
            </Button>
            <div className="pt-4 mt-4 border-t border-border">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Đăng xuất
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Tổng quan</h2>
                <p className="text-muted-foreground">Thống kê và quản lý nội dung website</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <Card key={stat.label}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Hoạt động gần đây</CardTitle>
                  <CardDescription>Các thay đổi và cập nhật mới nhất</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {articles.slice(0, 3).map((article) => (
                      <div key={article.id} className="flex items-center justify-between py-3 border-b last:border-0">
                        <div>
                          <p className="font-medium">{article.title}</p>
                          <p className="text-sm text-muted-foreground">{article.category} • {article.date}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          article.status === "Đã xuất bản" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                        }`}>
                          {article.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Articles Management */}
          {activeTab === "articles" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Quản lý bài viết</h2>
                  <p className="text-muted-foreground">Thêm, sửa, xóa và quản lý nội dung bài viết</p>
                </div>
                <Button onClick={() => {
                    setEditingArticle(null);
                    setArticleForm({
                        title: "",
                        category: "",
                        author: user?.name || "",
                        excerpt: "",
                        content: "",
                        featuredImage: "",
                        tags: "",
                        status: "draft",
                        publishDate: new Date().toISOString().split('T')[0],
                        seoTitle: "",
                        seoDescription: "",
                        seoKeywords: ""
                    });
                    setPreviewImage("");
                    setShowArticleForm(true);
                }}>
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm bài viết
                </Button>
              </div>

              {showArticleForm && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {editingArticle ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}
                    </CardTitle>
                    <CardDescription>Điền đầy đủ thông tin để tạo bài viết chuyên nghiệp</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Tiêu đề */}
                      <div>
                        <Label className="text-base font-semibold">
                          Tiêu đề bài viết <span className="text-red-500">*</span>
                        </Label>
                        <Input 
                          placeholder="Nhập tiêu đề bài viết..." 
                          className="mt-2"
                          value={articleForm.title}
                          onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                        />
                      </div>

                      {/* Đường dẫn (Slug) */}
                      <div>
                        <Label className="text-base font-semibold">
                          Đường dẫn bài viết (Slug)
                        </Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Để trống để tự động tạo từ tiêu đề
                        </p>
                        <Input 
                          placeholder="duong-dan-bai-viet" 
                          className="mt-2"
                          value={articleForm.slug}
                          onChange={(e) => setArticleForm({ ...articleForm, slug: e.target.value })}
                        />
                      </div>

                      {/* Chuyên mục & Tác giả */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-base font-semibold">
                            Chuyên mục <span className="text-red-500">*</span>
                          </Label>
                          <Select 
                            value={articleForm.category}
                            onValueChange={(value) => setArticleForm({ ...articleForm, category: value })}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Chọn chuyên mục" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Tin & Cảnh báo">Tin & Cảnh báo</SelectItem>
                              <SelectItem value="Alo 389">Alo 389</SelectItem>
                              <SelectItem value="An ninh số">An ninh số</SelectItem>
                              <SelectItem value="Giải mã hồ sơ">Giải mã hồ sơ</SelectItem>
                              <SelectItem value="TMĐT-AI">TMĐT-AI</SelectItem>
                              <SelectItem value="Doanh nghiệp số">Doanh nghiệp số</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-base font-semibold">
                            Tác giả <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            placeholder="Tên tác giả..." 
                            className="mt-2"
                            value={articleForm.author}
                            onChange={(e) => setArticleForm({ ...articleForm, author: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Ảnh đại diện */}
                      <div>
                        <Label className="text-base font-semibold">Ảnh đại diện</Label>
                        <p className="text-sm text-muted-foreground mb-3">
                          Kích thước khuyến nghị: 1200x630px, tối đa 5MB
                        </p>
                        
                        <div className="space-y-3">
                          {previewImage ? (
                            <div className="relative rounded-lg border-2 border-dashed border-border p-4">
                              <img 
                                src={previewImage} 
                                alt="Preview" 
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              <Button
                                variant="destructive"
                                size="sm"
                                className="absolute top-6 right-6"
                                onClick={handleRemoveImage}
                              >
                                <X className="h-4 w-4 mr-2" />
                                Xóa ảnh
                              </Button>
                            </div>
                          ) : (
                            <div 
                              className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                              <p className="text-sm font-medium mb-1">
                                Nhấn để tải ảnh lên
                              </p>
                              <p className="text-xs text-muted-foreground">
                                PNG, JPG, WEBP (tối đa 5MB)
                              </p>
                            </div>
                          )}
                          
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                          
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <ImageIcon className="h-4 w-4 mr-2" />
                            Chọn ảnh từ máy tính
                          </Button>
                        </div>
                      </div>

                      {/* Tóm tắt */}
                      <div>
                        <Label className="text-base font-semibold">Tóm tắt (Excerpt)</Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Mô tả ngắn gọn về nội dung bài viết (40-60 từ)
                        </p>
                        <Textarea 
                          placeholder="Nhập tóm tắt bài viết..." 
                          rows={3}
                          value={articleForm.excerpt}
                          onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
                        />
                      </div>

                      {/* Nội dung */}
                      <div>
                        <Label className="text-base font-semibold">
                          Nội dung bài viết <span className="text-red-500">*</span>
                        </Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Nội dung chi tiết của bài viết
                        </p>
                        <Textarea 
                          placeholder="Nhập nội dung bài viết..." 
                          rows={10}
                          value={articleForm.content}
                          onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                        />
                      </div>

                      {/* Tags */}
                      <div>
                        <Label className="text-base font-semibold">Tags</Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Nhập các từ khóa, cách nhau bởi dấu phẩy
                        </p>
                        <Input 
                          placeholder="Ví dụ: 389, buôn lậu, TMĐT, hàng giả..." 
                          value={articleForm.tags}
                          onChange={(e) => setArticleForm({ ...articleForm, tags: e.target.value })}
                        />
                      </div>

                      {/* Trạng thái & Ngày xuất bản */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-base font-semibold">Trạng thái</Label>
                          <Select 
                            value={articleForm.status}
                            onValueChange={(value) => setArticleForm({ ...articleForm, status: value })}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="draft">Nháp</SelectItem>
                              <SelectItem value="published">Xuất bản</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-base font-semibold">Ngày xuất bản</Label>
                          <Input 
                            type="date" 
                            className="mt-2"
                            value={articleForm.publishDate}
                            onChange={(e) => setArticleForm({ ...articleForm, publishDate: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4 border-t">
                        <Button onClick={handleSaveArticle} className="flex-1">
                          <Save className="h-4 w-4 mr-2" />
                          Lưu bài viết
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setShowArticleForm(false);
                            setEditingArticle(null);
                            setPreviewImage("");
                            setArticleForm({
                              title: "",
                              category: "",
                              author: "",
                              excerpt: "",
                              content: "",
                              featuredImage: "",
                              tags: "",
                              status: "draft",
                              publishDate: new Date().toISOString().split('T')[0]
                            });
                          }}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Hủy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead>Tiêu đề</TableHead>
                        <TableHead>Chuyên mục</TableHead>
                        <TableHead>Tác giả</TableHead>
                        <TableHead>Ngày</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead className="text-right">Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {articles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell>
                            {article.featuredImage ? (
                              <img 
                                src={article.featuredImage} 
                                alt={article.title}
                                className="w-12 h-12 object-cover rounded"
                              />
                            ) : (
                              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center">
                                <ImageIcon className="h-5 w-5 text-muted-foreground" />
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium">{article.title}</p>
                              {article.excerpt && (
                                <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                  {article.excerpt}
                                </p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{article.category}</TableCell>
                          <TableCell>{article.author}</TableCell>
                          <TableCell>{article.date}</TableCell>
                          <TableCell>
                            {article.tags && article.tags.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {article.tags.slice(0, 2).map((tag, idx) => (
                                  <span 
                                    key={idx}
                                    className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {article.tags.length > 2 && (
                                  <span className="text-xs text-muted-foreground">
                                    +{article.tags.length - 2}
                                  </span>
                                )}
                              </div>
                            ) : (
                              <span className="text-xs text-muted-foreground">-</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <span className={`text-xs px-2 py-1 rounded ${
                              article.status === "Đã xuất bản" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                            }`}>
                              {article.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" title="Xem trước">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              title="Chỉnh sửa"
                              onClick={() => handleEditArticle(article)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              title="Xóa"
                              onClick={() => handleDeleteArticle(article.id)}
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Events Management */}
          {activeTab === "events" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Quản lý sự kiện</h2>
                  <p className="text-muted-foreground">Thêm, sửa, xóa và quản lý sự kiện</p>
                </div>
                <Button onClick={() => setShowEventForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm sự kiện
                </Button>
              </div>

              {showEventForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>Thêm sự kiện mới</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label>Tên sự kiện</Label>
                        <Input placeholder="Nhập tên sự kiện..." />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Ngày</Label>
                          <Input type="date" />
                        </div>
                        <div>
                          <Label>Địa điểm</Label>
                          <Input placeholder="Địa điểm tổ chức..." />
                        </div>
                      </div>
                      <div>
                        <Label>Loại sự kiện</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn loại sự kiện" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seminar">Hội thảo</SelectItem>
                            <SelectItem value="training">Đào tạo</SelectItem>
                            <SelectItem value="conference">Hội nghị</SelectItem>
                            <SelectItem value="workshop">Workshop</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Mô tả</Label>
                        <Textarea placeholder="Mô tả sự kiện..." rows={4} />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => {
                          toast.success("Đã lưu sự kiện");
                          setShowEventForm(false);
                        }}>
                          <Save className="h-4 w-4 mr-2" />
                          Lưu
                        </Button>
                        <Button variant="outline" onClick={() => setShowEventForm(false)}>
                          <X className="h-4 w-4 mr-2" />
                          Hủy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tên sự kiện</TableHead>
                        <TableHead>Ngày</TableHead>
                        <TableHead>Địa điểm</TableHead>
                        <TableHead>Loại</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead className="text-right">Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {events.map((event) => (
                        <TableRow key={event.id}>
                          <TableCell className="font-medium">{event.title}</TableCell>
                          <TableCell>{event.date}</TableCell>
                          <TableCell>{event.location}</TableCell>
                          <TableCell>{event.type}</TableCell>
                          <TableCell>
                            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                              {event.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDeleteEvent(event.id)}
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Website Management */}
          {activeTab === "website" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Quản lý Website</h2>
                <p className="text-muted-foreground">Cấu hình bố cục, danh mục và nội dung cho website</p>
              </div>

              <Tabs defaultValue="homepage" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="homepage">
                    <Layout className="h-4 w-4 mr-2" />
                    Trang chủ
                  </TabsTrigger>
                  <TabsTrigger value="categories">
                    <Layers className="h-4 w-4 mr-2" />
                    Danh mục
                  </TabsTrigger>
                  <TabsTrigger value="appearance">
                    <Palette className="h-4 w-4 mr-2" />
                    Giao diện
                  </TabsTrigger>
                </TabsList>

                {/* Homepage Layout */}
                <TabsContent value="homepage" className="space-y-6 mt-6">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Left: Section List */}
                    <Card className="col-span-1">
                      <CardHeader>
                        <CardTitle className="text-base">Danh sách Section</CardTitle>
                        <CardDescription>Kéo thả để sắp xếp</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {homepageSections.sort((a, b) => a.order - b.order).map((section) => (
                          <div
                            key={section.id}
                            onClick={() => setSelectedSection(section.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                              selectedSection === section.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Layers className="h-4 w-4 text-muted-foreground" />
                                <div>
                                  <div className="font-medium text-sm">{section.title}</div>
                                  <div className="text-xs text-muted-foreground">{section.type}</div>
                                </div>
                              </div>
                              <Switch checked={section.visible} />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Right: Section Settings */}
                    <Card className="col-span-2">
                      <CardHeader>
                        <CardTitle>Cấu hình Section</CardTitle>
                        <CardDescription>
                          {selectedSection 
                            ? `Tùy chỉnh: ${homepageSections.find(s => s.id === selectedSection)?.title}` 
                            : 'Chọn một section để cấu hình'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {selectedSection ? (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Số bài viết mỗi hàng</label>
                                <select 
                                  className="w-full h-10 rounded-md border border-input bg-background px-3"
                                  value={sectionSettings.articlesPerRow}
                                  onChange={(e) => setSectionSettings({...sectionSettings, articlesPerRow: parseInt(e.target.value)})}
                                >
                                  <option value="2">2 bài</option>
                                  <option value="3">3 bài</option>
                                  <option value="4">4 bài</option>
                                </select>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Số bài tối đa</label>
                                <Input 
                                  type="number" 
                                  value={sectionSettings.maxArticles}
                                  onChange={(e) => setSectionSettings({...sectionSettings, maxArticles: parseInt(e.target.value)})}
                                />
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-sm font-medium">Hiển thị thông tin</label>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center space-x-2">
                                  <Checkbox 
                                    id="showImages" 
                                    checked={sectionSettings.showImages}
                                    onCheckedChange={(checked) => setSectionSettings({...sectionSettings, showImages: checked as boolean})}
                                  />
                                  <label htmlFor="showImages" className="text-sm cursor-pointer">Hình ảnh</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox 
                                    id="showExcerpt"
                                    checked={sectionSettings.showExcerpt}
                                    onCheckedChange={(checked) => setSectionSettings({...sectionSettings, showExcerpt: checked as boolean})}
                                  />
                                  <label htmlFor="showExcerpt" className="text-sm cursor-pointer">Trích đoạn</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox 
                                    id="showCategory"
                                    checked={sectionSettings.showCategory}
                                    onCheckedChange={(checked) => setSectionSettings({...sectionSettings, showCategory: checked as boolean})}
                                  />
                                  <label htmlFor="showCategory" className="text-sm cursor-pointer">Danh mục</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox 
                                    id="showDate"
                                    checked={sectionSettings.showDate}
                                    onCheckedChange={(checked) => setSectionSettings({...sectionSettings, showDate: checked as boolean})}
                                  />
                                  <label htmlFor="showDate" className="text-sm cursor-pointer">Ngày đăng</label>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Màu nền</label>
                                <Input 
                                  type="color" 
                                  value={sectionSettings.backgroundColor}
                                  onChange={(e) => setSectionSettings({...sectionSettings, backgroundColor: e.target.value})}
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Màu chữ</label>
                                <Input 
                                  type="color"
                                  value={sectionSettings.textColor}
                                  onChange={(e) => setSectionSettings({...sectionSettings, textColor: e.target.value})}
                                />
                              </div>
                            </div>

                            <div className="pt-4 border-t">
                              <Button onClick={() => toast.success("Đã lưu cấu hình section")}>
                                <Save className="mr-2 h-4 w-4" />
                                Lưu cấu hình
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-12 text-muted-foreground">
                            <Layers className="h-12 w-12 mx-auto mb-4 opacity-20" />
                            <p>Chọn một section từ danh sách bên trái để bắt đầu cấu hình</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Category Pages */}
                <TabsContent value="categories" className="space-y-6 mt-6">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Left: Category List */}
                    <Card className="col-span-1">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <CardTitle className="text-base">Danh mục</CardTitle>
                        <Button size="sm" onClick={() => {
                          setShowCategoryForm(true);
                          setEditingCategory(null);
                          setCategoryForm({
                            name: "",
                            slug: "",
                            description: "",
                            icon: "",
                            order: categoryPages.length + 1,
                            status: "active",
                            layout: {
                              displayType: "grid",
                              articlesPerRow: 3,
                              showImages: true,
                              showExcerpt: true,
                              showCategory: true,
                              showDate: true,
                              maxArticles: 12,
                            },
                            seo: {
                              title: "",
                              description: "",
                              keywords: "",
                            }
                          });
                        }}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {categoryPages.sort((a, b) => a.order - b.order).map((category) => (
                          <div
                            key={category.id}
                            onClick={() => setEditingCategory(category.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                              editingCategory === category.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-sm">{category.name}</div>
                                <div className="text-xs text-muted-foreground">{category.slug}</div>
                              </div>
                              <Badge variant={category.status === "active" ? "default" : "secondary"} className="text-xs">
                                {category.status === "active" ? "ON" : "OFF"}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Right: Category Settings */}
                    <Card className="col-span-2">
                      <CardHeader>
                        <CardTitle>
                          {showCategoryForm && !editingCategory ? 'Thêm danh mục mới' : 'Cấu hình danh mục'}
                        </CardTitle>
                        <CardDescription>
                          {editingCategory 
                            ? `Chỉnh sửa: ${categoryPages.find(c => c.id === editingCategory)?.name}` 
                            : showCategoryForm
                            ? 'Tạo danh mục mới'
                            : 'Chọn một danh mục để cấu hình'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {(showCategoryForm || editingCategory) ? (
                          <div className="space-y-4">
                            <Tabs defaultValue="basic" className="w-full">
                              <TabsList>
                                <TabsTrigger value="basic">Thông tin cơ bản</TabsTrigger>
                                <TabsTrigger value="layout">Bố cục</TabsTrigger>
                                <TabsTrigger value="seo">SEO</TabsTrigger>
                              </TabsList>

                              <TabsContent value="basic" className="space-y-4 pt-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Tên danh mục *</label>
                                    <Input
                                      value={categoryForm.name}
                                      onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                                      placeholder="Ví dụ: Tin & Cảnh báo"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Slug (URL) *</label>
                                    <Input
                                      value={categoryForm.slug}
                                      onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value })}
                                      placeholder="tin-canh-bao"
                                    />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Mô tả</label>
                                  <Textarea
                                    value={categoryForm.description}
                                    onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                                    placeholder="Mô tả ngắn về danh mục này..."
                                    rows={3}
                                  />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Icon</label>
                                    <Input
                                      value={categoryForm.icon}
                                      onChange={(e) => setCategoryForm({ ...categoryForm, icon: e.target.value })}
                                      placeholder="AlertCircle"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Thứ tự</label>
                                    <Input
                                      type="number"
                                      value={categoryForm.order}
                                      onChange={(e) => setCategoryForm({ ...categoryForm, order: parseInt(e.target.value) || 0 })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Trạng thái</label>
                                    <select
                                      className="w-full h-10 rounded-md border border-input bg-background px-3"
                                      value={categoryForm.status}
                                      onChange={(e) => setCategoryForm({ ...categoryForm, status: e.target.value as "active" | "draft" })}
                                    >
                                      <option value="active">Hoạt động</option>
                                      <option value="draft">Tạm ẩn</option>
                                    </select>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="layout" className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Kiểu hiển thị</label>
                                  <select
                                    className="w-full h-10 rounded-md border border-input bg-background px-3"
                                    value={categoryForm.layout?.displayType || "grid"}
                                    onChange={(e) => setCategoryForm({ 
                                      ...categoryForm, 
                                      layout: {
                                        ...categoryForm.layout!,
                                        displayType: e.target.value as "grid" | "list" | "timeline" | "masonry"
                                      }
                                    })}
                                  >
                                    <option value="list">Danh sách (List)</option>
                                    <option value="grid">Lưới (Grid)</option>
                                    <option value="timeline">Dòng thời gian</option>
                                    <option value="masonry">Masonry</option>
                                  </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Số cột</label>
                                    <select 
                                      className="w-full h-10 rounded-md border border-input bg-background px-3"
                                      value={categoryForm.layout?.articlesPerRow || 3}
                                      onChange={(e) => setCategoryForm({ 
                                        ...categoryForm, 
                                        layout: {
                                          ...categoryForm.layout!,
                                          articlesPerRow: parseInt(e.target.value)
                                        }
                                      })}
                                    >
                                      <option value="2">2 cột</option>
                                      <option value="3">3 cột</option>
                                      <option value="4">4 cột</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Bài/trang</label>
                                    <Input 
                                      type="number" 
                                      value={categoryForm.layout?.maxArticles || 12}
                                      onChange={(e) => setCategoryForm({ 
                                        ...categoryForm, 
                                        layout: {
                                          ...categoryForm.layout!,
                                          maxArticles: parseInt(e.target.value) || 12
                                        }
                                      })}
                                    />
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <label className="text-sm font-medium">Tùy chọn hiển thị</label>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <Checkbox 
                                        id="cat-image" 
                                        checked={categoryForm.layout?.showImages ?? true}
                                        onCheckedChange={(checked) => setCategoryForm({ 
                                          ...categoryForm, 
                                          layout: {
                                            ...categoryForm.layout!,
                                            showImages: checked as boolean
                                          }
                                        })}
                                      />
                                      <label htmlFor="cat-image" className="text-sm cursor-pointer">Hiển thị hình ảnh</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Checkbox id="cat-excerpt" defaultChecked />
                                      <label htmlFor="cat-excerpt" className="text-sm cursor-pointer">Hiển thị trích đoạn</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Checkbox id="cat-author" />
                                      <label htmlFor="cat-author" className="text-sm cursor-pointer">Hiển thị tác giả</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Checkbox id="cat-date" defaultChecked />
                                      <label htmlFor="cat-date" className="text-sm cursor-pointer">Hiển thị ngày đăng</label>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="seo" className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Tiêu đề SEO</label>
                                  <Input placeholder="Tiêu đề trang tối ưu cho SEO (60 ký tự)" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Mô tả SEO</label>
                                  <Textarea placeholder="Mô tả meta cho SEO (160 ký tự)" rows={3} />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Từ khóa</label>
                                  <Input placeholder="từ khóa 1, từ khóa 2, từ khóa 3" />
                                </div>
                              </TabsContent>
                            </Tabs>

                            <div className="flex gap-2 pt-4 border-t">
                              <Button onClick={handleSaveCategorySettings}>
                                <Save className="mr-2 h-4 w-4" />
                                Lưu thay đổi
                              </Button>
                              <Button variant="outline" onClick={() => {
                                setShowCategoryForm(false);
                                setEditingCategory(null);
                              }}>
                                Hủy
                              </Button>
                              {editingCategory && (
                                <Button variant="destructive" className="ml-auto" onClick={() => handleDeleteCategory(editingCategory)}>
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Xóa danh mục
                                </Button>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-12 text-muted-foreground">
                            <Layout className="h-12 w-12 mx-auto mb-4 opacity-20" />
                            <p>Chọn một danh mục hoặc tạo mới để bắt đầu</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Appearance Settings */}
                <TabsContent value="appearance" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cài đặt giao diện</CardTitle>
                      <CardDescription>Tùy chỉnh màu sắc, font chữ và style cho website</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-semibold mb-3 block">Màu chủ đạo</Label>
                        <div className="grid grid-cols-4 gap-3">
                          {["#1a56db", "#dc2626", "#16a34a", "#ca8a04"].map((color) => (
                            <div key={color} className="flex flex-col items-center gap-2">
                              <div
                                className="w-16 h-16 rounded-lg border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                                style={{ backgroundColor: color }}
                              />
                              <code className="text-xs">{color}</code>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">Font chữ</Label>
                        <Select defaultValue="inter">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inter">Inter</SelectItem>
                            <SelectItem value="roboto">Roboto</SelectItem>
                            <SelectItem value="opensans">Open Sans</SelectItem>
                            <SelectItem value="lato">Lato</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">Kích thước container</Label>
                        <Select defaultValue="1400">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1200">1200px - Compact</SelectItem>
                            <SelectItem value="1400">1400px - Standard</SelectItem>
                            <SelectItem value="1600">1600px - Wide</SelectItem>
                            <SelectItem value="full">Full width</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="w-full" onClick={() => toast.success("Đã lưu cài đặt giao diện")}>
                        <Save className="h-4 w-4 mr-2" />
                        Lưu cài đặt
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Cài đặt hệ thống</h2>
                <p className="text-muted-foreground">Cấu hình và quản lý hệ thống website</p>
              </div>

              <Tabs defaultValue="general" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="general">Cài đặt chung</TabsTrigger>
                  <TabsTrigger value="display">Hiển thị</TabsTrigger>
                  <TabsTrigger value="advanced">Nâng cao</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Thông tin website</CardTitle>
                      <CardDescription>Cấu hình thông tin cơ bản của website</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Tên website</Label>
                        <Input 
                          value={settings.siteName}
                          onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label>Mô tả</Label>
                        <Textarea 
                          value={settings.siteDescription}
                          onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Email liên hệ</Label>
                          <Input 
                            type="email"
                            value={settings.contactEmail}
                            onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label>Số điện thoại</Label>
                          <Input 
                            value={settings.contactPhone}
                            onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Địa chỉ</Label>
                        <Input 
                          value={settings.address}
                          onChange={(e) => setSettings({...settings, address: e.target.value})}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="display" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cài đặt hiển thị</CardTitle>
                      <CardDescription>Tùy chỉnh cách hiển thị nội dung</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Số bài viết trên mỗi trang</Label>
                        <Select 
                          value={settings.articlesPerPage}
                          onValueChange={(value) => setSettings({...settings, articlesPerPage: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 bài viết</SelectItem>
                            <SelectItem value="10">10 bài viết</SelectItem>
                            <SelectItem value="20">20 bài viết</SelectItem>
                            <SelectItem value="50">50 bài viết</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <Label>Bình luận</Label>
                          <p className="text-sm text-muted-foreground">Cho phép người dùng bình luận</p>
                        </div>
                        <Button
                          variant={settings.enableComments ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSettings({...settings, enableComments: !settings.enableComments})}
                        >
                          {settings.enableComments ? "Bật" : "Tắt"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cài đặt nâng cao</CardTitle>
                      <CardDescription>Các tùy chọn nâng cao cho hệ thống</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <Label>Chế độ bảo trì</Label>
                          <p className="text-sm text-muted-foreground">Tạm ngưng truy cập website cho người dùng</p>
                        </div>
                        <Button
                          variant={settings.maintenanceMode ? "destructive" : "outline"}
                          size="sm"
                          onClick={() => setSettings({...settings, maintenanceMode: !settings.maintenanceMode})}
                        >
                          {settings.maintenanceMode ? "Đang bảo trì" : "Hoạt động"}
                        </Button>
                      </div>
                      <div className="pt-4">
                        <Button variant="outline" className="w-full">
                          Xóa cache hệ thống
                        </Button>
                      </div>
                      <div>
                        <Button variant="outline" className="w-full">
                          Sao lưu dữ liệu
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end">
                <Button onClick={handleSaveSettings}>
                  <Save className="h-4 w-4 mr-2" />
                  Lưu tất cả cài đặt
                </Button>
              </div>
            </div>
          )}
          {/* Users Management */}
          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Quản lý thành viên</h2>
                  <p className="text-muted-foreground">Thêm, sửa, xóa và phân quyền thành viên</p>
                </div>
                <Button onClick={() => setShowUserForm(true)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Thêm thành viên
                </Button>
              </div>

              {showUserForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>Thêm thành viên mới</CardTitle>
                    <CardDescription>Tạo tài khoản và phân quyền cho thành viên</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">Tên đăng nhập / Email <span className="text-red-500">*</span></Label>
                          <Input 
                            id="username" 
                            placeholder="email@example.com" 
                            value={userForm.username}
                            onChange={(e) => setUserForm({...userForm, username: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Mật khẩu <span className="text-red-500">*</span></Label>
                          <Input 
                            id="password" 
                            type="password" 
                            placeholder="******" 
                            value={userForm.password}
                            onChange={(e) => setUserForm({...userForm, password: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Họ và tên <span className="text-red-500">*</span></Label>
                          <Input 
                            id="name" 
                            placeholder="Nguyễn Văn A" 
                            value={userForm.name}
                            onChange={(e) => setUserForm({...userForm, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Phân quyền <span className="text-red-500">*</span></Label>
                          <Select 
                            value={userForm.role}
                            onValueChange={(value) => setUserForm({...userForm, role: value as UserRole})}
                          >
                            <SelectTrigger id="role">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="member">Thành viên</SelectItem>
                              <SelectItem value="admin">Quản trị viên</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-4 border-t">
                        <Button onClick={handleRegisterUser}>
                          <Save className="h-4 w-4 mr-2" />
                          Tạo tài khoản
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setShowUserForm(false);
                            setUserForm({
                              username: "",
                              password: "",
                              name: "",
                              role: "member"
                            });
                          }}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Hủy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Họ và tên</TableHead>
                        <TableHead>Tên đăng nhập / Email</TableHead>
                        <TableHead>Vai trò</TableHead>
                        <TableHead className="text-right">Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                              {user.role === "admin" ? "Quản trị viên" : "Thành viên"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                             <div className="flex justify-end gap-2">
                                {user.role !== 'admin' ? (
                                    <Button 
                                        variant="ghost" 
                                        size="sm"
                                        onClick={() => handleUpdateUserRole(user.id, 'admin')}
                                        title="Thăng cấp lên Admin"
                                    >
                                        <Users className="h-4 w-4 text-blue-600" />
                                    </Button>
                                ) : (
                                     <Button 
                                        variant="ghost" 
                                        size="sm"
                                        onClick={() => handleUpdateUserRole(user.id, 'member')}
                                        title="Hạ cấp xuống Member"
                                    >
                                        <Users className="h-4 w-4 text-gray-600" />
                                    </Button>
                                )}
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => deleteUser(user.id)}
                                  title="Xóa thành viên"
                                >
                                  <Trash2 className="h-4 w-4 text-red-600" />
                                </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
