import { Divider, Box, Stack, Chip } from "@mui/joy";
import "./App.scss";
import Introduction from "./sections/Introduction";
import ParcoursEtu from "./sections/Parcours";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Localisation from "./sections/Localisation";
import Network from "./sections/Network";

export default function App() {
    return (
        <Box container display="flex" flexDirection="column" gap={4.3}>
            <Introduction />
            <Divider orientation="horizontal" />
            <ParcoursEtu />
            <Divider orientation="horizontal" />
            <Project />
            <Divider orientation="horizontal" />
            <Skills />
            <Divider orientation="horizontal" />

            <Stack direction="row" flexWrap="wrap" gap={3}>
                <Localisation />
                <Divider orientation="vertical" />
                <Contact />
                <Divider orientation="vertical" />
                <Network />
            </Stack>

            <Chip
                style={{ margin: "0 auto" }}
                variant="outlined"
                label="Bilal Boudjemline"
                color="warning"
            >
                Portofolio sous license MIT
            </Chip>
        </Box>
    );
}
