import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { default as React, useEffect, useState } from "react";
import SearchAppBar from "../../component/Layout/Header";
import ProductCard from "../../component/productCard";

function Savat() {
  const [likedGoods, setLikedGoods] = useState([]);

  useEffect(() => {
    const storedLikedGoods = JSON.parse(localStorage.getItem("likedGoods")) || [];
    setLikedGoods(storedLikedGoods);
  }, []);
  return (
    <Container
      maxWidth="2lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }, // Responsive padding
        "@media (min-width:1920px)": {
          maxWidth: "1600px",
        },
      }}
    >
      <SearchAppBar />
      {likedGoods.length === 0 ? (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt="No favorites"
            style={{ height: "128px", width: "128px", marginBottom: "20px" }}
          />
          <Typography variant="h5" component="div" style={{ marginBottom: "10px" }}>
            Savatda hozircha mahsulot yoʻq
          </Typography>
          <Typography variant="body1" component="div" style={{ textAlign: "center", marginBottom: "20px" }}>
            Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping
          </Typography>

          <Button variant="contained" style={{ backgroundColor: "#7733FF", color: "#fff" }}>
            Bosh Sahifa
          </Button>
        </Box>
      ) : (
        <Grid container spacing={2} justifyContent="center" marginTop={2}>
          {likedGoods.map((good) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={good.id}>
              <ProductCard good={good} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Savat;
