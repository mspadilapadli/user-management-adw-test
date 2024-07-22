"use client";
import { useSearchParams } from "next/navigation";
export default function NotificationError() {
    const params = useSearchParams();
    const error = params.get("error");
    return (
        error && (
            <div className="bg-red-400 rounded text-center text-sm p-2 max-w-xs mx-auto">
                <p>Error! {"\n"}</p>
                <span>{error}</span>
            </div>
        )
    );
}
