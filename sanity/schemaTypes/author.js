import { UserIcon } from "lucide-react";

export const author = {
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        {
            name: 'id',
            type: 'number',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'username',
            type: 'string',
        },
        {
            name: 'email',
            type: 'string',
        },
        {
            name: 'image',
            type: 'url',
        },
        {
            name: 'bio',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}