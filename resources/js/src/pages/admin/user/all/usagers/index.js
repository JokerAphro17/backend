import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const All = () => {
    const [users, setUsers] = useState([]);
    const [page , setPage] = useState(1);


    const paginate = (param) => {
        userListePaginate(param).then((response) => {
            setUsers(response.data?.data?.data);
            const total = response.data?.data?.total;
            total % 5 === 0 ? setPage(parseInt(total/5)) : setPage(parseInt(total / 5) + 1);
            console.log(total);
            console.log(page);
        }).catch((error) => {
            console.log(error);
        }
        );
    }
    useEffect(() => {
      
        paginate(1);
       
        
    },[]);

    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col px-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 px-8 py-6">
                    {/* button float right */}

                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <div className="relative inline-block float-right p-4">
                                <div className="flex space-x-2 justify-center">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            navigate("/user/add");
                                        }}
                                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Add User{console.log(page)}
                                    </button>
                                </div>
                            </div>
                            <div className="text-gray-900 bg-gray-200">
                                <div className="p-4 flex">
                                    <h1 className="text-3xl">Users</h1>
                                </div>
                                <div className="px-3 py-4 flex justify-center">
                                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="text-left p-3 px-5">
                                                  Full  Name
                                                </th>
                                                <th className="text-left p-3 px-5">
                                                    Email
                                                </th>
                                                <th className="text-left p-3 px-5">
                                                    Numero
                                                </th>
                                                <th className="text-left p-3 px-5">
                                                    Role
                                                </th>
                                                <th className="text-center p-3 px-5">
                                                    Action
                                                </th>
                                                <th></th>
                                            </tr>
                                            { users.map((user) => (
                                                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                                <td className="p-3 px-5">
                                                   {user.lastname} {user.firstname}
                                                </td>
                                                <td className="p-3 px-5">
                                                   { user.email}
                                                </td>
                                                <td className="p-3 px-5">
                                                    {user.telephone}
                                                </td>
                                                <td className="p-3 px-5">
                                                    {user.role}
                                                </td>
                                                <td className="p-3 px-5 flex justify-end">
                                                    <button
                                                        type="button"
                                                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                                    >
                                                        edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr  >
                                                <td className="float-right" colSpan="6" 
                                                
                                                >
                                                    <BasicPagination
                                                    page={page} 
                                                paginate={paginate}/>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default All;
