import { useNavigate } from "react-router-dom";

const All = () => {
    const navigate = useNavigate();
    return (
        <>
            <div class="flex flex-col py-12">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-8 py-12">
                    {/* button float right */}

                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <div class="relative inline-block float-right p-4">
                                <div class="flex space-x-2 justify-center">
                                    <button
                                        type="button"
                                        onClick= {() => {
                                            navigate("/user/add")
                                        }}
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Add User
                                    </button>
                                </div>
                            </div>
                            <table class="min-w-full border text-center">
                                <thead class="border-b">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 border-2"
                                        >
                                            #
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 border-2"
                                        >
                                            Nom
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 border-2"
                                        >
                                            Prenom
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-8 py-4 border-2"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 border-2"
                                        >
                                            Numero
                                        </th>

                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-gray-900 px-6 py-4 border-2"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-2">
                                            1
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-2">
                                            Mark
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-2">
                                            Otto
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-2">
                                            @mdogmail
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            707072
                                        </td>
                                        <td
                                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                            border-2
                                        >
                                            Supprimer
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default All;
