  /*
  Interface for the Login Response (can look different, based on your backend api)
  */
  export interface LoginResponse {
    idToken: string;
    refreshToken: string;
    kind: string;
    isNewUser: boolean;
  }
  
  /*
  Interface for the Login Request (can look different, based on your backend api)
  */
  export interface LoginRequest {
    email: string;
    password: string;
  }