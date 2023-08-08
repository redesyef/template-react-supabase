export type PostData = {
    id: string;
    post: string;
    comment: string;
    tag: string;
    created_at: string;
    id_user: {
      id: string;
      avatar_url: string;
      username: string;
      email: string;
      nickname: string;
    };
  };