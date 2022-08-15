
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { changePhoto } from "../../../api/request";
import HANDLER_STORAGE from "../../../data";
import { API_STORAGE_URL } from "../../../utilities/constant";
import { Swal } from 'sweetalert2';



const AccountProfile = (props) => {
    const [file, setFile] = React.useState(null);
    
    const onChange = (param) => {
        changePhoto(param)
            .then(response => {
                const user = response.data?.data;
                
                const data =  HANDLER_STORAGE.GET('USER_SESSION','object').data;
                data.avatar = user.avatar;
                HANDLER_STORAGE.REMOVE('USER_SESSION')
                HANDLER_STORAGE.SET('USER_SESSION', data,'object')
                setFile(null)
               document.getElementById('form').reset();
                
               

            }
            )
    }
    return (
        <>
            <Card {...props}>
                <CardContent>
                    <Box
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Avatar
                            src={file ? URL.createObjectURL(file) : `${API_STORAGE_URL}/${HANDLER_STORAGE.GET('USER_SESSION','object').data.avatar}`}
                        
                            sx={{
                                height: 64,
                                mb: 2,
                                width: 64,
                            }}

                        />
                        
                        <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h5"
                        >
                          Aphro souley
                        </Typography>
                        
                        <Typography color="textSecondary" variant="body2">
                            "I like the way you think"
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                            "I like the way you think"
                        </Typography>
                    </Box>
                </CardContent>
                <Divider />
                <CardActions>
                    
                    <form id="form">

                    <TextField color="primary" type="file"
                    onChange={(eve) => {
                        const file = eve.target.files[0]
                        
                        setFile(file)
                    }
                    }
                    >
                        Upload picture
                    </TextField>
                    </form>
                        
                        
                   
                   {
                          file && <Button color="primary" variant="contained" onClick={()=> {

                              const formData = new FormData()
                              formData.append("avatar", file)
                               onChange(formData)
                          } 
                            }
                          
                        
                        
                        >
                        Change photo
                    </Button>
                   }
                    
                </CardActions>
            </Card>
        </>
    );
};
export default AccountProfile;
