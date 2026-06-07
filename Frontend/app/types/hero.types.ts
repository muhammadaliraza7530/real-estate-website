// frontend/src/types/hero.types.ts

export interface HeroStat {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
  bgColor: string;
}

export interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  gradient: string;
  buttonText: string;
}

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}