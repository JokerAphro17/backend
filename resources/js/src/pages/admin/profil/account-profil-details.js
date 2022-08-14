import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import  SimpleBackdrop  from '../../../components/loader';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { getUser } from '../../../api/request';
import HANDLER_STORAGE from '../../../data';
import { USER_SESSION } from '../../../utilities/constant';

export const AccountProfileDetails = (props) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
   const user = HANDLER_STORAGE.GET(USER_SESSION, 'object')
   setLoading(true)
    if(user.data?.uuid) {
      getUser(user.data?.uuid)
        .then(response => {
          setLoading(false)
          setUser(response.data?.data)
        }
        )}
    else {
      setLoading(false)
      location.replace('/auth/login')
    }
       
  } , [])
    


  const { control, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            ><Controller 
                control={control}
                name="firstName"
                defaultValue={user.firstName}
                rules={{ required: true }}
                render={({field:{ onChange, onBlur, value }}) => (
                  <TextField
                    fullWidth
                    label="Prenom"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value || "hjbhfg"}
                    error = {errors.firstName}
                    helperText = {errors.firstName && errors.firstName.message}
                    variant="outlined"
                  />
                )}
              />

                  
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Controller
                control={control}
                name="lastName" 
                defaultValue={user.lastName}  
                rules={{ required: true }}
                render={({field:{ onChange, onBlur, value }}) => (
                    <TextField
                      fullWidth
                      label="Nom"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value || ""}
                      variant="outlined"
                      error = {errors.lastName}
                      helperText = {errors.lastName && errors.lastName.message}
                    />
                  )}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Controller
                control={control}
                name="email"
                defaultValue={user.email}
                rules={{ required: "ce champs est obligatoire", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Adress email invalide" } }}
                render={({field:{ onChange, onBlur, value }}) => (
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value || ""}
                    variant="outlined" 
                    error = {errors.email}
                    helperText = {errors.email && errors.email.message}
                  />
                )}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            ><Controller
                control={control}
                name="telephone"
                defaultValue={user.phone}
                rules={{ required: true, }}
                render={({field:{ onChange, onBlur, value }}) => (
                  <TextField
                    fullWidth
                    label="Numero de telephone"
                    name="phone"
                    onChange={onChange}
                    type="number"
                    onBlur={onBlur}
                    value={value|| ""}
                    variant="outlined"
                    error = {errors.telephone}
                    helperText = {errors.telephone && errors.telephone.message}
                  />
                )}
              />
            </Grid>
            </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
            Enregistré
          </Button>
        </Box>
      </Card>
      <SimpleBackdrop open={loading} />
    </form>
  );
};

export default AccountProfileDetails;