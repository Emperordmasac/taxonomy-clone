import {
  Command,
  ArrowRight,
  ChevronLeft,
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
} from "lucide-react";

import type { Icon as lucideIcon } from "lucide-react";

export type Icon = lucideIcon;

export const Icons = {
  logo: Command,
  arrowRight: ArrowRight,
  chevronLeft: ChevronLeft,
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
};
