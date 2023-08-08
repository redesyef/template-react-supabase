import { supabase } from "./client";

export async function insertValues(Table: string, values: object) {
  const { error } = await supabase.from(Table).insert(values);
  console.log(error);
}

export async function selectValues(
  Table: string,
  args: string | undefined,
  mode = false,
  param?: string | any,
  cond?: string
) {
  try {
    if (mode === true) {
      const { data, error, status } = await supabase
        .from(Table)
        .select(args)
        .eq(param, cond);
      if (error && status !== 406) {
        throw error;
      }
      return data;
    } else {
      const { data, error, status } = await supabase.from(Table).select(args);
      if (error && status !== 406) {
        throw error;
      }
      return data;
    }
  } catch (error: any) {
    console.warn(error.message);
  }
}

export async function updateValues(Table: string, values: object) {
  try {
    const { error } = await supabase.from(Table).upsert(values);

    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.message);
  }
}
export async function updateData(
  Table: string,
  values: object,
  param?: any,
  cond?: any
) {
  try {
    const { data, error } = await supabase
      .from(Table)
      .update(values)
      .eq(param, cond);
    console.log(data);

    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.message);
  }
}

export async function deleteData(Table: string, id: string) {
  const { error } = await supabase.from(Table).delete().eq("id", id);
  if (error) {
    console.log(error.message);
  }
}
