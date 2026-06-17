export interface BusinessLine {
  code: string;
  titleEn: string;
  titleId: string;
  descriptionEn: string;
  descriptionId: string;
  category: 'agriculture' | 'forestry' | 'energy' | 'logistics' | 'aquaculture' | 'rental' | 'services' | 'construction';
  icon: string;
}

export interface ServiceItem {
  titleEn: string;
  titleId: string;
  descriptionEn: string;
  descriptionId: string;
  icon: string;
}

export interface ManagementMember {
  name: string;
  roleEn: string;
  roleId: string;
  image?: string;
  bioEn?: string;
  bioId?: string;
}

export interface NewsArticle {
  id: string;
  titleEn: string;
  titleId: string;
  summaryEn: string;
  summaryId: string;
  contentEn: string;
  contentId: string;
  date: string;
  category: string;
  image: string;
  author: string;
}
