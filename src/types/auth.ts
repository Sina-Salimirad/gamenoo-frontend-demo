type BaseUser = {
  fullName: string;
  email: string;
  phone: string;
};

export type User = BaseUser & {
  _id: string;
  role: string;
};

export type SignUp = BaseUser & {
  password: string;
};

export type Login = {
  email: string;
  password: string;
};

export type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};
