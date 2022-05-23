
import { StyledCard, Subtitle, Value } from './Card.styles';
import { ICard } from './ICard';

export const Card: React.FC<ICard> = ({
    ip,
    city,
    country,
    postalCode,
    timezone,
    isp,
}) => {
    return (
        <StyledCard>
            <li>
                <Subtitle>IP ADDRESS</Subtitle>
                <Value>{ip ?? '-'}</Value>
            </li>
            <li>
                <Subtitle>LOCATION</Subtitle>
                <Value>
                    {city || country || postalCode
                        ? `${city}, ${country}, ${postalCode}`
                        : '-'}
                </Value>
            </li>
            <li>
                <Subtitle>TIME ZONE</Subtitle>{' '}
                <Value>{timezone ? `UTC ${timezone}` : '-'}</Value>
            </li>
            <li>
                <Subtitle>ISP</Subtitle>
                <Value>{isp ?? '-'}</Value>
            </li>
        </StyledCard>
    );
};
