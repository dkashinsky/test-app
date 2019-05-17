export interface ApiDataResponse<T = any> {
  data: T;
}

export interface ApiDataListResponse<T> extends ApiDataResponse<T[]> {
  page: number;
  total: number;
  total_pages: number;
}

export interface UserInfo {
  avatar: string;
  first_name: string;
  last_name: string;
  id: number;
  email: string;
}
