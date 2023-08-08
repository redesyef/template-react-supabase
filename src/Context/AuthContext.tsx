import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { supabase } from "../Supabase/client";

type tipo = null | object | boolean;
type context = object | boolean | any;

export const AuthContext = createContext<context>({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useData must be used within a Provider");
  }
  return context;
};
function AuthContextProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<tipo>(false);
  const [user, setUser] = useState<tipo>(null);
  const [loading, setLoading] = useState(true);
  //const [showChild, setShowChild] = useState(false);

  const valideUser = async () => {
    const { data } = await supabase.auth.getUser();
    const { user: currentUser } = data;

    setUser(currentUser ?? null);
    setSession(currentUser ? true : false);
    setLoading(false);
  };
  const valideState = () => {
    const { data } = supabase.auth.onAuthStateChange(
      async (event: string, session: any) => {
        if (event == "PASSWORD_RECOVERY") {
          setSession(false);
        } else if (event === "SIGNED_IN") {
          setUser(session.user);
          setSession(true);
        } else if (event === "SIGNED_OUT") {
          setSession(false);
          setUser(null);
        }
      }
    );
    return () => {
      data.subscription.unsubscribe();
    };
  };
  useEffect(() => {
    setLoading(true);
    valideUser();
    valideState();
  }, []);

  return (
    <AuthContext.Provider value={{ user, session }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
