import { SCOPES, ScopeType } from "./scopes";

export const MEMBERSHIP_ROLE_SCOPES: Record<string, ScopeType[]> = {
    precedent: [
        SCOPES.CREATE_NOTICE,
        SCOPES.CREATE_ACTIVITY,
        SCOPES.CREATE_EVENT,
        SCOPES.MANAGE_MEMBERSHIP,
    ],

    moderator: [
        SCOPES.CREATE_NOTICE,
        SCOPES.CREATE_ACTIVITY,
    ],

    member: [
        SCOPES.READ_EVENT,
        SCOPES.READ_ACTIVITY,
    ],

    unassigned: [],
};
