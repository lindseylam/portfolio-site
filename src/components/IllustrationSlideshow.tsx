import { Carousel } from "@mantine/carousel";
import { Box, CloseButton } from "@mantine/core";
import { useModals } from "@mantine/modals";
import Image, { StaticImageData } from "next/image";
import classes from './illustration.module.css';

interface IllustrationSlideshowProps {
    title: string;
    images: StaticImageData[];
    initialIndex?: number;
}

export const IllustrationSlideshow = (props: IllustrationSlideshowProps) => {
    const { title, images, initialIndex } = props;
    const modals = useModals();
    return (<Box h={'100vh'} w={'100%'} style={{position: 'relative', display: 'flex', }}>
        <CloseButton style={{position: 'absolute', top: 0, right: 0, zIndex: 1000}} onClick={() => modals.closeAll()} variant="transparent" size="lg" />
        <Carousel 
            classNames={classes}
            controlSize={30}
            flex={1}
            height={'100%'}
            emblaOptions={{
                loop: true,
                startIndex: initialIndex,
            }}
        >
            {
                images.map((image, index) => (
                    <Carousel.Slide key={index} style={{padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                        <Box style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Image 
                                src={image} 
                                alt={title} 
                                style={{
                                    maxHeight: '100vh',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    width: 'auto',
                                    objectFit: 'contain'
                                }} 
                            />
                        </Box>
                    </Carousel.Slide>
                ))
            }
        </Carousel>
        </Box>
    )
}