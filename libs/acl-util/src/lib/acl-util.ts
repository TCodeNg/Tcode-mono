import { ACL } from '@tcode/api-interface';

export const ACLUtils = {
  generate: (
    acl?: ACL,
    userId?: string,
    publicRead = false,
    publicCreate = false,
    publicUpdate = false,
    publicDelete = false
  ): ACL => {
    let userACL;
    if (userId) {
      userACL = {
        [userId]: {
          read: true,
          create: true,
          update: true,
          delete: true,
        },
        [`friendsOf_${userId}`]: {
          read: true,
          create: false,
          update: false,
          delete: false,
        }
      }
    }
    return acl ? acl : {
      '*': {
        read: publicRead,
        create: publicCreate,
        update: publicUpdate,
        delete: publicDelete,
      },
      ...userACL
    };
  }
};
