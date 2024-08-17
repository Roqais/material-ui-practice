// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = ({ open, onClose, onCategorySelect }) => {
    const categories = ['Home', 'World', 'Politics', 'Technology', 'Health', 'Sports'];

    const handleCategoryClick = (category) => {
        onCategorySelect(category.toLowerCase()); // Call the function passed from App with the selected category
        onClose(); // Close the sidebar after selecting a category
    };

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List style={{ width: 250 }}>
                {categories.map((text, index) => (
                    <>
                        <ListItem key={index} onClick={() => handleCategoryClick(text)}>
                            <ListItemText primary={text} />
                        </ListItem>
                    </>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
};

export default Sidebar;
