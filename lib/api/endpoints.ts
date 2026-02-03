// list of backend routes
export const API = {
    AUTH: {
        REGISTER: '/api/auth/register',
        LOGIN: '/api/auth/login',
        VERIFY: '/api/auth/verify',
        UPDATE_PROFILE: (id: string) => `/api/auth/${id}`,
    },
    ADMIN: {
        USERS: '/api/admin/users',
        USER_BY_ID: (id: string) => `/api/admin/users/${id}`,
    }
}