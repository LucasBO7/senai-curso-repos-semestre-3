import styled from "styled-components";
import MapView, { Marker } from "react-native-maps";

export const MapDraw = styled(MapView).attrs({})`
    flex: 1;
    width: 100%;
    margin-bottom: 10px;
`;

export const MarkerPoint = styled(Marker).attrs({})`
    
`;