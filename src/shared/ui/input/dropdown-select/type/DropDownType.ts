export interface IDropDownSelect {
  data: Array<string>;
  placeholder: string;
  state: "dark" | "white";
  setValue?: (i: string) => void;
  icon?: boolean;
  up?: boolean;
  label?: string;
  i18?: boolean;
}
