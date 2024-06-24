export type ProviderValue = {
    userData: {
        username: string;
        password: string;
    };
    login: (username: string, password: string) => void;
    theme: string;
    switchTheme: () => void;
    timeFormat: string;
    setTimeFormat: (timeFormat: string) => void;
}