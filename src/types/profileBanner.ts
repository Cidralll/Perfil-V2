
export interface ProfileBannerProps {
    object: {
        metadata: {
            banner: {
                url: string;
            }
            description: ItemProps[];
            links: LinkProps[];
        }
    }
}

interface ItemProps {
    item: string;
}

interface LinkProps {
    name: string;
    link: string;
}