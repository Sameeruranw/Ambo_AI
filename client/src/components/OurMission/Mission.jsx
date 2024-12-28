import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material"; 
import assets from "../../assets/assets";
const Mission = () => {
  return (
    <Container maxWidth="lg" style={{ padding: "20px", textAlign: "center" }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontWeight: "bold", color: "#2d3e50" }}
        >
          Our Mission
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f4f4f9",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          marginBottom: 4,
        }}
      >
        <Typography
          variant="body1"
          paragraph
          style={{ lineHeight: "1.6", color: "#555" }}
        >
          At <strong>AI-Solutions</strong>, our mission is to innovate, promote,
          and deliver the future of the digital employee experience. With a
          strong focus on supporting people at work, we are dedicated to
          providing proactive and cost-effective AI-powered software solutions
          to accelerate design, engineering, and innovation.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          style={{ lineHeight: "1.6", color: "#555" }}
        >
          We aim to create intuitive AI-driven tools that help businesses solve
          complex problems, improve efficiency, and empower teams to achieve
          their full potential. We believe in a future where AI is a key enabler
          of human progress and work-life enhancement.
        </Typography>
      </Box>

      {/* Image Section with Three Photos */}
      <Grid container spacing={4}>
      
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              alt="Innovation"
              height="200"
              image={assets.human}
              title="Innovation"
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pioneering new AI solutions to redefine work and empower teams.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              alt="Collaboration"
              height="200"
              image= {assets.ai}
              title="Collaboration"
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                Collaboration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Working together with AI to create seamless work environments.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Image 3 */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              alt="AI Solutions"
              height="200"
              image={assets.robo}
              title="AI Solutions"
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                AI Solutions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Revolutionizing industries through the power of AI-driven
                solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mission;
