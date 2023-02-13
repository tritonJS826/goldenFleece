import {useSelector} from "react-redux";

interface IRootState {
  user: {
    email: string,
    token: string,
    id: number,
  }
}

export function useAuth() {
  const {email, token, id} = useSelector((state:IRootState) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}