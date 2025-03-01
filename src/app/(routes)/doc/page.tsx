import { Box } from '@mui/material'

const docURL = 'https://docs.google.com/document/d/1CqCyzzLBP_DVZ_0JrZ3taXey1gxRXykjU8UrKpiDoTk/edit?tab=t.0'

const Page = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex' }}>
            <iframe 
                src={docURL} 
                width="100%"  
                height="100%" 
                style={{ border: 'none', flexGrow: 1 }} 
            />
        </Box>
    )
}

export default Page
