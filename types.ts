
export enum Category {
  WHISKY = 'WHISKY',
  GIN = 'GIN',
  CACHACA = 'CACHACA',
  CERVEJA = 'CERVEJA',
  VINHO = 'VINHO',
  GIN_GARRAFA = 'GIN_GARRAFA',
  CAIPIRINHA = 'CAIPIRINHA',
  NARGUILE = 'NARGUILE',
  SUCO = 'SUCO',
  NON_ALCOHOLIC = 'NON_ALCOHOLIC'
}

export interface MenuItem {
  id: string;
  name: string;
  price: number | string; // Support string for ranges like "R$ 2,00 / 4,00"
  mixer?: string;
  category: Category;
  description?: string;
  volume?: string;
}

export interface MenuData {
  whiskies: MenuItem[];
  gins: MenuItem[];
  ginFlavors: string[];
  cachacas: MenuItem[];
  cervejas: MenuItem[];
  vinhos: MenuItem[];
  ginGarrafas: MenuItem[];
  caipirinhas: MenuItem[];
  narguile: MenuItem[];
  sucos: MenuItem[];
  nonAlcoholic: {
    energeticos: MenuItem[];
    refrigerantes: MenuItem[];
    aguas: MenuItem[];
  };
}
