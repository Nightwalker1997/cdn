import Button from "@/components/buttons/btn";
import Input from "@/components/input/input1";
import Head1 from "@/meta/head1";

export default function Home() {
    return (
        <>
            <Head1
                prefixUrl="some value"
                logo_url="some value"
                province="some value"
                city="some value"
                tab_logo_url="some value"
                dba="some value"
                bussiness_name="some value"
            />
            <Button>hi</Button>
            <Input />
        </>
    );
}
