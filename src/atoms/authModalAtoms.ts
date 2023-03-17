import { atom } from 'recoil';

//properties of AuthModalAtom so modal 
export interface AuthModalState {
  open: boolean;
  view: 'login' | 'signup' | 'resetPassword';
}

const defaultModalState: AuthModalState = {
  open: false,
  view: 'login',
}

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: defaultModalState,
})