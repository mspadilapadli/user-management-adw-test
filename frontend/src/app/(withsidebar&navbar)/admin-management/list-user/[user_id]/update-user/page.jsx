"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputForm from "../../../../../../components/From";
// import { useForm } from "react-hook-form";

export default function UpdateUser({ params }) {
    // GET Products
    const [populate, setPopulate] = useState({});
    // const router = useRouter();
    const userId = params.user_id;

    const fetchDataUser = async () => {
        try {
            let { data } = await axios({
                method: "get",

                url: "https://dummyjson.com/users/" + `${userId}`,

                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("token")}`,
                // },
            });
            console.log(data, "<<<data");
            setPopulate(data);
        } catch (error) {
            console.log(error);
            // showToast(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchDataUser();
    }, []);

    return (
        <>
            <div>
                <div className="text-center mt-5 mb-5 font-bold text-xl">
                    Update User
                </div>

                <div className=" mx-5 bg-white shadow-md rounded-lg p-6">
                    <InputForm populate={populate} />
                </div>
            </div>
        </>
    );
}
