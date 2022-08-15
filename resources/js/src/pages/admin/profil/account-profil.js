import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
} from "@mui/material";


const user = {
    avatar: "/static/images/avatars/avatar_6.png",
    city: "Los Angeles",
    country: "USA",
    jobTitle: "Senior Developer",
    name: "Katarina Smith",
    timezone: "GTM-7",
};

const AccountProfile = (props) => {

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
                            src={user.avatar}
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
                            {`${user.city} ${user.country}`}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                            {user.timezone}
                        </Typography>
                    </Box>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button color="primary" fullWidth variant="text">
                        Upload picture
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};
export default AccountProfile;