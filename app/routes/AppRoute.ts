export interface AppRoute {
    locationBeforeTransitions: Location
}

export interface Location {
    pathname: string;
    search: string;
}