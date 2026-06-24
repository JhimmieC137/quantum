declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    color?: string;
    absoluteStrokeWidth?: boolean;
  }
  export type LucideIcon = FC<LucideProps>;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Instagram: LucideIcon;
  export const Video: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;
  export const MapPin: LucideIcon;
  export const Send: LucideIcon;
  export const LayoutGrid: LucideIcon;
  export const LayoutTemplate: LucideIcon;
  export const Road: LucideIcon;
  export const Trees: LucideIcon;
  export const Zap: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const FileCheck: LucideIcon;
  export const Building2: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Globe: LucideIcon;
  export const Wallet: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Home: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Hammer: LucideIcon;
  export const Users: LucideIcon;
  export const Wrench: LucideIcon;
  export const Compass: LucideIcon;
  export const LayoutList: LucideIcon;
  export const CheckSquare: LucideIcon;
  export const FileText: LucideIcon;
  export const BarChart2: LucideIcon;
  export const PieChart: LucideIcon;
  export const LineChart: LucideIcon;
  export const Sprout: LucideIcon;
  export const PenLine: LucideIcon;
}
