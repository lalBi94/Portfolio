import { Box, Typography, Stack } from "@mui/joy";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/project_data.json";

export default function Project() {
    return (
        <Box component="div" display="flex" flexDirection="column" gap={5}>
            <Typography level="h3" textAlign="center">
                Mes <u>Projets</u>
            </Typography>

            <Stack
                direction="row"
                justifyContent="space-evenly"
                flexWrap="wrap"
                gap={3}
            >
                {Object.keys(projects).map((p, k) => (
                    <ProjectCard
                        key={k}
                        title={projects[p].title}
                        content={projects[p].content}
                        link={projects[p].link}
                        source={projects[p].source}
                        image={projects[p].image}
                        status={projects[p].status}
                    />
                ))}
            </Stack>
        </Box>
    );
}
