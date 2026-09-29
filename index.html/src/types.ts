export type Language = 'en' | 'bn';

export type FacilityStatus = 'CURRENT' | 'DEVELOPING' | 'PROPOSED';

export interface HeroSlide {
  id: number;
  image: string;
  headlineEn: string;
  headlineBn: string;
  subheadlineEn: string;
  subheadlineBn: string;
  ctaEn?: string;
  ctaBn?: string;
  ctaLink?: string;
  secondaryCtaEn?: string;
  secondaryCtaBn?: string;
  secondaryCtaLink?: string;
}

export interface TrustBadge {
  icon: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
}

export interface AgroHighlight {
  id: string;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  metric: string;
  metricLabelEn: string;
  metricLabelBn: string;
  descEn: string;
  descBn: string;
  image: string;
}

export interface AgroUnit {
  id: string;
  titleEn: string;
  titleBn: string;
  tagEn: string;
  tagBn: string;
  descEn: string;
  descBn: string;
  itemsEn: string[];
  itemsBn: string[];
  image: string;
  status: FacilityStatus;
}

export interface Accommodation {
  id: string;
  nameEn: string;
  nameBn: string;
  tierEn: string;
  tierBn: string;
  descEn: string;
  descBn: string;
  featuresEn: string[];
  featuresBn: string[];
  capacity: string;
  image: string;
  status: FacilityStatus;
}

export interface ExperienceItem {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'adventure' | 'nature' | 'family' | 'sports';
  categoryEn: string;
  categoryBn: string;
  descEn: string;
  descBn: string;
  status: FacilityStatus;
  iconName: string;
  image: string;
}

export interface OwnershipPackage {
  id: string;
  name: string;
  taglineEn: string;
  taglineBn: string;
  landDecimal: string;
  landBangla: string;
  packagePrice: string;
  bookingPrice: string;
  accommodationTypeEn: string;
  accommodationTypeBn: string;
  complimentaryNights: number;
  roomDiscount: string;
  organicDiscount: string;
  activityDiscount: string;
  clubMembership: boolean;
  healthcareBenefits: boolean;
  protectionBenefits: boolean;
  highlighted?: boolean;
}

export interface GalleryPhoto {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'nature' | 'agriculture' | 'livestock' | 'hospitality' | 'experiences';
  image: string;
  captionEn: string;
  captionBn: string;
}

export interface StoryArticle {
  id: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  date: string;
  readTime: string;
  excerptEn: string;
  excerptBn: string;
  contentEn: string[];
  contentBn: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  category: 'general' | 'ownership' | 'resort' | 'legal';
}
