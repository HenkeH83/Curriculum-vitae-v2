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
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'alt',
            title: 'Alt text',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Sort order',
            type: 'number'
        },
        {
            name: 'level',
            title: 'Level',
            type: 'reference',
            to: { type: 'skillLevel' }
        },
        {
            name: 'type',
            title: 'Skill type',
            type: 'reference',
            to: { type: 'skillType' }
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],
}