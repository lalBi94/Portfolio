import { Typography, Box, Link, Tooltip } from "@mui/joy";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Contact() {
    return (
        <Box
            component="div"
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
        >
            <Typography level="h3" textAlign="center">
                Coordonées
            </Typography>

            <Box display="flex" gap={1} flexDirection="column">
                <Box display="flex" gap={2} flexDirection="row">
                    <EmailIcon style={{ color: "black" }} />
                    <Link
                        href="mailto:pro.boudjemline@gmail.com"
                        style={{ color: "black" }}
                        color="neutral"
                    >
                        pro.boudjemline@gmail.com
                    </Link>
                </Box>

                <Box display="flex" gap={2} flexDirection="row">
                    <LocalPhoneIcon style={{ color: "black" }} />
                    <Tooltip
                        arrow
                        title="Veuillez notez que c'est mon numéro de télephone personnel, je vous prie de ne pas abuser."
                    >
                        <Typography>+33 7 45 22 10 60</Typography>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
}
