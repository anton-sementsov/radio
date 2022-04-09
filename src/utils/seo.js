export const settings = {
    meta: {
        rootUrl: "https://www.20ftradio.net/",
        title: "Grains of Peace on 20ft Radio",
        description: "We believe that music is an instrument of peace, a medicine, which power can be felt by everyone and can help to find faith, hope and peace in this world again.",
        social: {
            graphic:
                "https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png",
            twitter: "@cheatcodetuts",
        },
    },
};

const socialTags = ({
    openGraphType = 'website',
    url,
    title,
    description,
    image,
    createdAt,
    updatedAt,
}) => {
    const metaTags = [
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:site",
            content:
                settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        {
            name: "twitter:creator",
            content:
                settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:image:src", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "og:title", content: title },
        { name: "og:type", content: openGraphType },
        { name: "og:url", content: url },
        { name: "og:image", content: image },
        { name: "og:description", content: description },
        {
            name: "og:site_name",
            content: settings && settings.meta && settings.meta.title,
        },
        {
            name: "og:published_time",
            content: createdAt || new Date().toISOString(),
        },
        {
            name: "og:modified_time",
            content: updatedAt || new Date().toISOString(),
        },
    ];

    return metaTags;
};


export const SEO = (props) => {
    const { url, title, description, image } = props;

    return (
        <>
            <title>{title} | App</title>
            <meta name="description" content={description} />
            {socialTags(props).map(({ name, content }) => {
                return <meta key={name} name={name} content={content} />;
            })}
        </>

    );
};