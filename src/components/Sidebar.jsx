import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = ({ open, onClose, onCategorySelect }) => {
    const categories = ['Home', 'World', 'Politics', 'Technology', 'Health', 'Sports'];

    const handleCategoryClick = (category) => {
        onCategorySelect(category.toLowerCase());
        if (onClose) onClose(); // Close the sidebar if onClose is provided
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            variant={onClose ? "temporary" : "permanent"} // Temporary when onClose is passed
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <List>
                {categories.map((text) => (
                    <ListItem button key={text} onClick={() => handleCategoryClick(text)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
};

export default Sidebar;
