// Application.ts (or Applicattion.ts if the name is correct)
import { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  details: string;
  image?: string;
  url: string;
}


export interface EditFieldProps {
  label: string;
  defaultValue: string;
}

export interface EditableSectionProps {
  title: string;
  isEditing: boolean;
  handleEdit: () => void;
  children: ReactNode;
}
