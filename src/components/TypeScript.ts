export interface Technology {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps";
  level: "Beginner-Friendly" | "Intermediate";
  rating: number;
  description: string;
  badge?: string;
  badgeClassName?: string;
  icon: string;
  iconColor: string;
}