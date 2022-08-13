import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../../api/request";
import axios from "axios"; 

const All = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      
        const User = async () => {
            const response = await getUsers();
            setUsers(response.data.data);
            console.log(response.data.data);
        }
        User();
        
    },[]);





    const navigate = useNavigate();
    return (
        <>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-8 py-6">
                    {/* button float right */}

                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <div class="relative inline-block float-right p-4">
                                <div class="flex space-x-2 justify-center">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            navigate("/user/add");
                                        }}
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Add User
                                    </button>
                                </div>
                            </div>
                            <div class="text-gray-900 bg-gray-200">
                                <div class="p-4 flex">
                                    <h1 class="text-3xl">Users</h1>
                                </div>
                                <div class="px-3 py-4 flex justify-center">
                                    <table class="w-full text-md bg-white shadow-md rounded mb-4">
                                        <tbody>
                                            <tr class="border-b">
                                                <th class="text-left p-3 px-5">
                                                  Full  Name
                                                </th>
                                                <th class="text-left p-3 px-5">
                                                    Email
                                                </th>
                                                <th class="text-left p-3 px-5">
                                                    Numero
                                                </th>
                                                <th class="text-left p-3 px-5">
                                                    Role
                                                </th>
                                                <th class="text-center p-3 px-5">
                                                    Action
                                                </th>
                                                <th></th>
                                            </tr>
                                            { users.map((user) => (
                                                <tr class="border-b hover:bg-orange-100 bg-gray-100">
                                                <td class="p-3 px-5">
                                                   {user.lastname} {user.firstname}
                                                </td>
                                                <td class="p-3 px-5">
                                                   { user.email}
                                                </td>
                                                <td class="p-3 px-5">
                                                    {user.telephone}
                                                </td>
                                                <td class="p-3 px-5">
                                                    {user.role}
                                                </td>
                                                <td class="p-3 px-5 flex justify-end">
                                                    <button
                                                        type="button"
                                                        class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                                    >
                                                        edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            ))}
                                           

                                        
                                        
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default All;
