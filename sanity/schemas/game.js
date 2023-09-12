export default{
    name: 'game',
    type: 'document',
    title: 'Game',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            },
            title: 'Images'
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
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        }
    ]
}