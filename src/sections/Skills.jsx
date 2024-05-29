import { Typography, Card, Box, Stack } from "@mui/joy";
import SkillsCard from "../components/SkillsCard";
import skills from "../assets/skills.json";

export default function Skills() {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Typography textAlign="center" level="h3">
                Mes <u>Compétances Technique</u>
            </Typography>

            <Stack
                direction="row"
                flexWrap="wrap"
                gap={5}
                justifyContent="space-evenly"
            >
                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Langages de <u>Haut Niveau</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.hightLevel.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.hightLevel.list[s].name}
                                image={skills.hightLevel.list[s].image}
                                note={skills.hightLevel.list[s].note}
                                link={skills.hightLevel.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={2}>
                    <Typography level="h4" textAlign="center">
                        Langages de <u>Bas Niveau</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.lowLevel.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.lowLevel.list[s].name}
                                image={skills.lowLevel.list[s].image}
                                note={skills.lowLevel.list[s].note}
                                link={skills.lowLevel.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Technologies du <u>Web</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.web.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.web.list[s].name}
                                image={skills.web.list[s].image}
                                note={skills.web.list[s].note}
                                link={skills.web.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Technologies d'<u>Automatisation</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.automatisation.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.automatisation.list[s].name}
                                image={skills.automatisation.list[s].image}
                                note={skills.automatisation.list[s].note}
                                link={skills.automatisation.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
