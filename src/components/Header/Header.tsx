import Pattern from '../../assets/pattern-bg.png';
import { SearchInput } from '../SearchInput/SearchInput';
import { StyledHeader, Image, Title, Wrapper } from './Header.styles';
import { IHeaderProps } from './IHeaderProps';


export const Header: React.FC<IHeaderProps> = ({ query, onHandleChange, handleOnSave }) => {
    return (
        <StyledHeader>
            <Image src={Pattern} alt="Background pattern" />
            <Wrapper>
                <Title>IP Address Tracker</Title>
                <SearchInput
                    handleOnSave={handleOnSave}
                    query={query}
                    handleOnChange={onHandleChange}
                />
            </Wrapper>
        </StyledHeader>
    );
};
