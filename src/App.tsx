import { useState } from 'react';
import { Header } from './components/Header/Header';
import { IP } from './IP';

import { LatLngExpression } from 'leaflet';
import { Map } from './components/Map/Map';
import styled from 'styled-components';
import { Card } from './components/Card/Card';

const Wrapper = styled.div`
    position: relative;
`;

const CardWrapper = styled.div`
    position: absolute;
    top: 210px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    @media (max-width: 640px) {
        top: 160px;
    }

    @media (min-width: 2036px) {
        top: 580px;
    }
`;

function App() {
    const [query, setQuery] = useState('');
    const [ip, setIp] = useState<IP>();
    const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
    };

    const onSave = async () => {
        if (!query) return;
        const response = await fetch(
            `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${query}`,
        );
        const data: IP = await response.json();

        if (ip?.location && ip?.location.lat && ip?.location.lng) {
            setPosition([ip?.location?.lat, ip?.location?.lng]);
        }

        setIp(data);
    };

    return (
        <Wrapper>
            <Header
                query={query}
                onHandleChange={onHandleChange}
                handleOnSave={onSave}
            />
            <CardWrapper>
                <Card
                    ip={ip?.ip}
                    city={ip?.location.city}
                    country={ip?.location.country}
                    postalCode={ip?.location.postalCode}
                    timezone={ip?.location.timezone}
                    isp={ip?.isp}
                />
            </CardWrapper>
            <Map position={position} />
        </Wrapper>
    );
}

export default App;
