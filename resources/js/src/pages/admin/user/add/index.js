import { TextField } from "@mui/material";
import React from "react";



const AddUser = () => {
    




    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800  mt-12">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                    Account settings
                </h2>
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                fullWidth
                            />
                        </div>

                        <div>
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                fullWidth
                            />
                        </div>

                        <div>
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                fullWidth
                            />
                        </div>

                        <div>
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                fullWidth
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
 
export default AddUser;