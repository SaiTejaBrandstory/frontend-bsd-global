import CommonArrowGrid from "../common/CommonArrowGrid";

export const SMMArrowGrid = () => {
    const heading = "Take a Closer Look at Our Social Media Services";
    const descripton = "We use the right channels to grow your brand and reach more people:";

    const boxesData = [
        {
            title: "Facebook Marketing",
            description: "Creating pages, running advertising, and expanding communities.",
            theme: "light",
            size: "sm"
        },
        {
            title: "Instagram Marketing",
            description: "Post attention-grabbing images, videos, and stories.",
            theme: "dark",
            size: "md"
        },
        {
            title: "LinkedIn Marketing",
            description: "Make connections with industry experts and generate company leads.",
            theme: "dark",
            size: "sm"
        },
        {
            title: "TikTok Marketing",
            description: "Make entertaining, brief videos to increase interaction and reach.",
            theme: "dark",
            size: "md"
        }
    ];

    return (
        <CommonArrowGrid 
            heading={heading}
            descripton={descripton}
            boxes={boxesData}
        />
    );
};