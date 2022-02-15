import React from "react";

export const Topbar = ({ name }) => {
    return (
        <div className="flex items-center justify-between p-6 bg-gray-300 pb-2">
            <p>
                <span className="font-bold">To: </span>
                {name}
            </p>

            <p className="text-blue-400 font-semibold cursor-pointer hover:text-blue-500">
                Settings
            </p>
        </div>
    );
};
