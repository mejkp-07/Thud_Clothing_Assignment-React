import React, { useEffect, useState } from "react";
import { loadCSV } from "../utils/loadCSV";
import productsCSV from "../data/products.csv";
import purchaseHistoryCSV from "../data/purchase_history.csv";
import ProductCard from "./ProductCard";
import { AppBar, Toolbar, Typography, TextField, Grid, Card, CardMedia, CardContent, Button} from "@mui/material";

const ProductList = ({ user, onLogout}) => {
    const [products, setProducts] = useState([]);
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    
    useEffect(() => {
        loadCSV(productsCSV, setProducts);
        loadCSV(purchaseHistoryCSV, setPurchaseHistory);
    }, []);

    const getPersonalizedProducts = () => {
        if (!products.length) return [];
    
        const userPurchases = purchaseHistory
            .filter((ph) => ph.UserID === user.UserID)
            .map((ph) => ph.ProductID);
    
        const purchasedCategories = new Set(
            products
                .filter((p) => userPurchases.includes(p.ProductsID))
                .map((p) => p.Category)
        );
    
        const notPurchased = products
            .filter((p) => p.Category && !purchasedCategories.has(p.Category))
            .sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    
        const purchased = products
            .filter((p) => purchasedCategories.has(p.Category))
            .sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    
        return [...notPurchased, ...purchased];
    };
    

    const personalizedProducts = getPersonalizedProducts();
    const filteredProducts = personalizedProducts.filter((product) =>
        product.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Hi, {user.Username}!
                    </Typography>
                    <TextField
                        placeholder="Search Products"
                        variant="outlined"
                        size="small"
                        sx={{
                            background: "white",
                            borderRadius: 1,
                        }}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                     <Button
                        color="secondary"
                        variant="contained"
                        sx={{ marginLeft: 2 }}
                        onClick={onLogout}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={3} padding={3}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.ProductsID}>
                            <Card
                                sx={{
                                    height: "100%",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                    "&:hover": {
                                        transform: "scale(1.02)",
                                        transition: "all 0.2s ease-in-out",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.ImageURL || "https://via.placeholder.com/150"}
                                    alt={product.ProductName}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {product.ProductName}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {product.Category}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        ₹{product.Price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" align="center" sx={{ width: "100%" }}>
                        No products found!
                    </Typography>
                )}
            </Grid>
        </div>
    );
};

export default ProductList;
