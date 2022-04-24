import { catchError, of } from "rxjs";

export const randomNumFromRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const fibonacci = (n: number = randomNumFromRange(0, 30)): number => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

export const ApiError = (errorMessage: string) => catchError(error =>{
    console.log(errorMessage);
    return of({
        type:"API_Error",
        payload: error,
        error:true,
    });
});