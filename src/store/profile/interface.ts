// types.ts
export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}
// ProfileState数据接口
export interface ProfileState {
    user?: User;
    error: boolean;
}
