export default function Navbar() {
    return (
        <>
            <div className="navbar bg-yellow-100 shadow-md h-6">
                <div className="flex-1">
                    <a className="btn btn-ghost text-base">MyBrand</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>My Account</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
