import React from 'react'
import { Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Counter from './Counter';
import { Box } from '@mui/material';


const theme = createTheme({
    typography: {
      fontFamily: [
        'kanit',
        'cursive',
      ].join(','),
    },
});

function Product() {
    return(
    <ThemeProvider theme={theme}>
    <Container sx={{marginY:15}}>
     <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
            <img src="https://rb.gy/yyndpf" class="rounded-circle mx-auto d-block" alt="" />
            <Typography color="secondary" variant='h5' align='center'>Coffee </Typography>
            <Box textAlign={'center'}>
            <Counter />
            </Box>
            <Stack  direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={5}>

                <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <img src="https://rb.gy/6zlr9l" class="rounded-circle mx-auto d-block" alt="" />
            <Typography color="secondary" variant='h5' align='center'>Tea </Typography>
            <Box textAlign={'center'}>
            <Counter />
            </Box>
            <Stack  direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}>
                <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <img src="https://rb.gy/fixyse" class="rounded-circle mx-auto d-block" alt="" />
            <Typography color="secondary" variant='h5' align='center'>Pastries </Typography>
            <Box textAlign={'center'}>
            <Counter />
            </Box>
            <Stack   direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}>
                <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </Stack>
        </Grid>
     </Grid>
    </Container>
    </ThemeProvider>
    );
}

export default Product;