import { Box, CircularProgress, Skeleton } from '@mui/material'

const loading = () => {
    return (
        <Box sx={{ height: "calc(100vh - 64px)", width: "100%", display: "grid", placeItems: "center" }}>
            <CircularProgress/>
        </Box>
    )
}

export default loading
