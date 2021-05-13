export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'skill',
            title: 'Skill',
            type: 'string',
        },
        {
            name: 'level',
            title: 'Level',
            type: 'reference',
            to: { type: 'skillLevel' }
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],
}