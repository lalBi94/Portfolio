import { Typography, Box, Link, Tooltip } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Network() {
    return (
        <Box component="div" display="flex" flexDirection="column" gap={2}>
            <Typography level="h3" textAlign="center">
                Réseaux sociaux
            </Typography>

            <Box display="flex" gap={1} flexDirection="column">
                <Box display="flex" gap={2} flexDirection="row">
                    <GitHubIcon style={{ color: "black" }} />
                    <Tooltip arrow title="GitHub">
                        <Link
                            href="https://github.com/lalBi94"
                            style={{ color: "black" }}
                            target="_blank"
                            color="neutral"
                        >
                            @lalBi94
                        </Link>
                    </Tooltip>
                </Box>

                <Box display="flex" gap={2} flexDirection="row">
                    <LinkedInIcon style={{ color: "black" }} />
                    <Tooltip arrow title="Linkedin">
                        <Link
                            href="https://www.linkedin.com/in/bilal-boudjemline-54365b228/"
                            style={{ color: "black" }}
                            target="_blank"
                            color="neutral"
                        >
                            @bilal-boudjemline-54365b228
                        </Link>
                    </Tooltip>
                </Box>

                <Box display="flex" gap={2} flexDirection="row">
                    <img
                        style={{ width: "25px" }}
                        src="https://cdn.icon-icons.com/icons2/2389/PNG/512/leetcode_logo_icon_145113.png"
                        alt=""
                    />
                    <Tooltip arrow title="Leetcode">
                        <Link
                            href="https://leetcode.com/u/lalBi94/"
                            style={{ color: "black" }}
                            target="_blank"
                            color="neutral"
                        >
                            @lalBi94
                        </Link>
                    </Tooltip>
                </Box>

                <Box display="flex" gap={2} flexDirection="row">
                    <img
                        style={{ width: "25px" }}
                        src="https://cssbattle.dev/images/logo-new-glyph.svg"
                        alt=""
                    />
                    <Tooltip color="neutral" arrow title="CSS Battle">
                        <Link
                            href="https://cssbattle.dev/player/generalzod"
                            style={{ color: "black" }}
                            target="_blank"
                            color="neutral"
                        >
                            @generalzod
                        </Link>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
}
