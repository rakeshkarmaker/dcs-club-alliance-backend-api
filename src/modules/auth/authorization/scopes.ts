

//v3.2.0- Defines various authorization scopes used in the application.

export const SCOPES = {

    //User Scopes
    READ_USER: 'read:user',
    MANAGE_USER: 'write:user',

    //Student Scopes
    READ_STUDENT: 'read:student',
    UPDATE_STUDENT: 'update:student',

    // // Admin Scopes
    // READ_ADMIN: 'read:admin',
    // MANAGE_ADMIN: 'write:admin',

    //Auth Scopes
    READ_LOGIN_ACTIVITY: 'read:login_activity',

    // Clubs Scopes
    READ_CLUB: 'read:club',
    MANAGE_CLUB: 'write:club',

    // Membership Scopes
    READ_MEMBERSHIP: 'read:membership',
    MANAGE_MEMBERSHIP: 'write:membership', // create, update, delete or approve membership requests

    // Notice Board Scopes
    READ_NOTICE: 'read:notice',
    CREATE_NOTICE: 'create:notice',
    UPDATE_NOTICE: 'update:notice',
    MANAGE_NOTICE: 'write:notice',

    // Event Scopes
    READ_EVENT: 'read:event',
    CREATE_EVENT: 'create:event',
    MANAGE_EVENT: 'write:event',

    // Event Categories Scopes
    READ_EVENT_CATEGORY: 'read:event_category',
    MANAGE_EVENT_CATEGORY: 'write:event_category',

    // Activity Scopes
    READ_ACTIVITY: 'read:activity',
    CREATE_ACTIVITY: 'create:activity',
    UPDATE_ACTIVITY: 'update:activity',
    MANAGE_ACTIVITY: 'write:activity',

    // Activity Categories Scopes
    READ_ACTIVITY_CATEGORY: 'read:activity_category',
    MANAGE_ACTIVITY_CATEGORY: 'write:activity_category',

    // Blogs Scopes
    READ_BLOG: 'read:blog',
    CREATE_BLOG: 'create:blog',
    MANAGE_BLOG: 'write:blog',

    // Blog Comments
    READ_BLOG_COMMENT: 'read:blog_comment',
    CREATE_BLOG_COMMENT: 'create:blog_comment',
    MANAGE_BLOG_COMMENT: 'write:blog_comment',

    //Form Scopes
    READ_FORM: 'read:form',
    MANAGE_FORM: 'write:form',

    // Form Responses Scopes
    READ_FORM_RESPONSE: 'read:form_response',
    VERIFY_FORM_RESPONSE: 'verify:form_response',

    // Certificate Scopes
    READ_CERTIFICATE: 'read:certificate',
    ISSUE_CERTIFICATE: 'issue:certificate',
    MANAGE_CERTIFICATE: 'write:certificate',
} as const; // Wtih Constant Assertion
// 'as const' makes the object readonly and its properties literal types instead of just string

export type ScopeType = typeof SCOPES[keyof typeof SCOPES]; // Union type of all scope values

// Supporting Notes:

// const SCOPES = {
//   READ_USERS: 'read:users',
// }
// TypeScript infers the type as:
// { READ_USERS: string }

// const SCOPES = {
//   READ_USERS: 'read:users',
// } as const;
// TypeScript infers the type as:
// { readonly READ_USERS: 'read:users' }