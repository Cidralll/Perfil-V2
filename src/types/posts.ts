export interface PostsProps {
    objects: PostProps[];
}

interface PostProps {
    slug: string;
    title: string;
    metadata: {
        subtitle: string;
        linkdeploy: string;
        linkgithub: string;
        date: string;
        image: {
            url: string;
        }
    }
}