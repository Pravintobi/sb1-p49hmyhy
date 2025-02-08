export interface Work {
  id: string;
  title: string;
  image: string;
}

export interface WorkItemProps extends Work {
  isSelected?: boolean;
}