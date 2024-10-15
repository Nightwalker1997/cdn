import { useEffect, useState } from "react";

const Test2 = () => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [testVal, setTestVal] = useState("");
    const [bn, setBN] = useState("");
    useEffect(() => {
        fetch(
            "https://api.hillzusers.com/api/dealership/single/by/url/localhost:3000"
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setData(data); // handle the fetched data
                setBN(data.bussiness_name);
            })
            .catch((err) => {
                setError(err.message); // handle any error that occurs
            })
            .finally(() => {
                console.log("Fetch attempt finished (success or failure)");
            });
    }, []);
    console.log(data);
    console.error(error);
    return (
        <div>
            <h1
                className="font-bold"
                onClick={() => {
                    setTestVal(Math.random() + "");
                }}
            >
                {bn} + {testVal}
            </h1>
        </div>
    );
};

export default Test2;
