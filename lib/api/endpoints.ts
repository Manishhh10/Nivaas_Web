// list of backend routes
export const API = {
    AUTH: {
        REGISTER: '/api/auth/register',
        LOGIN: '/api/auth/login',
        FORGOT_PASSWORD: '/api/auth/forgot-password',
        RESET_PASSWORD: '/api/auth/reset-password',
        VERIFY: '/api/auth/verify',
        UPDATE_PROFILE: (id: string) => `/api/auth/${id}`,
    },
    ADMIN: {
        USERS: '/api/admin/users',
        USER_BY_ID: (id: string) => `/api/admin/users/${id}`,
    }
}