import { Typography, Box } from "@mui/joy";

export default function Localisation() {
    return (
        <Box component="div" display="flex" flexDirection="column" gap={2}>
            <Typography textAlign="center" level="h3">
                Localisation
            </Typography>
            <Box component="div" display="flex" flexDirection="row" gap={2}>
                <Box>
                    <iframe
                        width="200"
                        height="200"
                        style={{
                            border: "1px solid #777",
                            borderRadius: "20px",
                        }}
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=%20Cambrai+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </Box>

                <iframe
                    style={{
                        border: "1px solid #777",
                        borderRadius: "20px",
                    }}
                    width="200"
                    height="200"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=%20Cr%C3%A9teil+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </Box>
        </Box>
    );
}
