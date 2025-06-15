import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import { ABOUT_PATH, CNES_TABLE_PATH } from '../../../config/routes';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
      
    function handleCNESClick () {
        navigate(CNES_TABLE_PATH);
    }

    function handleAboutClick () {
        navigate(ABOUT_PATH);
    }

    return (
        <div>
            <Button
                sx={{ color: "#FFF" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleCNESClick}>CNES</MenuItem>
                <MenuItem onClick={handleAboutClick}>Sobre</MenuItem>
            </Menu>
        </div>
    );
}
