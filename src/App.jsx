import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import { CssBaseline, Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

function App() {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('new'); // Default query

    const API_KEY = '8caaa80ac58a4f77bed3b8ca2cf0f49f'; // Your API key
    const DUMMY_IMAGE = 'https://via.placeholder.com/400x200?text=No+Image+Available'; // URL for dummy image

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
                const filteredArticles = response.data.articles.filter(article => {
                    // Filter out articles with images from 'gizmodo.com/app/uploads' and those with null authors
                    return article.author && !(article.urlToImage && article.urlToImage.includes('gizmodo.com/app/uploads'));
                });
                setNews(filteredArticles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [query]); // Re-fetch news when query changes

    return (
        <>
            <CssBaseline />
            <Navbar onSearch={handleSearch} />
            <Box
                component="main"
                style={{
                    marginTop: '80px',
                    transition: 'margin-left 0.3s ease',
                }}
            >
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Latest News
                    </Typography>
                    <Grid container spacing={4}>
                        {news.length > 0 ? (
                            news.map((article, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={article.urlToImage || DUMMY_IMAGE} // Use dummy image if no image exists
                                            alt={article.title}
                                        />
                                        <CardContent style={{ flexGrow: 1 }}>
                                            <Typography variant="h6" gutterBottom>
                                                {article.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
                                            </Typography>
                                            <Typography variant="body1" paragraph>
                                                {article.description}
                                            </Typography>
                                        </CardContent>
                                        <Box textAlign="center" mb={2}>
                                            <Button
                                                size="small"
                                                color="primary"
                                                href={article.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Read More
                                            </Button>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Typography>No news available</Typography>
                        )}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default App;
