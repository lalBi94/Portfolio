import {
    Typography,
    Stepper,
    Step,
    StepIndicator,
    AspectRatio,
    Chip,
    CircularProgress,
    Box,
    Stack,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "@mui/joy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import upecLogo from "../assets/upec.png";
import paulBert from "../assets/paulbert.jpeg";
import frenchConnection from "../assets/frenchconnection.jpeg";
import llisNetwork from "../assets/llisnetwork.jpeg";

export default function ParcoursEtu() {
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            gap={5}
            justifyContent="space-evenly"
        >
            <Box display="flex" flexDirection="column" gap={3}>
                <Typography textAlign="center" level="h4">
                    Mon parcours <u>Académique</u>
                </Typography>
                <Stepper orientation="vertical">
                    <Step
                        orientation="vertical"
                        indicator={
                            <CircularProgress
                                color="neutral"
                                variant="soft"
                                size="sm"
                            />
                        }
                    >
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Accordion variant="plain">
                                <AccordionSummary color="warning">
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Typography>
                                            Bachelor en informatique{" "}
                                        </Typography>
                                        <Chip
                                            variant="outlined"
                                            color="warning"
                                            size="sm"
                                            sx={{ pointerEvents: "none" }}
                                        >
                                            BAC +3
                                        </Chip>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        — Université Paris-Est Créteil
                                    </Typography>
                                    <Typography>
                                        — Parcours A : développement
                                        d'application
                                    </Typography>
                                    <Typography>
                                        — 2023 ➜ 2024 à Fontainebleau
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <AspectRatio
                                style={{ width: "100px" }}
                                ratio="21/9"
                            >
                                <img
                                    alt="logo de l'upec"
                                    loading="lazy"
                                    src={upecLogo}
                                />
                            </AspectRatio>
                        </Box>
                    </Step>

                    <Step
                        orientation="vertical"
                        indicator={
                            <StepIndicator variant="solid" color="success">
                                <CheckCircleIcon />
                            </StepIndicator>
                        }
                    >
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Accordion variant="plain">
                                <AccordionSummary color="warning">
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Typography>
                                            DUT en informatique{" "}
                                        </Typography>
                                        <Chip
                                            variant="outlined"
                                            color="warning"
                                            size="sm"
                                            sx={{ pointerEvents: "none" }}
                                        >
                                            BAC +2
                                        </Chip>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        — Université Paris-Est Créteil
                                    </Typography>
                                    <Typography>
                                        — Parcours A : développement
                                        d'application
                                    </Typography>
                                    <Typography>
                                        — 2021 ➜ 2023 à Fontainebleau et Sénart
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <AspectRatio
                                style={{ width: "100px" }}
                                ratio="21/9"
                            >
                                <img alt="logo de l'upec" src={upecLogo} />
                            </AspectRatio>
                        </Box>
                    </Step>

                    <Step
                        orientation="vertical"
                        indicator={
                            <StepIndicator variant="solid" color="success">
                                <CheckCircleIcon />
                            </StepIndicator>
                        }
                    >
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Accordion variant="plain">
                                <AccordionSummary color="warning">
                                    <Typography>Baccalauréat Réseau</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        — Lycée Professionnel Paul Bert
                                    </Typography>
                                    <Typography>— Option SISR</Typography>
                                    <Typography>— Mention Très bien</Typography>
                                    <Typography>
                                        — 2019 ➜ 2021 à Maisons-Alfort
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <AspectRatio style={{ width: "80px" }} ratio="1/1">
                                <img
                                    src={paulBert}
                                    alt="logo du lycee paul bert"
                                    loading="lazy"
                                    className="src"
                                />
                            </AspectRatio>
                        </Box>
                    </Step>
                </Stepper>
            </Box>

            <Box display="flex" flexDirection="column" gap={3}>
                <Typography textAlign="center" level="h4">
                    Mon parcours <u>Professionnel</u>
                </Typography>
                <Stepper orientation="vertical">
                    <Step
                        orientation="vertical"
                        indicator={
                            <CircularProgress
                                color="neutral"
                                variant="soft"
                                size="sm"
                            />
                        }
                    >
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Accordion variant="plain">
                                <AccordionSummary color="warning">
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Typography>Développeur IA</Typography>
                                        <Chip
                                            variant="outlined"
                                            color="warning"
                                            size="sm"
                                            sx={{ pointerEvents: "none" }}
                                        >
                                            Stage
                                        </Chip>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        — Université Paris-Est Créteil
                                    </Typography>

                                    <Typography>
                                        — Développement d'un chatbot
                                    </Typography>

                                    <Typography>
                                        qui repond aux questions lié a l'UPEC
                                    </Typography>

                                    <Typography>
                                        — Juin ➜ Aout 2024 à Créteil
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <AspectRatio
                                style={{ width: "100px" }}
                                ratio="21/9"
                            >
                                <img
                                    alt="logo de l'upec"
                                    loading="lazy"
                                    src={upecLogo}
                                />
                            </AspectRatio>
                        </Box>
                    </Step>

                    <Step
                        orientation="vertical"
                        indicator={
                            <StepIndicator variant="solid" color="success">
                                <CheckCircleIcon color="" />
                            </StepIndicator>
                        }
                    >
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Accordion variant="plain">
                                <AccordionSummary color="warning">
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Typography>
                                            Développeur Full-Stack
                                        </Typography>
                                        <Chip
                                            variant="outlined"
                                            color="warning"
                                            size="sm"
                                            sx={{ pointerEvents: "none" }}
                                        >
                                            Stage
                                        </Chip>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>— French Connection</Typography>

                                    <Typography>
                                        — Développement d'un frontend
                                    </Typography>

                                    <Typography>
                                        en React.js et d'une API en Express.js
                                    </Typography>

                                    <Typography>
                                        — Avril ➜ Juillet 2023 en Télétravail
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <AspectRatio
                                style={{ width: "100px" }}
                                ratio="21/10"
                            >
                                <img
                                    alt="logo de French connection"
                                    loading="lazy"
                                    src={frenchConnection}
                                />
                            </AspectRatio>
                        </Box>
                    </Step>

                    <Step
                        orientation="vertical"
                        indicator={
                            <StepIndicator variant="solid" color="success">
                                <CheckCircleIcon color="" />
                            </StepIndicator>
                        }
                    >
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Accordion variant="plain">
                                <AccordionSummary color="warning">
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <Typography>
                                            Administrateur Réseau
                                        </Typography>
                                        <Chip
                                            variant="outlined"
                                            color="warning"
                                            size="sm"
                                            sx={{ pointerEvents: "none" }}
                                        >
                                            Stage
                                        </Chip>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>— LLIS-NETWORK</Typography>

                                    <Typography>
                                        — Développement d'un système
                                    </Typography>

                                    <Typography>
                                        d'audit a l'aide de Rasberry et
                                        OpenAudit
                                    </Typography>

                                    <Typography>
                                        — Decembre 2020 ➜ Janvier 2021 à Créteil
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <AspectRatio style={{ width: "60px" }} ratio="1">
                                <img
                                    alt="logo de llis-network"
                                    src={llisNetwork}
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </Box>
                    </Step>
                </Stepper>
            </Box>
        </Stack>
    );
}
