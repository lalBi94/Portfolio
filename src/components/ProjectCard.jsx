import {
    Box,
    Typography,
    Stack,
    Card,
    CardOverflow,
    CardContent,
    Link,
} from "@mui/joy";

export default function ProjectCard({
    title,
    content,
    source = null,
    link = null,
    image = null,
    status,
}) {
    return (
        <Card orientation="horizontal" variant="outlined" sx={{ width: 400 }}>
            <CardOverflow>
                <Box display="flex" justifyContent="center" alignItems="center">
                    {image ? (
                        <img
                            style={{
                                padding: 10,
                                width: 100,
                            }}
                            src={image}
                            loading="lazy"
                            alt=""
                        />
                    ) : null}
                </Box>
            </CardOverflow>

            <CardContent style={{ gap: 20 }}>
                <Typography fontWeight="md" textColor="">
                    {title}
                </Typography>
                <Typography
                    level="body-sm"
                    style={{ height: "120px", overflowY: "scroll" }}
                >
                    {content}
                </Typography>
                <Stack direction="row" gap={1.5}>
                    {source ? (
                        <Link target="_blank" color="black" href={source}>
                            <b>Code</b>
                        </Link>
                    ) : null}
                    {link ? (
                        <Link target="_blank" color="black" href={link}>
                            <b>Lien</b>
                        </Link>
                    ) : null}
                </Stack>
            </CardContent>

            <CardOverflow
                variant="soft"
                color="warning"
                sx={{
                    px: 0.2,
                    writingMode: "vertical-rl",
                    justifyContent: "center",
                    fontSize: "xs",
                    fontWeight: "xl",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    borderLeft: "1px solid",
                    borderColor: "divider",
                }}
            >
                {status}
            </CardOverflow>
        </Card>
    );
}
