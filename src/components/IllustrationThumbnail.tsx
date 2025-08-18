import { Box, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import Image, { StaticImageData } from "next/image";
import { IllustrationSlideshow } from "./IllustrationSlideshow";

export interface IllustrationThumbnailProps {
    title: string;
    year?: string;
    image: StaticImageData;
    noHover?: boolean;
    images?: StaticImageData[];
    index?: number;
}

export const IllustrationThumbnail = (props: IllustrationThumbnailProps) => {
    const { title, year, image, noHover, images, index } = props;
    const modals = useModals();
    
    const handleClick = () => {
        modals.openModal({
            children: <IllustrationSlideshow title="Illustrations" images={images || []} initialIndex={index || 0} />,
            withCloseButton: false,
            fullScreen: true,
            padding: '0px',
            styles: {
                body: {
                    backgroundColor: 'black',
                },
            },
            transitionProps: {
                transition: 'fade',
                duration: 300,
            },
            overlayProps: {
                backgroundOpacity: 1,
            },
        });
    }

    return (
        <Box style={{ position: 'relative', cursor: noHover ? 'default' : 'pointer', display: 'inline-block', width: '100%' }} mb='sm'>
            <Image src={image} alt={title} style={{ objectFit: "cover", width: '100%', height: 'auto', display: 'block' }} />
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: noHover ? 'none' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    padding: '10px',
                    textAlign: 'center',
                }}
                onClick={() => handleClick()}
                className={'comic-overlay'}
            >
                <Text size="sm" fw={600} style={{ color: 'white' }}>{`${title} ${year ? `(${year})` : ''}`}</Text>
            </Box>
        </Box>
    )
}