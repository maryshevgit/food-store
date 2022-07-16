export interface ITypes {
    id: number,
    title: string,
    imageURL: string,
}

export interface IFood {
    id: number,
    name: string,
    img: string,
    type: number,
    rating: number,
    price: number,
}

export interface IUser {
    firstName: string;
    email: string;
    id: string;
}

export interface AuthState {
    user: IUser | null;
    authenticated: boolean;
    loading: boolean;
    error: string;
}

export interface SignUpData {
    email: string;
    password: string;
    firstName: string;
}

export interface SignInData {
    email: string;
    password: string;
}


//setUser payload user 
//setloading payload boolean
//seterror payload string



