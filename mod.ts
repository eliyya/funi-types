export type unixtime = number;

export type ApiUser = {
  id: number;
  username: string;
  displayname: string | null;
  avatar: string | null;
};

export type ApiRegister = {
  id: number;
  created_at: unixtime;
  user_id: ApiUser["id"];
  email: string;
};

export type ApiGroup = {
  id: number;
  created_at: unixtime;
  name: string;
  owner_id: ApiUser["id"];
  member_ids: ApiUser["id"][];
  description: string | null;
};

export type ApiClass = {
  id: number;
  created_at: unixtime;
  name: string;
  subject: string;
  teacher_id: number;
  icon: string | null;
  description: string | null;
  member_ids: ApiUser["id"][];
  group_ids: ApiGroup["id"][];
};
