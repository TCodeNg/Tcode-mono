export interface ACL {
  [key: string]: {
    read: boolean;
    update: boolean;
    create: boolean;
    delete: boolean;
  }
}
