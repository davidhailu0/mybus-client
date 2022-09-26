import {useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { Tooltip} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bus_logo from '../../Assets/images/bus_logo.png'
import { useCookies } from 'react-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import translateWord from '../../utils/languageTranslation';
import { getClientIpLocation } from "../../utils/request-api"

const pages = ['For Passengers', 'For Buses'];
const languages = ['አማርኛ',"English","Oromifa","ትግርኛ"];

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#fff",
        },
    }
}) 

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [language,setLanguage] = useState(null)
  const navigate = useNavigate()
  const [cookies,setCookie] = useCookies(['lang'])

  useEffect(()=>{
    async function fetchLanguage(){
      const languageData = await getClientIpLocation()
      setCookie("lang",languageData['lang'])
    }
    if(!cookies.lang){
      fetchLanguage()
    }
  },[cookies.lang,setCookie])

  const handleOpenUserMenu = (event) => {
    setLanguage(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setLanguage(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = ()=>{
    setAnchorElNav(null);
  }

  const goTo = (page) => {
    setAnchorElNav(null);
    if(page==="For Passengers"){
      navigate("/")
    }
    else{
      navigate(`/forBus`)
    }
  };

  const changeLanguage = (lang)=>{
    switch(lang){
      case "አማርኛ":
        setCookie("lang","amh")
        break;
      case "English":
        setCookie("lang","eng")
        break;
      case "Oromifa":
        setCookie("lang","orm")
        break;
      case "ትግርኛ":
        setCookie("lang","tgr")
        break;
      default:
        setCookie("lang","amh")
    }
    handleCloseUserMenu()
  }

  return (
    <ThemeProvider theme={customTheme}>
    <AppBar position="static" sx={{background:"white",width:"100vw"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={bus_logo} alt="My Bus Logo" height={70}/>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow:1
            }}
          >
            {translateWord(cookies["lang"],"MY BUS")}
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <img src={bus_logo} alt='My Bus Logo' height={70}/>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {translateWord(cookies["lang"],"MY BUS")}
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>goTo(page)}>
                  <Typography textAlign="center">{translateWord(cookies["lang"],page)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ mr:2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>goTo(page)}
                className={page.split(" ").join("_")}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {translateWord(cookies["lang"],page)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={translateWord(cookies["lang"],"Change Language")}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LanguageIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={language}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(language)}
              onClose={handleCloseUserMenu}
            >
              {languages.map((setting) => (
                <MenuItem key={setting} onClick={()=>changeLanguage(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
