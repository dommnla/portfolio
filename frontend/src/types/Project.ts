export type ProjectSection =
    | {
        type: "text";
        title: string;
        content: string;
    }
    | {
        type: "video";
        title: string;
        description: string;
        video: string;
    }
    | {
        type: "portrait-video";
        title: string;
        description: string;
        videos: string[];
    }
    | {
        type: "gallery";
        title: string;
        description: string;
        images: string[];
    }
    | {
        type: "team";
        title: string;
        description: string;
        image: string;
        members: string[];
    }
    | {
        type: "showcase";
        title: string;
        description: string;
        items: {
            image: string;
            label: string;
        }[];
    }
    | {
        type: "development-showcase";
        title: string;
        description: string;
        portrait: string;
        landscape: string[];
    };

    
    
export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    download: string | null;
    sections: ProjectSection[];
};