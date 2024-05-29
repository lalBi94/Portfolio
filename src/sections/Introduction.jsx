import { Typography, Box } from "@mui/joy";

export default function Introduction() {
    return (
        <Box component="div" display="flex" flexDirection="column" gap={2}>
            <Typography level="h3">Bilal Boudjemline, 21 ans</Typography>

            <Box>
                <Typography>
                    Bonjour et bienvenue sur mon portfolio !
                </Typography>
                <Typography>
                    Vous y retrouverai mon parcours, mes projets et mes
                    ambitions d'avenir.
                </Typography>
            </Box>
        </Box>
    );
}
