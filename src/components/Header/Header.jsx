import { Box, AppBar, Toolbar, Typography } from "@mui/material";


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1, mb: "40px" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Todos List App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
