"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailUser({ params }) {
    const [detailUser, setDetailUser] = useState({});
    //  console.log(params, "params s ss s");
    const userId = params.user_id;
    // console.log(userId, "<---order id");

    const fetchDetailUser = async () => {
        try {
            const { data } = await axios({
                method: "get",
                url: "https://dummyjson.com/users/" + `${userId}`,
            });
            // console.log(accessToken);
            // console.log(data.list, "data list");
            console.log(data, "---<data ");
            setDetailUser(data);
        } catch (error) {
            console.log(error);
            // showToast(error.response.data.message);
        }
    };
    //  const totalPrice = detailUser.products?.detailUser.products
    //      .map((product) => product.quantity * product.product_price)
    //      .reduce((acc, subtotal) => acc + subtotal, 0);
    //  console.log(totalPrice, "totalprices");
    // console.log(orderList.list, "orderlist");
    useEffect(() => {
        fetchDetailUser();
    }, []);

    return (
        <>
            <div className="mx-5 items-center ">
                {/* component */}
                <link
                    rel="stylesheet"
                    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
                />
                <link
                    rel="stylesheet"
                    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
                />
                <section className="pt-16 bg-blueGray-50 items-center justify-center">
                    <div className="w-full lg:w-8/12 px-4 mx-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={detailUser.image}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 text-center mt-20">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                                                    {detailUser.height}
                                                </span>
                                                <span className="text-sm text-blueGray-400">
                                                    Height
                                                </span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                                                    {detailUser.weight}
                                                </span>
                                                <span className="text-sm text-blueGray-400">
                                                    Weight
                                                </span>
                                            </div>
                                            {/* <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    89
                                                </span>
                                                <span className="text-sm text-blueGray-400">
                                                    Comments
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12 text-sm">
                                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        {detailUser.firstName}{" "}
                                        {detailUser.lastName}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                                        {detailUser.address?.city}
                                    </div>
                                    <div className="mb-2 text-blueGray-600 mt-10 text-sm">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                                        {detailUser.company?.title} -{" "}
                                        {detailUser.company?.name}
                                    </div>
                                    <div className="mb-2 text-blueGray-600 text-sm">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                                        {detailUser.university}
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-sm leading-relaxed text-blueGray-700">
                                                {detailUser.firstName}{" "}
                                                {detailUser.lastName},{" "}
                                                {detailUser.age} years old, is a{" "}
                                                {detailUser.company?.title} at{" "}
                                                {detailUser.company?.name} in{" "}
                                                {
                                                    detailUser.company?.address
                                                        ?.city
                                                }
                                                . A graduate of{" "}
                                                {detailUser.university},{" "}
                                                {detailUser.firstName} lives in{" "}
                                                {detailUser.address?.city},{" "}
                                                {detailUser.address?.state}.
                                                With {detailUser.hair?.color}{" "}
                                                {detailUser.hair?.type} hair and{" "}
                                                {detailUser.eyeColor} eyes,{" "}
                                                {detailUser.firstName} is also
                                                involved in crypto with a{" "}
                                                {detailUser.crypto?.coin} wallet
                                                on the{" "}
                                                {detailUser.crypto?.network}{" "}
                                                network. {detailUser.firstName}{" "}
                                                can be reached via email at{" "}
                                                {detailUser.email}.
                                            </p>
                                            <a
                                                href="javascript:void(0);"
                                                className="font-normal text-sky-500"
                                            >
                                                Show more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="relative  pt-8 pb-6 mt-8">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Made with{" "}
                                        <a
                                            href="https://www.creative-tim.com/product/notus-js"
                                            className="text-blueGray-500 hover:text-gray-800"
                                            target="_blank"
                                        >
                                            Notus JS
                                        </a>{" "}
                                        by{" "}
                                        <a
                                            href="https://www.creative-tim.com"
                                            className="text-blueGray-500 hover:text-blueGray-800"
                                            target="_blank"
                                        >
                                            {" "}
                                            Creative Tim
                                        </a>
                                        .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        </>
    );
}
