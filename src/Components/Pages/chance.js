import { Box, Button } from '@mui/material';
import React from 'react';

const Chance = ({
    getRandomNumber,
    selectedNumber,
    getRandomStockMarket,
    selectedStockMarket,
    getRandomVal,
    selectedVal
}) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                backgroundColor: "#B944F3",
                justifyContent: "center",
                backgroundImage: 'url("/blurry-gradient-haikei.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "50%",
                    flexDirection: "column",
                    height: "100%",
                    marginTop: "25px"
                }}
            >
                <Box
                    sx={{
                        height: "150px",
                        width: "100%",
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}
                >
                    <Box
                        sx={{
                            width: "40%",
                            height: "100%",
                            backgroundImage: 'url("/stockmarket.jpeg")',
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    <Button
                        onClick={getRandomStockMarket}
                        sx={{
                            height: "40px",
                            borderRadius: "10px",
                            border: "1px solid",
                            width: "40%"
                        }}
                    >
                        Zar
                    </Button>
                </Box>
                <Box
                    sx={{
                        height: "75px",
                        width: "100%",
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px"
                    }}
                >
                    <Box
                        sx={{
                            width: "40%",
                            height: "100%",
                            backgroundColor: "none",
                            borderRadius: "15px",
                            color: "#ffffff",
                            fontWeight: "bold",
                            fontSize: "25px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {selectedStockMarket ? selectedStockMarket : 'Choose Stock Market'}
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: "150px",
                        width: "100%",
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        marginTop: "20px"
                    }}
                >
                    <Box
                        sx={{
                            width: "40%",
                            height: "100%",
                            backgroundImage: 'url("/btczar3.jpeg")',
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                    <Box
                        sx={{
                            width: "40%",
                            height: "100%",
                            backgroundColor: "red",
                            backgroundImage: 'url("/dolarlarge.jpeg")',
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%"
                    }}
                >
                    <Button
                        onClick={getRandomVal}
                        disabled={!selectedStockMarket}
                        sx={{
                            height: "40px",
                            borderRadius: "10px",
                            border: "1px solid",
                            width: "40%"
                        }}
                    >
                        Zar
                    </Button>
                    <Button
                        onClick={getRandomNumber}
                        disabled={!selectedVal}
                        sx={{
                            height: "40px",
                            borderRadius: "10px",
                            border: "1px solid",
                            width: "40%"
                        }}
                    >
                        Zar 2
                    </Button>
                </Box>
                <Box
                    sx={{
                        height: "75px",
                        width: "100%",
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        marginTop: "15px"
                    }}
                >
                    <Box
                        sx={{
                            width: "40%",
                            height: "100%",
                            backgroundColor: "none",
                            borderRadius: "15px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ffffff",
                            fontWeight: "bold",
                            fontSize: "25px"
                        }}
                    >
                        {selectedVal !== null ? selectedVal : ''}
                    </Box>
                    <Box
                        sx={{
                            width: "40%",
                            height: "100%",
                            backgroundColor: "none",
                            borderRadius: "15px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ffffff",
                            fontWeight: "bold",
                            fontSize: "25px"
                        }}
                    >
                        {selectedNumber !== null ? `${selectedNumber} TL` : ''}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Chance;
