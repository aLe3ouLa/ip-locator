import { LatLngExpression, divIcon } from 'leaflet';
import * as ReactDOMServer from 'react-dom/server';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import { ChangeMapView } from '../../ChangeMapView';
import { Location } from './Location';


interface IMap {
    position: LatLngExpression;
}

const StyledMap = styled(MapContainer)`
    height: 70vh;

    @media (max-width: 640px) {
        height: 100vh;
    }
`;

export const Map: React.FC<IMap> = ({ position }) => {

    const icon = divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString( <Location/> )
      });

    return (
        <StyledMap center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
                <Popup>Your ip address is located here!</Popup>
            </Marker>
            <ChangeMapView coords={position} />
        </StyledMap>
    );
};
