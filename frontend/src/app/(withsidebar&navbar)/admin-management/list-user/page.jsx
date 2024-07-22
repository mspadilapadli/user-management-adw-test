"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import TableRow from "../../../../components/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchSucces } from "@/store/appSlice";

export default function ListUser() {
    // const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [sortBy, setSortBy] = useState("firstName");
    const [order, setOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const users = useSelector((state) => state.dataUsers);

    useEffect(() => {
        if (search) {
            fetchSearch();
        } else {
            fetchData();
        }
    }, [skip, sortBy, order, search]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/users?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
            );
            // console.log(response.data, "response data");
            dispatch(fetchSucces(response.data.users));
            setTotal(response.data.total);
            setCurrentPage(skip / limit + 1);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const fetchSearch = async (e) => {
        try {
            const { data } = await axios.get(
                `https://dummyjson.com/users/search?q=${search}`
            );
            dispatch(fetchSucces(data.users));
            // setUsers(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSort = (field) => {
        const newOrder = order === "asc" ? "desc" : "asc";
        setSortBy(field);
        setOrder(newOrder);
    };

    const handleNext = () => {
        if (skip + limit < total) {
            setSkip(skip + limit);
        }
    };

    const handlePrevious = () => {
        if (skip - limit >= 0) {
            setSkip(skip - limit);
        }
    };

    const handlePageClick = (page) => {
        setSkip((page - 1) * limit);
    };

    const totalPages = Math.ceil(total / limit);

    // useEffect(() => {
    //     fetchOrderList();
    // }, []);

    return (
        <>
            <div className="">
                <div className="text-center mt-5 mb-5 font-bold text-xl">
                    User List
                </div>

                <div className="mx-5 bg-white shadow-md rounded-lg p-6">
                    <div className="flex">
                        <div>
                            <form className="pt-2 relative text-gray-600 mx-3">
                                <input
                                    className="border-2 border-gray-300 bg-white h-9 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Find User"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 mt-5 mr-4"
                                >
                                    <svg
                                        className="text-gray-600 h-4 w-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 56.966 56.966"
                                        style={{
                                            enableBackground:
                                                "new 0 0 56.966 56.966",
                                        }}
                                        xmlSpace="preserve"
                                        width="512px"
                                        height="512px"
                                    >
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div></div>
                        <div className="flex-grow"></div>

                        <div className="mr-9">
                            <Link
                                href={"/admin-management/add-user"}
                                className="btn rounded-md h-4 bg-[#1BA8DF] text-white hover:bg-sky-800 ml-auto 
]"
                            >
                                Add New User
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-x-auto mt-7">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className="text-bold text-base text-[#052A49]">
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        {/* <th>Company</th> */}
                                        {/* <th>Departement</th> */}
                                        <th>Phone Number</th>
                                        <th className="items-center justify-center">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    {users &&
                                        users.map((e, i) => {
                                            return (
                                                <TableRow
                                                    e={e}
                                                    i={i}
                                                    skip={skip}
                                                    key={e.id}
                                                    fetchData={fetchData}
                                                />
                                            );
                                        })}
                                </tbody>
                            </table>

                            {/* pagination start */}
                            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <button
                                        onClick={handlePrevious}
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                        disabled={skip === 0}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                        disabled={skip + limit >= total}
                                    >
                                        Next
                                    </button>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing{" "}
                                            <span className="font-medium">
                                                {skip + 1}
                                            </span>{" "}
                                            to{" "}
                                            <span className="font-medium">
                                                {Math.min(skip + limit, total)}
                                            </span>{" "}
                                            of{" "}
                                            <span className="font-medium">
                                                {total}
                                            </span>{" "}
                                            results
                                        </p>
                                    </div>
                                    <div>
                                        <nav
                                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                            aria-label="Pagination"
                                        >
                                            <button
                                                onClick={handlePrevious}
                                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                                disabled={skip === 0}
                                            >
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                                <svg
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>

                                            <button
                                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${"text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"} focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                            >
                                                {currentPage}
                                            </button>

                                            <button
                                                onClick={handleNext}
                                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                                disabled={skip + limit >= total}
                                            >
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                                <svg
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            {/* pagination end */}
                        </div>
                        <footer className="footer footer-center text-base-content p-4 text-gray-500">
                            <aside>
                                <p>
                                    Copyright © {new Date().getFullYear()} - All
                                    right reserved by ACME Industries Ltd
                                </p>
                            </aside>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
