import { Divider, Box, Stack, Chip } from "@mui/joy";
import "./App.scss";
import Introduction from "./sections/Introduction";
import ParcoursEtu from "./sections/Parcours";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Localisation from "./sections/Localisation";
import Network from "./sections/Network";
import Lang from "./sections/Lang";

export default function App() {
    return (
        <Box container display="flex" flexDirection="column" gap={4.3}>
            <Introduction />
            <Divider className="dispear-on-phone" orientation="horizontal" />
            <ParcoursEtu />
            <Divider className="dispear-on-phone" orientation="horizontal" />
            <Project />
            <Divider className="dispear-on-phone" orientation="horizontal" />
            <Skills />
            <Divider className="dispear-on-phone" orientation="horizontal" />

            <Stack display="flex" direction="row" flexWrap="wrap" gap={3}>
                <Localisation />
                <Divider className="dispear-on-phone" orientation="vertical" />

                <Box
                    gap={1.5}
                    flexWrap="wrap"
                    display="flex"
                    flexDirection="column"
                    className="take-full-size"
                >
                    <Contact />

                    <Divider
                        className="dispear-on-phone"
                        orientation="horizontal"
                    />

                    <Lang />
                </Box>

                <Divider className="dispear-on-phone" orientation="vertical" />

                <Network />
            </Stack>

            <Chip
                style={{ margin: "0 auto" }}
                variant="outlined"
                label="Bilal Boudjemline"
                color="warning"
            >
                Portfolio sous license MIT
            </Chip>
        </Box>
    );
}
