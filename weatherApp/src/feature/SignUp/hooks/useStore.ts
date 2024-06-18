import { create } from "zustand"

interface IInitialState  {
    email: string;
    loading: boolean;
    error: string;
    addEmail: (data: string) => void;
}


const useEmailStore = create<IInitialState>((set) => ({
  email: "",
  loading: false,
  error: "",
    addEmail: (data: string) => {
        set((state) => ({...state , email: data}))
    }
}))

export default useEmailStore