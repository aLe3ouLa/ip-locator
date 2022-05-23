import { ISearchInputProps } from './ISearchInputProps';
import { StyledInput, SearchButton, SearchBar } from './SearchInput.styles';

export const SearchInput: React.FC<ISearchInputProps> = ({
    query,
    handleOnChange,
    handleOnSave,
}) => {
    return (
        <SearchBar>
            <StyledInput
                type="search"
                placeholder="Search for any IP address or domain"
                value={query}
                onChange={handleOnChange}
            />
            <SearchButton onClick={handleOnSave}><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg></SearchButton>
        </SearchBar>
    );
};
