"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function InputForm({ populate }) {
    const [dataInput, setDataInput] = useState({});
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    // console.log(errors, "<<=error");
    // console.log(dataInput, "<<=datainput");

    const isEdit = Boolean(populate?.id);
    console.log(isEdit, "edit or no");
    if (populate?.id) {
        // Update form values with the fetched data
        setValue("username", dataInput.username);
        setValue("password", dataInput.password); // Assuming you want to set this value for demonstration; handle it securely
        setValue("firstName", dataInput.firstName);
        setValue("lastName", dataInput.lastName);
        setValue("gender", dataInput.gender);
        setValue("age", dataInput.age);
        setValue("email", dataInput.email);
        setValue("phone", dataInput.phone);
    }
    // POST

    const handlePostForm = async () => {
        // event.preventDefault();
        try {
            if (isEdit) {
                const response = await axios({
                    method: "put",
                    url: "https://dummyjson.com/users/" + `${dataInput.id}`,
                    data: dataInput,
                    // headers: {
                    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
                    // },
                });
                // console.log(response, "<<=resp data");
                router.push("/admin-management/list-user");
                return;
            }
            const response = await axios({
                method: "post",
                url: "https://dummyjson.com/users/add",
                data: dataInput,
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("token")}`,
                // },
            });
            // console.log(response, "<<=resp data");
            router.push("/admin-management/list-user");
        } catch (error) {
            console.log(error);
            // showToast(error.response.data.message);
        }
    };

    useEffect(() => {
        if (populate) {
            setDataInput(populate);
        }
    }, [populate]);

    return (
        <>
            <form
                onSubmit={handleSubmit((data) => {
                    setDataInput(data);
                    handlePostForm();
                })}
            >
                <div>
                    {/* form product start */}
                    <div className="">
                        {/* <div className="border-t border-gray-300 my-4"></div> */}
                        <label className="block text-sm font-medium leading-6 text-gray-400">
                            Personal
                        </label>
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Username{" "}
                                    <span className="text-red-400">
                                        * {errors.username?.message}
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("username", {
                                            required: "This is required",
                                        })}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  pl-2"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Password{" "}
                                    <span className="text-red-400">
                                        * {errors.password?.message}
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("password", {
                                            required: "This is required",
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "Minimal password is 5 characters",
                                            },
                                        })}
                                        type="password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  pl-2"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name{" "}
                                    <span className="text-red-400">
                                        * {errors.firstName?.message}
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("firstName", {
                                            required: "This is required",
                                        })}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6  pl-2"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("lastName")}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Gender{" "}
                                    <span className="text-red-400">
                                        * {errors.gender?.message}
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("gender", {
                                            required: "This is required",
                                        })}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Age{" "}
                                    <span className="text-red-400">
                                        * {errors.age?.message}
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("age", {
                                            required: "This is required",
                                        })}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Email{" "}
                                    <span className="text-red-400">
                                        * {errors.email?.message}
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("email", {
                                            required: "This is required",
                                        })}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone{" "}
                                    <span className="text-red-400">
                                        * {errors.phone?.message}
                                    </span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("phone", {
                                            required: "This is required",
                                        })}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-300 mt-10"></div>
                        {/* <label className="block text-sm font-medium leading-6 text-gray-400 mt-2">
                                    Company
                                </label> */}
                        {/* <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Company Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                {...register("companyName")}
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Department
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                {...register(
                                                    "companyDepartment"
                                                )}
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Title
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                {...register("companyTitle")}
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Company Address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                {...register("companyAddress")}
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-2"
                                            />
                                        </div>
                                    </div>
                                </div> */}
                    </div>
                    {/* form product end */}

                    <div className="flex gap-3 mt-10">
                        <button
                            type="submit"
                            className="btn px-10 btn-info text-white hover:bg-sky-800  btn-sm"
                        >
                            {isEdit ? "Update" : "Save"}
                        </button>
                        <Link
                            href={"/admin-management/list-user"}
                            className="btn btn-base px-10 btn-sm"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}
