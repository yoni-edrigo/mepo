export function getUser() {
    let currentUser =
    {
        '_id': '1',
        'name': 'יוני וסילבסקי'
    }
    return currentUser
}
export function getUserEvents() {
    return [
        {
            title: 'בי"ס אביטל תשפ"א', roles: [{
                title: 'רכז הסעות', subRoles: [{ title: 'admin-role1', icon: '/icons/studentReportIcon.svg' },
                { title: 'admin-role2', icon: '/icons/weeklyReportIcon.svg' }]
            },
            {
                title: 'מורה', subRoles: [{ title: 'editor-role1', icon: '/icons/studentReportIcon.svg' },
                { title: 'editor-role2', icon: '/icons/weeklyReportIcon.svg' }]
            }]
        },
        {
            title: 'חוגים אביטל תשפ"א', roles: [{
                title: 'רכז חוגים', subRoles: [{ title: 'speaker-role1', icon: '/icons/studentReportIcon.svg' },
                { title: 'speaker-role2', icon: '/icons/groupDataIcon.svg' }]
            },
            {
                title: 'מדריך', subRoles: [{ title: 'moderator-role1', icon: '/icons/studentReportIcon.svg' },
                { title: 'moderator-role2', icon: '/icons/studentReportIcon.svg' }]
            }]
        },
    ]
}