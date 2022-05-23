export interface IHeaderProps {
  query: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSave: () => void;
}