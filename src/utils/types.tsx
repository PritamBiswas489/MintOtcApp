// import type {TFunction} from 'i18next';

export interface ThemeContextType {
  currSymbol: string;
  currValue: number;
  isRTL: boolean;
  setIsRTL: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrValue: React.Dispatch<React.SetStateAction<number>>;
  setCurrSymbol: React.Dispatch<React.SetStateAction<string>>;
  t: any;
}
