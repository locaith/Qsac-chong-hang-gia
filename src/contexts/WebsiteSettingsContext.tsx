import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CategoryLayout {
  displayType: 'grid' | 'list' | 'timeline' | 'masonry';
  articlesPerRow: number;
  showImages: boolean;
  showExcerpt: boolean;
  showCategory: boolean;
  showDate: boolean;
  maxArticles: number;
  backgroundColor?: string;
  textColor?: string;
}

export interface CategoryPage {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
  status: 'active' | 'draft';
  layout: CategoryLayout;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface HomepageSection {
  id: string;
  title: string;
  type: 'category' | 'hero' | 'ad-inline' | 'ad-bottom';
  categoryId?: string;
  order: number;
  visible: boolean;
  settings: {
    articlesPerRow: number;
    showImages: boolean;
    showExcerpt: boolean;
    showCategory: boolean;
    showDate: boolean;
    maxArticles: number;
    backgroundColor?: string;
    textColor?: string;
  };
}

export interface AppearanceSettings {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    main: string;
    heading: string;
  };
  layout: {
    containerWidth: string;
    borderRadius: string;
  };
}

interface WebsiteSettings {
  categoryPages: CategoryPage[];
  homepageSections: HomepageSection[];
  appearance: AppearanceSettings;
}

interface WebsiteSettingsContextType {
  settings: WebsiteSettings;
  updateCategoryPage: (id: string, updates: Partial<CategoryPage>) => void;
  addCategoryPage: (category: CategoryPage) => void;
  deleteCategoryPage: (id: string) => void;
  updateHomepageSection: (id: string, updates: Partial<HomepageSection>) => void;
  updateAppearance: (updates: Partial<AppearanceSettings>) => void;
  getCategoryBySlug: (slug: string) => CategoryPage | undefined;
}

const WebsiteSettingsContext = createContext<WebsiteSettingsContextType | undefined>(undefined);

const defaultSettings: WebsiteSettings = {
  categoryPages: [
    {
      id: 'alo-389',
      name: 'Alo 389',
      slug: 'alo-389',
      description: 'Tổng hợp chỉ đạo, kết quả kiểm tra – xử lý từ Ban Chỉ đạo 389',
      icon: 'Phone',
      order: 1,
      status: 'active',
      layout: {
        displayType: 'list',
        articlesPerRow: 1,
        showImages: true,
        showExcerpt: true,
        showCategory: true,
        showDate: true,
        maxArticles: 10,
        backgroundColor: '',
        textColor: '',
      },
      seo: {
        title: 'Alo 389 - Chỉ đạo chống hàng giả',
        description: 'Thông tin chỉ đạo, kết quả kiểm tra và xử lý hàng giả từ Ban Chỉ đạo 389',
        keywords: 'chỉ đạo 389, hàng giả, buôn lậu, kiểm tra thị trường',
      },
    },
    {
      id: 'an-ninh-so',
      name: 'An ninh số',
      slug: 'an-ninh-so',
      description: 'Tiêu chuẩn, quy định pháp lý về bảo vệ an ninh dữ liệu',
      icon: 'Shield',
      order: 2,
      status: 'active',
      layout: {
        displayType: 'grid',
        articlesPerRow: 3,
        showImages: true,
        showExcerpt: true,
        showCategory: true,
        showDate: true,
        maxArticles: 12,
      },
      seo: {
        title: 'An ninh số - Tiêu chuẩn & Pháp lý',
        description: 'Các tiêu chuẩn, quy định pháp lý về bảo vệ dữ liệu và an ninh số',
        keywords: 'an ninh số, tiêu chuẩn, pháp lý, bảo mật',
      },
    },
    {
      id: 'giai-ma-ho-so',
      name: 'Giải mã hồ sơ',
      slug: 'giai-ma-ho-so',
      description: 'Phân tích chuyên sâu các hồ sơ vi phạm và case study',
      icon: 'FileSearch',
      order: 3,
      status: 'active',
      layout: {
        displayType: 'grid',
        articlesPerRow: 2,
        showImages: true,
        showExcerpt: true,
        showCategory: true,
        showDate: true,
        maxArticles: 8,
      },
      seo: {
        title: 'Giải mã hồ sơ - Phân tích chuyên sâu',
        description: 'Phân tích và giải mã các hồ sơ vi phạm, case study điển hình',
        keywords: 'phân tích hồ sơ, case study, vi phạm, điều tra',
      },
    },
    {
      id: 'tmdt-ai',
      name: 'TMĐT-AI',
      slug: 'tmdt-ai',
      description: 'Công nghệ và giải pháp AI cho thương mại điện tử',
      icon: 'Cpu',
      order: 4,
      status: 'active',
      layout: {
        displayType: 'grid',
        articlesPerRow: 3,
        showImages: true,
        showExcerpt: true,
        showCategory: true,
        showDate: true,
        maxArticles: 9,
      },
      seo: {
        title: 'TMĐT-AI - Công nghệ & Giải pháp',
        description: 'Ứng dụng trí tuệ nhân tạo và công nghệ trong thương mại điện tử',
        keywords: 'AI, công nghệ, thương mại điện tử, giải pháp số',
      },
    },
    {
      id: 'doanh-nghiep-so',
      name: 'Doanh nghiệp số',
      slug: 'doanh-nghiep-so',
      description: 'Hướng dẫn doanh nghiệp tuân thủ và chuyển đổi số',
      icon: 'Building2',
      order: 5,
      status: 'active',
      layout: {
        displayType: 'grid',
        articlesPerRow: 2,
        showImages: true,
        showExcerpt: true,
        showCategory: true,
        showDate: true,
        maxArticles: 8,
      },
      seo: {
        title: 'Doanh nghiệp số - Tuân thủ & Chuyển đổi',
        description: 'Hướng dẫn doanh nghiệp tuân thủ quy định và chuyển đổi số',
        keywords: 'doanh nghiệp, tuân thủ, chuyển đổi số, quy định',
      },
    },
  ],
  homepageSections: [
    { id: 'hero', title: 'Hero Banner', type: 'hero', order: 1, visible: true, settings: { articlesPerRow: 1, showImages: true, showExcerpt: true, showCategory: false, showDate: true, maxArticles: 1 } },
    { id: 'alo-389-section', title: 'Alo 389', type: 'category', categoryId: 'alo-389', order: 2, visible: true, settings: { articlesPerRow: 4, showImages: true, showExcerpt: false, showCategory: true, showDate: true, maxArticles: 4 } },
    { id: 'ad-inline', title: 'Quảng cáo nội dung', type: 'ad-inline', order: 3, visible: true, settings: { articlesPerRow: 1, showImages: true, showExcerpt: false, showCategory: false, showDate: false, maxArticles: 1 } },
  ],
  appearance: {
    colors: {
      primary: '222.2 47.4% 11.2%',
      secondary: '210 40% 96.1%',
      accent: '210 40% 96.1%',
    },
    fonts: {
      main: 'Inter',
      heading: 'Inter',
    },
    layout: {
      containerWidth: '1280px',
      borderRadius: '0.5rem',
    },
  },
};

export const WebsiteSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<WebsiteSettings>(() => {
    const stored = localStorage.getItem('website-settings');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored settings:', e);
        return defaultSettings;
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('website-settings', JSON.stringify(settings));
  }, [settings]);

  const updateCategoryPage = (id: string, updates: Partial<CategoryPage>) => {
    setSettings(prev => ({
      ...prev,
      categoryPages: prev.categoryPages.map(cat =>
        cat.id === id ? { ...cat, ...updates } : cat
      ),
    }));
  };

  const addCategoryPage = (category: CategoryPage) => {
    setSettings(prev => ({
      ...prev,
      categoryPages: [...prev.categoryPages, category],
    }));
  };

  const deleteCategoryPage = (id: string) => {
    setSettings(prev => ({
      ...prev,
      categoryPages: prev.categoryPages.filter(cat => cat.id !== id),
    }));
  };

  const updateHomepageSection = (id: string, updates: Partial<HomepageSection>) => {
    setSettings(prev => ({
      ...prev,
      homepageSections: prev.homepageSections.map(section =>
        section.id === id ? { ...section, ...updates } : section
      ),
    }));
  };

  const updateAppearance = (updates: Partial<AppearanceSettings>) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        ...updates,
        colors: updates.colors ? { ...prev.appearance.colors, ...updates.colors } : prev.appearance.colors,
        fonts: updates.fonts ? { ...prev.appearance.fonts, ...updates.fonts } : prev.appearance.fonts,
        layout: updates.layout ? { ...prev.appearance.layout, ...updates.layout } : prev.appearance.layout,
      },
    }));
  };

  const getCategoryBySlug = (slug: string) => {
    return settings.categoryPages.find(cat => cat.slug === slug);
  };

  return (
    <WebsiteSettingsContext.Provider
      value={{
        settings,
        updateCategoryPage,
        addCategoryPage,
        deleteCategoryPage,
        updateHomepageSection,
        updateAppearance,
        getCategoryBySlug,
      }}
    >
      {children}
    </WebsiteSettingsContext.Provider>
  );
};

export const useWebsiteSettings = () => {
  const context = useContext(WebsiteSettingsContext);
  if (!context) {
    throw new Error('useWebsiteSettings must be used within WebsiteSettingsProvider');
  }
  return context;
};
