import Head from "next/head";

type HeadProps = {
    prefixUrl: string;
    logo_url: string;
    province: string;
    city: string;
    tab_logo_url: string;
    dba?: string;
    bussiness_name: string;
};
const Head1: React.FC<HeadProps> = ({
    prefixUrl,
    logo_url,
    province,
    city,
    tab_logo_url,
    dba,
    bussiness_name,
}) => {
    return (
        <Head>
            <meta property="og:image" content={`${prefixUrl}${tab_logo_url}`} />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
            />
            <meta
                name="description"
                content={`${
                    dba ? dba : bussiness_name
                } is a used car dealer serving ${city}, ${province}.`}
            />
            <meta
                name="keywords"
                content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${city} ${province}, Car dealership, Auto sales, ${city}`}
            />

            <title>
                {`${dba ? dba : bussiness_name} | ${city} used car dealer`}
            </title>

            <link rel="icon" href={`${prefixUrl}${logo_url}`} />
        </Head>
    );
};

export default Head1;
