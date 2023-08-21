import {
  Command,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Loader2,
  FileText,
  Image,
  File,
  Settings,
  User,
  MoreVertical,
  Plus,
  Trash,
  AlertTriangle,
  HelpCircle,
  Pizza,
  Github,
  X,
  Twitter,
} from "lucide-react";

import type { Icon as lucideIcon } from "lucide-react";

export type Icon = lucideIcon;

export const Icons = {
  logo: Command,
  arrowRight: ArrowRight,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  spinner: Loader2,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  user: User,
  ellipsis: MoreVertical,
  add: Plus,
  trash: Trash,
  warning: AlertTriangle,
  help: HelpCircle,
  pizza: Pizza,
  gitHub: Github,
  close: X,
  twitter: Twitter,
};
