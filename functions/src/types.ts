export interface QueryBody {
  name: string;
  email: string;
  phone: string;
  message: string;
  total?: string;
  service: string;
  platforms: string;
  features: string;
  customFeatures: string;
  users: string;
  category?: string;
}

export interface ApiRequest extends Request {
  query: QueryBody;
}
