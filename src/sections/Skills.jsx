import { Typography, Box, Stack } from "@mui/joy";
import SkillsCard from "../components/SkillsCard";
import skills from "../assets/skills.json";

export default function Skills() {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Typography textAlign="center" level="h3">
                Ma <u>Stack Technique</u>
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

                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Éditeurs de <u>Code</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.ide.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.ide.list[s].name}
                                image={skills.ide.list[s].image}
                                note={skills.ide.list[s].note}
                                link={skills.ide.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Bases de <u>Données</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.db.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.db.list[s].name}
                                image={skills.db.list[s].image}
                                note={skills.db.list[s].note}
                                link={skills.db.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Distributions <u>Linux</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.linux.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.linux.list[s].name}
                                image={skills.linux.list[s].image}
                                note={skills.linux.list[s].note}
                                link={skills.linux.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Schématisation d'un <u>Système</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.dataschem.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.dataschem.list[s].name}
                                image={skills.dataschem.list[s].image}
                                note={skills.dataschem.list[s].note}
                                link={skills.dataschem.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={3}>
                    <Typography level="h4" textAlign="center">
                        Machines <u>Virtuelles</u>
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                        {Object.keys(skills.virtualization.list).map((s, k) => (
                            <SkillsCard
                                key={k}
                                title={skills.virtualization.list[s].name}
                                image={skills.virtualization.list[s].image}
                                note={skills.virtualization.list[s].note}
                                link={skills.virtualization.list[s].link}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
