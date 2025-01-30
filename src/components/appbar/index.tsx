'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ArticleIcon from '@mui/icons-material/Article';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function DrawerAppBar() {
  const router = useRouter();
  const pathname = usePathname()
  const [text, setText] = useState(pathname === '/doc' ? 'Open Readme' : 'Open Doc');

  const openDoc = () => {
    if (text === "Open Doc") {
      setText('Open Readme')
    }
    else {
      setText('Open Doc')
    }
  }

  useEffect(() => {
    if (text === "Open Doc") {
      router.push("/")
    } else {
      router.push("/doc")
    }
  }, [text])
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h6"
            component="div"
          >
            Process Chart
          </Typography>
          <Box component="button" sx={{ cursor: "pointer", display: "flex", gap: "10px" }} onClick={openDoc}>
            {text === "Open Doc" ? <TextSnippetIcon /> : <ArticleIcon />}
            <Typography>{text}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}