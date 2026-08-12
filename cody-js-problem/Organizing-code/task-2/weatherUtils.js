

export function getWeatherMessage(temp) {
    if (temp < 10) {
        return "Brrr, it's cold!";
    } else if (temp <= 20) {
        return "Nice and cool!️";
    } else {
        return "Warm and sunny!️";
    }
}