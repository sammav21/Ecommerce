export default{
    name: 'plantCategories',
    type: 'document',
    title: 'Plant Categories',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            },
            title: 'Image'
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            },
            title: 'Slug'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        }
    ]
}