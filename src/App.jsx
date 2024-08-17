import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { CssBaseline, Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Toolbar } from '@mui/material';

import h1 from './assets/h1.jpeg'
import n2 from './assets/n2.jpeg'
import n3 from './assets/n3.jpeg'
import t2 from './assets/t2.jpeg'
import a1 from './assets/a1.jpeg'
import s1 from './assets/s1.jpeg'
import his1 from './assets/his1.jpeg'
import e1 from './assets/e1.jpeg'

const cardData =
    [
        {
            image: s1,
            title: 'Exploring the Cosmos: A Journey Through Space',
            date: '2024-01-12',
            description: 'Unravel the mysteries of the universe and discover the wonders beyond our planet.'
        },
        {
            image: his1,
            title: 'Delving into the Past: A Look at World History',
            date: 'Unknown',
            description: 'Embark on a journey through time and explore the rich tapestry of human history.'
        },
        {
            image: a1,
            title: 'The Power of Creativity: Exploring Art and Culture',
            date: '18th Century AD',
            description: 'Immerse yourself in the world of art, discover diverse cultures, and appreciate the power of human expression.'
        },
        {
            image: t2,
            title: 'Unveiling the Secrets: The Wonders of Science',
            date: '2024-07-15',
            description: 'Explore scientific discoveries, understand the natural world, and delve into the ever-evolving realm of science.'
        },
        {
            image: e1,
            title: 'The Harmony of Sound: A Celebration of Music',
            date: '15th Century BC',
            description: 'Discover the power of music throughout history, explore different genres, and appreciate its cultural significance.'
        },
        {
            image: n2,
            title: 'The Magic of Words: Exploring Literature and Language',
            date: '8th Century BC',
            description: 'Dive into the world of literature, explore the power of language, and appreciate the beauty of storytelling.'
        },
        {
            image: n3,
            title: 'Wandering the World: A Journey of Exploration',
            date: 'Current',
            description: 'Explore different cultures, discover hidden gems, and embark on exciting adventures around the globe.'
        },
        {
            image: his1,
            title: 'Marvels of Design: Exploring Architecture',
            date: '3rd Millennium BC',
            description: 'Discover architectural marvels throughout history, appreciate different styles, and understand the impact of design on societies.'
        },
        {
            image: e1,
            title: 'The World of Entertainment: A Look at Fun and Leisure',
            date: '20th Century AD',
            description: 'Explore different forms of entertainment, delve into the history of leisure activities, and discover new ways to have fun.'
        },
        {
            image: h1,
            title: 'Myths and Legends: Exploring Folklore and Mythology',
            date: 'Ancient Times',
            description: 'Uncover the rich tapestry of myths and legends from around the world, and delve into the stories that shaped cultures.'
        },
        {
            image: a1,
            title: 'The Power of Creativity: Exploring Art and Culture',
            date: '18th Century AD',
            description: 'Immerse yourself in the world of art, discover diverse cultures, and appreciate the power of human expression.'
        },
        {
            image: t2,
            title: 'Unveiling the Secrets: The Wonders of Science',
            date: '2024-07-15',
            description: 'Explore scientific discoveries, understand the natural world, and delve into the ever-evolving realm of science.'
        },
    ]

const drawerWidth = 240;

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleDrawerToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <CssBaseline />
            <Navbar handleDrawerToggle={handleDrawerToggle} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar open={sidebarOpen} onClose={handleDrawerToggle} onCategorySelect={(category) => console.log(category)} />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        bgcolor: 'background.default',
                        p: 3,
                        marginLeft: `${sidebarOpen ? drawerWidth : 0}px`,
                        transition: 'margin-left 0.3s ease',
                    }}
                >
                    <Toolbar />
                    <Container>
                        <Typography variant="h4" gutterBottom>
                            Latest News
                        </Typography>
                        <Grid container spacing={4}>
                            {cardData.map((card, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            boxShadow: 3,
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={card.image}
                                            alt={card.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6" gutterBottom>
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {card.date}
                                            </Typography>
                                            <Typography variant="body1" paragraph>
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                                            <Button
                                                size="small"
                                                color="primary"
                                                variant="contained"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Read More
                                            </Button>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default App;
