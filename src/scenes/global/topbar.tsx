import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        backgroundColor: colors.primary[400],
        boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
      }}
    >
      {/* Search Bar */}
      <Box
        display="flex"
        alignItems="center"
        borderRadius="3px"
        marginLeft={10}
        sx={{ backgroundColor: colors.primary[300], flex: 1, maxWidth: '500px' }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton type="button" sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex" alignItems="center">
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>

        <IconButton type="button" sx={{ p: '10px' }}>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton type="button" sx={{ p: '10px' }}>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton type="button" sx={{ p: '10px' }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
