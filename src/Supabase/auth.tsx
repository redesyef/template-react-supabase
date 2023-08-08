import { supabase } from "./client";

export const register = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    //alert("check your email ");
  } catch (error: any) {
    alert(error.message);
  }
};

export const loginWithPassword = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.message);
  }
};

export const logOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.error_description || error.message);
  }
};


export async function singUpGoogle() {
  try {
      const {  error } = await supabase.auth.signInWithOAuth({
          provider: 'google', 
      })
      if(error) throw error
      
      
  } catch (error) {
    console.log(error);
    
  }
}


