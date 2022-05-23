import { LatLngExpression } from 'leaflet';
import { useMap } from 'react-leaflet';

export const ChangeMapView: React.FC<{coords: LatLngExpression}> = ({coords}) => {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
}
