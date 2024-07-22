import axios from "axios";
import Link from "next/link";
// import ConfirmDelete from "../components/ConfirmDelete";
export default function Table({ e, i, skip, currentPage, fetchData }) {
    // console.log(e, "id ni boss");

    // const deleteOrder = async () => {
    //     try {
    //         const { data } = await axios({
    //             method: "DELETE",
    //             url:
    //                 "https://mock.apidog.com/m1/523540-0-default/api/order/" +
    //                 `${e.id}`,
    //             headers: {
    //                 "User-Agent": "Apidog/1.0.0 (https://apidog.com)",
    //             },
    //         });
    //         // console.log(accessToken);
    //         // console.log(data.list, "data list");
    //         console.log(data, "---<data ");
    //         fetchOrderList();
    //     } catch (error) {
    //         console.log(error);
    //         // showToast(error.response.data.message);
    //     }
    // };

    return (
        <>
            <tr>
                <th>{skip + i + 1}</th>
                <td>
                    {e.firstName} {e.lastName}
                </td>
                <td>
                    {e.gender.charAt(0).toUpperCase() +
                        e.gender.slice(1).toLowerCase()}
                </td>
                <td>{e.age}</td>
                {/* <td>{e.company.name}</td> */}
                {/* <td>{e.company.department}</td> */}
                <td>{e.phone}</td>
                <td className="flex justify-between items-center space-x-4">
                    <Link
                        href={`/admin-management/list-user/${e.id}/update-user`}
                    >
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 20 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 22.0013H2C0.9 22.0013 0 21.1013 0 20.0013C0 18.9013 0.9 18.0013 2 18.0013H18C19.1 18.0013 20 18.9013 20 20.0013C20 21.1013 19.1 22.0013 18 22.0013ZM11.06 3.19128L14.81 6.94128L6.04 15.7113C5.86 15.9013 5.6 16.0013 5.34 16.0013H3C2.45 16.0013 2 15.5513 2 15.0013V12.6613C2 12.3913 2.11 12.1413 2.29 11.9513L11.06 3.19128ZM15.88 5.87128L12.13 2.12128L13.96 0.291279C14.35 -0.0987207 14.98 -0.0987207 15.37 0.291279L17.71 2.63128C18.1 3.02128 18.1 3.65128 17.71 4.04128L15.88 5.87128Z"
                                fill="#00B4FF"
                            />
                        </svg>
                    </Link>
                    <Link href={`/admin-management/list-user/${e.id}`}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H12C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM12 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H12C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM19 19H5V5H19V19Z"
                                fill="#00B4FF"
                            />
                        </svg>
                    </Link>
                    <button
                    // onClick={() => {
                    //     <ConfirmDelete />;
                    //     //  window.location.reload();
                    // }}
                    >
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.5 9V19H8.5V9H16.5ZM15 3H10L9 4H5.5V6H19.5V4H16L15 3ZM18.5 7H6.5V19C6.5 20.1 7.4 21 8.5 21H16.5C17.6 21 18.5 20.1 18.5 19V7Z"
                                fill="#FF0000"
                            />
                        </svg>
                    </button>
                </td>
            </tr>
        </>
    );
}
