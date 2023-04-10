  /*
  Interface for the Login Response (can look different, based on your backend api)
  */

  export interface Logintoken {
    idToken: string;
    refreshToken: string;
    kind: string;
    isNewUser: boolean;
  }

  export interface LoginResponse {
    message: string
    code: number
    response: Logintoken
  }
  
  /*
  Interface for the Login Request (can look different, based on your backend api)
  */
  export interface LoginRequest {
    email: string;
    password: string;
  }

  export interface RegisterRequest {
    email: string;
    password: string;
    passwordConfirm: string;
  }

  export interface RegisterResponse {
    status: number;
    message: string;
  }

  export interface CustomerCreationRequest {
    name: string;
    email: string;
    cellphone: number;
  }

  export interface CustomerCreationResponse {
    message: string;
    code: number;
    response: object;
  }

  export interface CustomersResponse {
    message: string;
    code: number;
    response: Customer;
  }

  export interface Customer {
    name: string;
    email: string;
    cellphone: number;
  }