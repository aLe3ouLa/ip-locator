export interface ISearchInputProps {
  query: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSave: () => void;
}