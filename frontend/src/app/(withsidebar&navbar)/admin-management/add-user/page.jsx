// "use client";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import InputForm from "../../../../components/From";
// import { useForm } from "react-hook-form";

export default function AddUser() {
    // GET Products
    // const [dataInput, setDataInput] = useState({});
    // const router = useRouter();

    // // const navigate = useNavigate();

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // // console.log(errors, "<<=error");
    // // console.log(dataInput, "<<=datainput");/

    // // const fetchData = async () => {
    // //     try {
    // //         const response = await fetch(
    // //             "https://mock.apidog.com/m1/523540-0-default/api/products",
    // //             {
    // //                 method: "GET",
    // //                 cache: "no-store",
    // //                 headers: {
    // //                     "User-Agent": "Apidog/1.0.0 (https://apidog.com)",
    // //                 },
    // //             }
    // //         );

    // //         if (!response.ok) {
    // //             throw new Error("Network response was not ok");
    // //         }

    // //         const data = await response.json(); // Mengonversi respons ke JSON
    // //         // console.log("data wishlist", data); // Output data JSON dari API

    // //         // console.log(data.data, "data products");
    // //         setProductList(data);
    // //     } catch (error) {
    // //         console.error("Error fetching data:", error);
    // //     }
    // // };

    // // useEffect(() => {
    // //     fetchData();
    // // }, []);

    // // POST

    // const handlePostForm = async () => {
    //     // event.preventDefault();
    //     try {
    //         console.log("masuk ke handleform");
    //         const response = await axios({
    //             method: "post",
    //             url: "https://dummyjson.com/users/add",
    //             data: dataInput,
    //             // headers: {
    //             //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             // },
    //         });
    //         console.log(response, "<<=resp data");
    //         router.push("/admin-management/list-user");
    //     } catch (error) {
    //         console.log(error);
    //         // showToast(error.response.data.message);
    //     }
    // };
    return (
        <>
            <div>
                <div className="text-center mt-5 mb-5 font-bold text-xl">
                    Add New User
                </div>

                <div className=" mx-5 bg-white shadow-md rounded-lg p-6">
                    <InputForm />
                </div>
            </div>
        </>
    );
}
