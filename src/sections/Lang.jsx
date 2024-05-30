import { Typography, Box, Tooltip } from "@mui/joy";
import frenchFlag from "../assets/frenchflag.webp";
import ukFlag from "../assets/ukflag.png";

export default function Lang() {
    return (
        <Box
            component="div"
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={2}
        >
            <Typography level="h3" textAlign="center">
                Langues
            </Typography>

            <Box display="flex" gap={1} flexDirection="column">
                <Box display="flex" gap={2} flexDirection="row">
                    <img style={{ width: "50px" }} src={frenchFlag} alt="" />
                    <Tooltip title="Natif">
                        <Typography>Francais</Typography>
                    </Tooltip>
                </Box>

                <Box display="flex" gap={2} flexDirection="row">
                    <img style={{ width: "50px" }} src={ukFlag} alt="" />
                    <Tooltip title="B1+">
                        <Typography>Anglais</Typography>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
}
