import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchAppBar from "../../component/Layout/Header";

const SavatPage = () => {
  const [addedGoods, setAddedGoods] = useState([]);

  useEffect(() => {
    const storedAddedGoods = JSON.parse(localStorage.getItem("addedGoods")) || [];
    setAddedGoods(storedAddedGoods);
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
        "@media (min-width:1920px)": {
          maxWidth: "1600px",
        },
      }}
    >
      <SearchAppBar />
      <Grid container spacing={2} pl={3} pt={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Savat
          </Typography>
          {addedGoods.length === 0 ? (
            <Typography variant="h6">Savatda hech narsa yo'q</Typography>
          ) : (
            addedGoods.map((good, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Box
                        component="img"
                        src={good.media[0]}
                        alt={good.title}
                        sx={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">{good.title}</Typography>
                      <Typography variant="body1">{good.description}</Typography>
                      <Typography variant="body1">Sotuvchi: Hummere</Typography>
                      <Typography variant="body1">Yetkazib Berish: 1 kun, bepul</Typography>
                    </Grid>
                    <Grid item xs={3} textAlign="right">
                      <Typography variant="h6">{good.price} so'm</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SavatPage;
