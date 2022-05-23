interface AS {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}
interface Proxy {
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
}
interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
export interface IP {
  as: AS;
  domains: string[];
  ip: string;
  isp: string;
  location: Location;
  proxy: Proxy;
}