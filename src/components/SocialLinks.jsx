import { Icon } from "@iconify/react";

const SocialLinks = () => {
    const SOCIAL_LINKS = [

        {
            link: 'https://github.com/Nasim043',
            icon: 'akar-icons:github-fill',
        },
        {
            link: 'https://www.linkedin.com/in/md-abu-saleh-nasim/',
            icon: 'akar-icons:linkedin-fill',
        },
        {
            link: 'mailto:nasimcse16@gmail.com',
            icon: 'mdi:email-outline',
        },
    ];
    return (
        <>
            <div className="flex justify-center space-x-5">
                {SOCIAL_LINKS?.map(({ icon, link }, index) => (
                    <a
                        key={`link ${index}`}
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        // className="inline-flex items-center rounded-full border border-primary-700 p-2.5 text-center text-sm font-medium text-primary-700 transition hover:bg-primary-600 hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        className="rounded-full border-2 p-1 text-primary-700 border-primary-700 hover:bg-primary-600 hover:text-neutral-50 duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    >
                        <Icon className="text-xl" icon={icon} />
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialLinks;