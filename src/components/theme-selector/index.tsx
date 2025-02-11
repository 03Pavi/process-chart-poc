import { useEffect, useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box } from '@mui/material';

enum Theme {
    light = 'light',
    dark = 'dark'
}
const ThemeSelector = () => {
    const [theme, setTheme] = useState<Theme>(Theme.dark);

    useEffect(() => {
        if(!localStorage.getItem('theme')) {
            localStorage.setItem('theme', Theme.dark);
        }
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <Box onClick={toggleTheme} sx={{ cursor: 'pointer'}}>
            {
                theme === Theme.dark ? <WbSunnyIcon /> : <DarkModeIcon />
            }
        </Box>
    )
}

export default ThemeSelector
