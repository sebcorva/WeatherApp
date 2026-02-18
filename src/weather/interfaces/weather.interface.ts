export interface Weather {
    city: string;
    country: string;
    temp: number
    last_update_date: string;
    last_update_time: string;
    is_day: number;
}

export interface WeatherAPIResponse {
    location: {
        name: string;
        country: string;
        localtime: string; 
    };
    current: {
        temp_c: number;
        last_updated: string;
        is_day: number;
    };
}