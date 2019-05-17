export interface UserInfo {
  avatar: string;
  first_name: string;
  last_name: string;
  id: number;
  email: string;
}

export interface UserInfoApiResponse {
  page: number;
  total: number;
  total_pages: number;
  data: UserInfo[];
}
