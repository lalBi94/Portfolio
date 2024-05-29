import { Typography, Card, Link, LinearProgress } from "@mui/joy";
export default function SkillsCard({ title, image, link, note }) {
    return (
        <Link
            href={link}
            style={{
                height: "auto",
                margin: "0 auto",
            }}
            color="neutral"
        >
            <Card
                color="neutral"
                invertedColors={false}
                orientation="vertical"
                size="sm"
                variant="outlined"
            >
                <img
                    style={{
                        width: "50px",
                        height: "50px",
                        margin: "0 auto",
                    }}
                    src={image}
                    alt=""
                />

                <Typography>
                    <b>{title}</b>
                </Typography>

                <LinearProgress
                    determinate
                    value={note}
                    color="warning"
                    variant="solid"
                />
            </Card>
        </Link>
    );
}
