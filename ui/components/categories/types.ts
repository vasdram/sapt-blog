export type TLink = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

export type TItem = {
  id: string;
  name: string;
  isShow: boolean;
};

export type TCategories = {
  list: TItem[];
};
